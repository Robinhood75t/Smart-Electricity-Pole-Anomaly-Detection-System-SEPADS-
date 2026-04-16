import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import PoleCard, { PoleData } from "@/components/PoleCard";
import AddPoleDialog from "@/components/AddPoleDialog";

const initialPoles: PoleData[] = [
  { id: "P0L-101", location: "Main St & 1st Ave", voltage: 232.4, current: 10.2, power: 2370, status: "active", lat: 28.6139, lng: 77.2090, connections: 12, poleType: "Overhead", phase: "Three Phase", expectedVoltage: 230, expectedCurrent: 10, expectedPower: 2300, frequency: 50.0, powerFactor: 0.95, temperature: 42.3 },
  { id: "P0L-102", location: "Park Road Junction", voltage: 228.7, current: 9.8, power: 2241, status: "active", lat: 28.6229, lng: 77.2195, connections: 8, poleType: "Overhead", phase: "Single Phase", expectedVoltage: 230, expectedCurrent: 10, expectedPower: 2300, frequency: 50.0, powerFactor: 0.92, temperature: 38.7 },
  { id: "P0L-103", location: "Industrial Zone B", voltage: 245.2, current: 15.3, power: 3751, status: "warning", lat: 28.6350, lng: 77.2250, connections: 18, poleType: "Underground", phase: "Three Phase", expectedVoltage: 240, expectedCurrent: 14, expectedPower: 3360, frequency: 50.0, powerFactor: 0.97, temperature: 55.1 },
  { id: "P0L-104", location: "Residential Block 7", voltage: 198.1, current: 8.5, power: 1684, status: "fault", lat: 28.6050, lng: 77.1950, connections: 14, poleType: "Overhead", phase: "Single Phase", expectedVoltage: 230, expectedCurrent: 10, expectedPower: 2300, frequency: 49.8, powerFactor: 0.88, temperature: 61.2 },
  { id: "P0L-105", location: "Market Square", voltage: 230.9, current: 11.0, power: 2540, status: "active", lat: 28.6180, lng: 77.2300, connections: 10, poleType: "Overhead", phase: "Three Phase", expectedVoltage: 230, expectedCurrent: 11, expectedPower: 2530, frequency: 50.0, powerFactor: 0.94, temperature: 40.5 },
  { id: "P0L-106", location: "Highway Sector 4", voltage: 0, current: 0, power: 0, status: "offline", lat: 28.6400, lng: 77.2100, connections: 6, poleType: "Subsurface", phase: "DC", expectedVoltage: 230, expectedCurrent: 8, expectedPower: 1840, frequency: 0, powerFactor: 0, temperature: 25.0 },
  { id: "P0L-107", location: "School District", voltage: 234.8, current: 7.2, power: 1690, status: "active", lat: 28.6100, lng: 77.2400, connections: 9, poleType: "Overhead", phase: "Single Phase", expectedVoltage: 230, expectedCurrent: 7, expectedPower: 1610, frequency: 50.0, powerFactor: 0.93, temperature: 37.8 },
  { id: "P0L-108", location: "Water Treatment Plant", voltage: 241.3, current: 13.6, power: 3282, status: "warning", lat: 28.6280, lng: 77.1880, connections: 16, poleType: "Underground", phase: "Three Phase", expectedVoltage: 240, expectedCurrent: 13, expectedPower: 3120, frequency: 50.0, powerFactor: 0.96, temperature: 52.4 },
];

export default function DashboardPage() {
  const [poles, setPoles] = useState<PoleData[]>(initialPoles);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [addOpen, setAddOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastTime, setToastTime] = useState("");

  // Random value changes every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPoles(prev => prev.map(pole => {
        if (pole.status === "offline") return pole;
        const voltageChange = (Math.random() - 0.5) * 4;
        const newVoltage = Math.max(180, Math.min(260, pole.voltage + voltageChange));
        const currentChange = (Math.random() - 0.5) * 1;
        const newCurrent = Math.max(0, pole.current + currentChange);
        const newPower = newVoltage * newCurrent;
        const newFreq = 49.5 + Math.random() * 1.0;
        const newPF = Math.min(1, Math.max(0.8, pole.powerFactor + (Math.random() - 0.5) * 0.02));
        const newTemp = Math.max(20, Math.min(80, pole.temperature + (Math.random() - 0.5) * 2));

        let newStatus: PoleData["status"] = "active";
        if (newVoltage > 245 || newVoltage < 200) newStatus = "warning";
        if (newVoltage > 255 || newVoltage < 190) newStatus = "fault";

        return { ...pole, voltage: newVoltage, current: newCurrent, power: newPower, status: newStatus, frequency: newFreq, powerFactor: newPF, temperature: newTemp };
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const showToast = useCallback(() => {
    setToastTime(new Date().toLocaleTimeString());
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  }, []);

  const handleRefresh = () => showToast();

  const handleAddPole = (pole: PoleData) => {
    setPoles(prev => [...prev, pole]);
    showToast();
  };

  const filtered = poles.filter(p => {
    if (filter !== "all" && p.status !== filter) return false;
    if (search) {
      const s = search.toLowerCase();
      return p.id.toLowerCase().includes(s) || p.location.toLowerCase().includes(s) || p.status.includes(s);
    }
    return true;
  });

  const counts = {
    all: poles.length,
    active: poles.filter(p => p.status === "active").length,
    warning: poles.filter(p => p.status === "warning").length,
    fault: poles.filter(p => p.status === "fault").length,
  };

  return (
    <div className="min-h-screen">
      <div className="bg-grid" />
      <Navbar variant="dashboard" onRefresh={handleRefresh} onAddPole={() => setAddOpen(true)} />

      {/* Toast */}
      <div className={`fixed bottom-6 right-6 z-[300] flex items-center gap-2.5 px-4 py-3 rounded-xl bg-pe-surface2 border border-pe-green/30 font-mono text-xs shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-transform duration-300 ${toastVisible ? 'translate-y-0' : 'translate-y-20'}`}>
        <div className="w-[7px] h-[7px] rounded-full bg-pe-green flex-shrink-0" />
        <span>Data refreshed</span>
        <span className="text-pe-muted">{toastTime}</span>
      </div>

      <main className="pt-[60px] max-w-[1280px] mx-auto px-6">
        <div className="py-8 border-b border-[var(--pe-border)] mb-6">
          <h1 className="text-2xl font-bold">Pole Monitoring</h1>
          <p className="font-mono text-[11px] text-pe-muted tracking-[0.1em] uppercase mt-1">{poles.length} poles registered</p>
        </div>

        {/* Filters */}
        <div className="flex gap-2 flex-wrap mb-4">
          {(["all", "active", "warning", "fault"] as const).map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border font-mono text-[11px] font-medium tracking-wider transition-all ${filter === f ? 'bg-pe-orange/10 border-pe-orange/40 text-pe-orange' : 'border-[var(--pe-border)] text-pe-muted hover:border-[var(--pe-border-md)] hover:text-white'}`}>
              {f !== "all" && <span className={`w-1.5 h-1.5 rounded-full ${f === 'active' ? 'bg-pe-green shadow-[0_0_6px_var(--pe-green)]' : f === 'warning' ? 'bg-pe-amber' : 'bg-pe-red'}`} />}
              {f === "all" ? "All" : f === "fault" ? "Fault" : f.charAt(0).toUpperCase() + f.slice(1)}
              <span className="px-1.5 py-px rounded-full bg-pe-surface2 text-[10px] font-bold">{counts[f]}</span>
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="mb-6">
          <input type="text" value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search by ID, location, or status..."
            className="w-full bg-pe-surface border border-[var(--pe-border)] rounded-xl px-4 py-2.5 font-mono text-xs text-white placeholder:text-white/25 outline-none focus:border-pe-orange/40 focus:shadow-[0_0_0_3px_rgba(247,147,26,0.07)] transition-all"
          />
        </div>

        {/* Pole List */}
        <div className="flex flex-col gap-2.5 pb-12">
          {filtered.map(pole => (
            <PoleCard key={pole.id} pole={pole} />
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-16 text-pe-muted font-mono text-sm">No poles match your search.</div>
          )}
        </div>
      </main>

      <AddPoleDialog open={addOpen} onClose={() => setAddOpen(false)} onAdd={handleAddPole} />
    </div>
  );
}
