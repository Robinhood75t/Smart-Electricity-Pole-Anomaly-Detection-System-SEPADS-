import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { PoleData } from "./PoleCard";

interface AddPoleDialogProps {
  open: boolean;
  onClose: () => void;
  onAdd: (pole: PoleData) => void;
}

export default function AddPoleDialog({ open, onClose, onAdd }: AddPoleDialogProps) {
  const [form, setForm] = useState({
    poleId: "",
    location: "",
    poleType: "Overhead",
    phase: "Single Phase",
    voltage: "",
    current: "",
    power: "",
    connections: "",
    transformer: "",
    circuit: "",
    lat: "",
    lng: "",
  });

  const update = (key: string, val: string) => setForm(prev => ({ ...prev, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = parseFloat(form.voltage) || 230;
    const c = parseFloat(form.current) || 10;
    const newPole: PoleData = {
      id: form.poleId || `P0L-${Math.floor(Math.random() * 900 + 100)}`,
      location: form.location || "New Location",
      voltage: v,
      current: c,
      power: parseFloat(form.power) || v * c,
      status: "active",
      lat: parseFloat(form.lat) || 28.6139 + (Math.random() - 0.5) * 0.1,
      lng: parseFloat(form.lng) || 77.209 + (Math.random() - 0.5) * 0.1,
      connections: parseInt(form.connections) || 12,
      poleType: form.poleType,
      phase: form.phase,
      expectedVoltage: v,
      expectedCurrent: c,
      expectedPower: v * c,
      frequency: 50.0,
      powerFactor: 0.95,
      temperature: 35 + Math.random() * 15,
    };
    onAdd(newPole);
    setForm({ poleId: "", location: "", poleType: "Overhead", phase: "Single Phase", voltage: "", current: "", power: "", connections: "", transformer: "", circuit: "", lat: "", lng: "" });
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-pe-bg border-[var(--pe-border)] max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl font-bold">
            <span className="w-8 h-8 rounded-lg bg-pe-orange/10 border border-pe-orange/30 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-pe-orange">
                <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
            </span>
            Add New Pole
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="pe-form-section">
            <div className="pe-form-section-title">Basic Information</div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-[10px] font-semibold tracking-[0.15em] uppercase text-pe-muted mb-2">Pole ID *</label>
                <input className="pe-input" placeholder="e.g., P0L-101" value={form.poleId} onChange={e => update("poleId", e.target.value)} required />
              </div>
              <div>
                <label className="block font-mono text-[10px] font-semibold tracking-[0.15em] uppercase text-pe-muted mb-2">Location *</label>
                <input className="pe-input" placeholder="e.g., Main St & 1st Ave" value={form.location} onChange={e => update("location", e.target.value)} required />
              </div>
            </div>
          </div>

          <div className="pe-form-section">
            <div className="pe-form-section-title">Technical Specifications</div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block font-mono text-[10px] font-semibold tracking-[0.15em] uppercase text-pe-muted mb-2">Pole Type</label>
                <select className="pe-select" value={form.poleType} onChange={e => update("poleType", e.target.value)}>
                  <option value="Overhead">Overhead</option>
                  <option value="Underground">Underground</option>
                  <option value="Subsurface">Subsurface</option>
                </select>
              </div>
              <div>
                <label className="block font-mono text-[10px] font-semibold tracking-[0.15em] uppercase text-pe-muted mb-2">Phase Type</label>
                <select className="pe-select" value={form.phase} onChange={e => update("phase", e.target.value)}>
                  <option value="Single Phase">Single Phase</option>
                  <option value="Three Phase">Three Phase</option>
                  <option value="DC">DC</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block font-mono text-[10px] font-semibold tracking-[0.15em] uppercase text-pe-muted mb-2">Voltage (V)</label>
                <input className="pe-input" type="number" placeholder="230" value={form.voltage} onChange={e => update("voltage", e.target.value)} required />
              </div>
              <div>
                <label className="block font-mono text-[10px] font-semibold tracking-[0.15em] uppercase text-pe-muted mb-2">Current (A)</label>
                <input className="pe-input" type="number" placeholder="10" value={form.current} onChange={e => update("current", e.target.value)} required />
              </div>
              <div>
                <label className="block font-mono text-[10px] font-semibold tracking-[0.15em] uppercase text-pe-muted mb-2">Power (W)</label>
                <input className="pe-input" type="number" placeholder="2200" value={form.power} onChange={e => update("power", e.target.value)} required />
              </div>
            </div>
            <div>
              <label className="block font-mono text-[10px] font-semibold tracking-[0.15em] uppercase text-pe-muted mb-2">Connections</label>
              <input className="pe-input" type="number" placeholder="12" value={form.connections} onChange={e => update("connections", e.target.value)} />
            </div>
          </div>

          <div className="pe-form-section">
            <div className="pe-form-section-title">Equipment & Location</div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block font-mono text-[10px] font-semibold tracking-[0.15em] uppercase text-pe-muted mb-2">Transformer ID</label>
                <input className="pe-input" placeholder="e.g., TRF-101" value={form.transformer} onChange={e => update("transformer", e.target.value)} />
              </div>
              <div>
                <label className="block font-mono text-[10px] font-semibold tracking-[0.15em] uppercase text-pe-muted mb-2">Circuit ID</label>
                <input className="pe-input" placeholder="e.g., CKT-A12" value={form.circuit} onChange={e => update("circuit", e.target.value)} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-[10px] font-semibold tracking-[0.15em] uppercase text-pe-muted mb-2">Latitude</label>
                <input className="pe-input" type="number" step="any" placeholder="28.6139" value={form.lat} onChange={e => update("lat", e.target.value)} />
              </div>
              <div>
                <label className="block font-mono text-[10px] font-semibold tracking-[0.15em] uppercase text-pe-muted mb-2">Longitude</label>
                <input className="pe-input" type="number" step="any" placeholder="77.2090" value={form.lng} onChange={e => update("lng", e.target.value)} />
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button type="submit" className="flex-1 py-3 rounded-lg bg-gradient-to-r from-pe-orange-d to-pe-orange font-mono text-sm font-semibold tracking-wider uppercase text-white shadow-[var(--pe-glow-sm)] hover:shadow-[var(--pe-glow-md)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polyline points="20 6 9 17 4 12"/></svg>
              Create Pole
            </button>
            <button type="button" onClick={onClose} className="px-6 py-3 rounded-lg border border-[var(--pe-border)] font-mono text-sm tracking-wider uppercase text-pe-muted hover:border-pe-orange/40 hover:text-pe-orange transition-all">
              Cancel
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
