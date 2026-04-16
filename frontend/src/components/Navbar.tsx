import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

interface NavbarProps {
  variant?: "public" | "dashboard";
  employeeId?: string;
  onRefresh?: () => void;
  onAddPole?: () => void;
}

const BoltIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

export default function Navbar({ variant = "public", employeeId, onRefresh, onAddPole }: NavbarProps) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [clock, setClock] = useState("");

  // Live clock for dashboard
  if (variant === "dashboard") {
    setTimeout(() => {
      setClock(new Date().toLocaleTimeString("en-US", { hour12: false }));
    }, 1000);
  }

  if (variant === "dashboard") {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-[60px] bg-[rgba(3,3,4,0.9)] backdrop-blur-[20px] border-b border-[var(--pe-border)]">
        <div className="flex items-center gap-3">
          <div className="w-[30px] h-[30px] bg-gradient-to-br from-pe-orange-d to-pe-orange rounded-md flex items-center justify-center shadow-[var(--pe-glow-sm)]">
            <BoltIcon />
          </div>
          <div className="font-mono text-sm font-bold tracking-wider uppercase grad-text">PowerEye</div>
          <div className="w-px h-5 bg-[var(--pe-border)]" />
          <div className="font-mono text-[11px] text-pe-muted tracking-wider">{employeeId || "EMP-00001"}</div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-pe-green/30 bg-pe-green/5 font-mono text-[10px] font-bold tracking-[0.14em] uppercase text-pe-green">
            <div className="w-1.5 h-1.5 rounded-full bg-pe-green animate-pulse shadow-[0_0_6px_var(--pe-green)]" />
            LIVE
          </div>
          <div className="font-mono text-xs font-semibold text-pe-muted tracking-wider hidden md:block">{clock}</div>
          <div className="flex gap-2">
            <button onClick={onAddPole} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-pe-orange/10 border border-pe-orange/30 font-mono text-[11px] font-medium tracking-wider uppercase text-pe-orange hover:bg-pe-orange/20 hover:shadow-[var(--pe-glow-sm)] transition-all">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              <span className="hidden sm:inline">Add Pole</span>
            </button>
            <button onClick={onRefresh} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md border border-[var(--pe-border)] font-mono text-[11px] font-medium tracking-wider uppercase text-pe-muted hover:border-pe-orange/40 hover:text-pe-orange transition-all">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36M20.49 15a9 9 0 0 1-14.85 3.36"/>
              </svg>
              <span className="hidden sm:inline">Refresh</span>
            </button>
            <Link to="/" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md border border-[var(--pe-border)] font-mono text-[11px] font-medium tracking-wider uppercase text-pe-muted hover:border-pe-orange/40 hover:text-pe-orange transition-all">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                <polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
              <span className="hidden sm:inline">Logout</span>
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-16 bg-[rgba(3,3,4,0.85)] backdrop-blur-[20px] border-b border-[var(--pe-border)]">
        <Link to="/" className="flex items-center gap-2.5 font-mono text-[15px] font-semibold tracking-wider hover:opacity-85 transition-opacity">
          <div className="w-8 h-8 bg-gradient-to-br from-pe-orange-d to-pe-orange rounded-lg flex items-center justify-center shadow-[var(--pe-glow-sm)]">
            <BoltIcon />
          </div>
          PowerEye
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/#features" className="font-mono text-xs font-medium tracking-[0.1em] uppercase text-pe-muted hover:text-pe-orange transition-colors">Features</Link>
          <Link to="/about" className={`font-mono text-xs font-medium tracking-[0.1em] uppercase transition-colors ${isActive('/about') ? 'text-pe-orange' : 'text-pe-muted hover:text-pe-orange'}`}>About</Link>
          <Link to="/contact" className={`font-mono text-xs font-medium tracking-[0.1em] uppercase transition-colors ${isActive('/contact') ? 'text-pe-orange' : 'text-pe-muted hover:text-pe-orange'}`}>Contact</Link>
        </div>
        <div className="hidden md:flex items-center gap-2.5">
          <Link to="/login" className="px-4 py-2 rounded-full border border-[var(--pe-border-md)] font-mono text-xs font-medium tracking-wider uppercase text-pe-muted hover:border-pe-orange/50 hover:text-pe-orange transition-all">Sign In</Link>
          <Link to="/signup" className="px-5 py-2 rounded-full bg-gradient-to-r from-pe-orange-d to-pe-orange font-mono text-xs font-semibold tracking-wider uppercase text-white shadow-[var(--pe-glow-sm)] hover:scale-[1.04] hover:shadow-[var(--pe-glow-md)] transition-all">Sign Up</Link>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-[5px] bg-transparent border-none p-1.5">
          <span className={`block w-[22px] h-0.5 bg-pe-muted rounded transition-all ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-[22px] h-0.5 bg-pe-muted rounded transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-[22px] h-0.5 bg-pe-muted rounded transition-all ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </nav>
      {menuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-[rgba(15,17,21,0.97)] backdrop-blur-[20px] border-b border-[var(--pe-border)] p-6 flex flex-col gap-4 md:hidden">
          <Link to="/#features" onClick={() => setMenuOpen(false)} className="font-mono text-[13px] tracking-wider uppercase text-pe-muted py-2 border-b border-[var(--pe-border)] hover:text-pe-orange">Features</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="font-mono text-[13px] tracking-wider uppercase text-pe-muted py-2 border-b border-[var(--pe-border)] hover:text-pe-orange">About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="font-mono text-[13px] tracking-wider uppercase text-pe-muted py-2 border-b border-[var(--pe-border)] hover:text-pe-orange">Contact</Link>
          <div className="flex gap-2.5 pt-2">
            <Link to="/login" className="px-4 py-2 rounded-full border border-[var(--pe-border-md)] font-mono text-xs font-medium tracking-wider uppercase text-pe-muted">Sign In</Link>
            <Link to="/signup" className="px-5 py-2 rounded-full bg-gradient-to-r from-pe-orange-d to-pe-orange font-mono text-xs font-semibold tracking-wider uppercase text-white shadow-[var(--pe-glow-sm)]">Sign Up</Link>
          </div>
        </div>
      )}
    </>
  );
}
