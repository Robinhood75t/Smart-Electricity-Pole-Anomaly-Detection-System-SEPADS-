import { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [15, 24],
  iconAnchor: [7, 24],
});

export interface PoleData {
  id: string;
  location: string;
  voltage: number;
  current: number;
  power: number;
  status: "active" | "warning" | "fault" | "offline";
  lat: number;
  lng: number;
  connections: number;
  poleType: string;
  phase: string;
  expectedVoltage: number;
  expectedCurrent: number;
  expectedPower: number;
  frequency: number;
  powerFactor: number;
  temperature: number;
}

export default function PoleCard({ pole }: { pole: PoleData }) {
  const [expanded, setExpanded] = useState(false);

  const statusColors: Record<string, string> = {
    active: "bg-pe-green shadow-[0_0_8px_rgba(34,197,94,0.5)]",
    warning: "bg-pe-amber shadow-[0_0_8px_rgba(245,158,11,0.5)]",
    fault: "bg-pe-red shadow-[0_0_8px_rgba(239,68,68,0.5)]",
    offline: "bg-pe-muted",
  };

  const voltageColors: Record<string, string> = {
    active: "text-pe-green",
    warning: "text-pe-amber",
    fault: "text-pe-red",
    offline: "text-pe-muted",
  };

  const badgeStyles: Record<string, string> = {
    active: "bg-pe-green/10 text-pe-green border-pe-green/25",
    warning: "bg-pe-amber/10 text-pe-amber border-pe-amber/25",
    fault: "bg-pe-red/10 text-pe-red border-pe-red/25",
    offline: "bg-pe-muted/10 text-pe-muted border-pe-muted/20",
  };

  const Stat = ({ label, value, unit }: { label: string; value: string; unit?: string }) => (
    <div>
      <div className="font-mono text-[10px] text-pe-muted uppercase tracking-wider mb-1">{label}</div>
      <div className="font-mono text-sm font-semibold">{value} {unit && <span className="text-xs text-pe-muted">{unit}</span>}</div>
    </div>
  );

  return (
    <div className={`pole-card status-${pole.status} !block`} onClick={() => setExpanded(!expanded)}>
      {/* Main row */}
      <div className="grid grid-cols-[auto_1fr_auto_auto] gap-4 items-center">
        <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${statusColors[pole.status]} ${pole.status === 'active' ? 'animate-pulse' : ''}`} />
        
        <div>
          <div className="font-mono text-[13px] font-semibold mb-0.5">{pole.id}</div>
          <div className="text-xs text-pe-muted">{pole.location}</div>
          <span className={`inline-flex items-center mt-1.5 px-2 py-0.5 rounded-full font-mono text-[9px] font-bold tracking-wider uppercase border ${badgeStyles[pole.status]}`}>
            {pole.status}
          </span>
        </div>

        <div className={`font-mono text-xl font-bold text-right ${voltageColors[pole.status]}`}>
          {pole.voltage.toFixed(1)}<span className="text-xs font-normal ml-0.5">V</span>
        </div>

        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-4 h-4 text-pe-muted transition-transform ${expanded ? 'rotate-180' : ''}`}>
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>

      {/* Expanded details */}
      {expanded && (
        <div className="mt-4 pt-4 border-t border-[var(--pe-border)]" onClick={e => e.stopPropagation()}>
          <div className="grid grid-cols-[1fr_auto] gap-6">
            {/* Stats grid */}
            <div className="space-y-4">
              {/* Live values */}
              <div>
                <div className="font-mono text-[9px] text-pe-orange uppercase tracking-widest mb-2 font-bold">Live Readings</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <Stat label="Voltage" value={pole.voltage.toFixed(1)} unit="V" />
                  <Stat label="Current" value={pole.current.toFixed(1)} unit="A" />
                  <Stat label="Power" value={pole.power.toFixed(0)} unit="W" />
                  <Stat label="Frequency" value={pole.frequency.toFixed(1)} unit="Hz" />
                  <Stat label="Power Factor" value={pole.powerFactor.toFixed(2)} />
                  <Stat label="Temperature" value={pole.temperature.toFixed(1)} unit="°C" />
                </div>
              </div>

              {/* Expected values */}
              <div>
                <div className="font-mono text-[9px] text-pe-amber uppercase tracking-widest mb-2 font-bold">Expected Values</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <Stat label="Exp. Voltage" value={pole.expectedVoltage.toFixed(1)} unit="V" />
                  <Stat label="Exp. Current" value={pole.expectedCurrent.toFixed(1)} unit="A" />
                  <Stat label="Exp. Power" value={pole.expectedPower.toFixed(0)} unit="W" />
                </div>
              </div>

              {/* Pole info */}
              <div>
                <div className="font-mono text-[9px] text-pe-muted uppercase tracking-widest mb-2 font-bold">Pole Info</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <Stat label="Connections" value={String(pole.connections)} />
                  <Stat label="Pole Type" value={pole.poleType} />
                  <Stat label="Phase" value={pole.phase} />
                  <Stat label="Coordinates" value={`${pole.lat.toFixed(4)}, ${pole.lng.toFixed(4)}`} />
                </div>
              </div>
            </div>

            {/* Map - using OpenStreetMap for real-looking tiles */}
            <div className="w-[160px] h-[180px] rounded-lg overflow-hidden border border-[var(--pe-border)] flex-shrink-0">
              <MapContainer
                center={[pole.lat, pole.lng]}
                zoom={15}
                scrollWheelZoom={false}
                dragging={false}
                zoomControl={false}
                attributionControl={false}
                style={{ width: "100%", height: "100%" }}
              >
                <TileLayer url="https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}" />
                <Marker position={[pole.lat, pole.lng]} icon={defaultIcon} />
              </MapContainer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
