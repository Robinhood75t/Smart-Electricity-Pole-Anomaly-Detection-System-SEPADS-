import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative z-[1] border-t border-[var(--pe-border)] py-10 px-8 flex flex-col items-center gap-3 bg-pe-surface">
      <div className="font-mono text-[11px] font-semibold tracking-[0.2em] uppercase grad-text">PowerEye Monitor</div>
      <div className="text-xs text-pe-muted font-mono">© 2026 PowerEye Monitor — Electricity Pole Voltage System. All rights reserved.</div>
      <div className="flex gap-6">
        <Link to="/about" className="font-mono text-[11px] tracking-wider uppercase text-pe-muted hover:text-pe-orange transition-colors">About</Link>
        <Link to="/contact" className="font-mono text-[11px] tracking-wider uppercase text-pe-muted hover:text-pe-orange transition-colors">Contact</Link>
        <Link to="/login" className="font-mono text-[11px] tracking-wider uppercase text-pe-muted hover:text-pe-orange transition-colors">Sign In</Link>
        <Link to="/signup" className="font-mono text-[11px] tracking-wider uppercase text-pe-muted hover:text-pe-orange transition-colors">Register</Link>
      </div>
    </footer>
  );
}
