import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [empId, setEmpId] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !empId || !pass) { setMsg("Please fill all fields"); return; }
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-grid" /><div className="bg-orb bg-orb1" /><div className="bg-orb bg-orb2" />
      <Navbar />
      <div className="flex-1 grid md:grid-cols-2 min-h-screen pt-16">
        {/* Left Brand */}
        <div className="relative overflow-hidden hidden md:flex flex-col justify-center px-14 bg-pe-surface border-r border-[var(--pe-border)]">
          <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-pe-orange blur-[120px] opacity-[0.07] pointer-events-none" />
          <div className="relative z-[1]">
            <div className="w-16 h-16 bg-gradient-to-br from-pe-orange-d to-pe-orange rounded-2xl flex items-center justify-center shadow-[var(--pe-glow-md)] mb-8">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" className="w-8 h-8"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <h2 className="text-4xl font-bold leading-tight mb-3">Power<span className="grad-text">Eye</span><br/>Monitor</h2>
            <div className="font-mono text-[11px] font-medium tracking-[0.14em] uppercase text-pe-muted mb-12">Electricity Pole Voltage System</div>
            <div className="flex flex-col gap-5">
              {["Real-Time Voltage Monitoring", "Instant Fault Detection", "Secure Employee Access"].map((f, i) => (
                <div key={i} className="flex items-start gap-3.5">
                  <div className="w-2 h-2 rounded-full bg-pe-orange shadow-[0_0_10px_rgba(247,147,26,0.5)] mt-1.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-sm font-semibold mb-0.5">{f}</strong>
                    <span className="text-[13px] text-pe-muted">{["Live readings from all grid nodes", "Auto-alerts on abnormal voltage spikes", "Role-based access for field engineers"][i]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-8 left-14 font-mono text-[11px] text-pe-muted/50 tracking-wider">© 2026 PowerEye Monitor. All rights reserved.</div>
        </div>

        {/* Right Form */}
        <div className="flex items-center justify-center px-8 md:px-14 bg-pe-bg">
          <div className="w-full max-w-[420px]">
            <div className="mb-8">
              <div className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-pe-orange mb-2">Employee Portal</div>
              <h1 className="text-3xl font-bold mb-1.5">Sign In</h1>
              <div className="text-sm text-pe-muted">Access your grid dashboard</div>
            </div>
            {msg && <div className="bg-pe-red/10 border border-pe-red/30 text-pe-red rounded-lg px-4 py-2.5 font-mono text-xs mb-4">{msg}</div>}

            {[{ label: "Email Address", type: "email", val: email, set: setEmail, ph: "you@company.com" },
              { label: "Employee ID", type: "text", val: empId, set: setEmpId, ph: "EMP-00000" },
            ].map((f, i) => (
              <div key={i} className="mb-5">
                <label className="block font-mono text-[10px] font-semibold tracking-[0.15em] uppercase text-pe-muted mb-2">{f.label}</label>
                <input type={f.type} value={f.val} onChange={e => f.set(e.target.value)} placeholder={f.ph} className="pe-input" />
              </div>
            ))}

            <div className="mb-6">
              <label className="block font-mono text-[10px] font-semibold tracking-[0.15em] uppercase text-pe-muted mb-2">Password</label>
              <div className="relative">
                <input type={showPass ? "text" : "password"} value={pass} onChange={e => setPass(e.target.value)} placeholder="••••••••" className="pe-input pr-10" />
                <button onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-pe-muted hover:text-pe-orange transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </button>
              </div>
            </div>

            <button onClick={handleLogin} className="w-full py-3.5 rounded-lg bg-gradient-to-r from-pe-orange-d to-pe-orange font-mono text-sm font-semibold tracking-wider uppercase text-white shadow-[var(--pe-glow-sm)] hover:shadow-[var(--pe-glow-md)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
              Sign In
            </button>

            <div className="text-center text-[13px] text-pe-muted font-mono mt-5">
              Don't have an account? <Link to="/signup" className="text-pe-orange hover:underline">Create Account →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
