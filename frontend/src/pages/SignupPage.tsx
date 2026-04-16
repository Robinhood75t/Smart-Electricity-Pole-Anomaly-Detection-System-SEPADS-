import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [empId, setEmpId] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const getStrength = () => {
    let s = 0;
    if (pass.length >= 8) s++;
    if (/[A-Z]/.test(pass)) s++;
    if (/[0-9]/.test(pass)) s++;
    if (/[^A-Za-z0-9]/.test(pass)) s++;
    return s;
  };
  const strength = getStrength();
  const strengthLabels = ["", "Weak", "Fair", "Good", "Strong"];
  const strengthColors = ["", "bg-pe-red", "bg-pe-amber", "bg-pe-green", "bg-pe-gold"];

  const handleSignup = () => {
    if (!email || !empId || !pass || !confirm) { setMsg("Please fill all fields"); return; }
    if (pass !== confirm) { setMsg("Passwords do not match"); return; }
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-grid" /><div className="bg-orb bg-orb1" /><div className="bg-orb bg-orb2" />
      <Navbar />
      <div className="flex-1 grid md:grid-cols-2 min-h-screen pt-16">
        {/* Form */}
        <div className="flex items-center justify-center px-8 md:px-14 bg-pe-bg">
          <div className="w-full max-w-[420px]">
            <Link to="/login" className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wider uppercase text-pe-muted hover:text-pe-orange transition-colors mb-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><polyline points="15 18 9 12 15 6"/></svg>
              Back to Sign In
            </Link>
            <div className="mb-6">
              <div className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-pe-orange mb-2">Employee Portal</div>
              <h1 className="text-3xl font-bold mb-1.5">Create Account</h1>
              <div className="text-sm text-pe-muted">Register your employee profile</div>
            </div>
            <div className="flex gap-1.5 mb-7">{[1,2,3].map(i => <div key={i} className={`flex-1 h-[3px] rounded-sm ${i <= 2 ? 'bg-pe-orange' : 'bg-pe-orange/40'}`}/>)}</div>
            {msg && <div className="bg-pe-red/10 border border-pe-red/30 text-pe-red rounded-lg px-4 py-2.5 font-mono text-xs mb-4">{msg}</div>}

            <div className="mb-5">
              <label className="block font-mono text-[10px] font-semibold tracking-[0.15em] uppercase text-pe-muted mb-2">Email Address</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" className="pe-input" />
            </div>
            <div className="mb-5">
              <label className="block font-mono text-[10px] font-semibold tracking-[0.15em] uppercase text-pe-muted mb-2">Employee ID</label>
              <input type="text" value={empId} onChange={e => setEmpId(e.target.value)} placeholder="EMP-00000" className="pe-input" />
            </div>
            <div className="mb-3">
              <label className="block font-mono text-[10px] font-semibold tracking-[0.15em] uppercase text-pe-muted mb-2">Password</label>
              <div className="relative">
                <input type={showPass ? "text" : "password"} value={pass} onChange={e => setPass(e.target.value)} placeholder="Min. 8 characters" className="pe-input pr-10" />
                <button onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-pe-muted hover:text-pe-orange"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button>
              </div>
              {pass && <div className="flex items-center gap-3 mt-2">
                <div className="flex gap-1">{[1,2,3,4].map(i => <div key={i} className={`w-8 h-[3px] rounded-sm ${i <= strength ? strengthColors[strength] : 'bg-[var(--pe-border)]'}`}/>)}</div>
                <span className="font-mono text-[10px] text-pe-muted tracking-wider">{strengthLabels[strength]}</span>
              </div>}
            </div>
            <div className="mb-6">
              <label className="block font-mono text-[10px] font-semibold tracking-[0.15em] uppercase text-pe-muted mb-2">Confirm Password</label>
              <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="Re-enter password" className="pe-input" />
            </div>

            <button onClick={handleSignup} className="w-full py-3.5 rounded-lg bg-gradient-to-r from-pe-orange-d to-pe-orange font-mono text-sm font-semibold tracking-wider uppercase text-white shadow-[var(--pe-glow-sm)] hover:shadow-[var(--pe-glow-md)] hover:scale-[1.02] transition-all">Create Account</button>
            <div className="text-center text-[13px] text-pe-muted font-mono mt-5">Already have an account? <Link to="/login" className="text-pe-orange hover:underline">Sign In →</Link></div>
          </div>
        </div>

        {/* Right Brand */}
        <div className="relative overflow-hidden hidden md:flex flex-col justify-center px-14 bg-pe-surface border-l border-[var(--pe-border)]">
          <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-pe-gold blur-[120px] opacity-[0.06] pointer-events-none" />
          <div className="relative z-[1]">
            <div className="w-16 h-16 bg-gradient-to-br from-pe-orange-d to-pe-orange rounded-2xl flex items-center justify-center shadow-[var(--pe-glow-md)] mb-8">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" className="w-8 h-8"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <h2 className="text-4xl font-bold leading-tight mb-3">Power<span className="grad-text">Eye</span><br/>Monitor</h2>
            <div className="font-mono text-[11px] font-medium tracking-[0.14em] uppercase text-pe-muted mb-8">Electricity Pole Voltage System</div>
            <div className="flex flex-col gap-6">
              {[{ n: "01", t: "Enter Your Details", s: "Provide your work email and assigned Employee ID" },
                { n: "02", t: "Secure Your Account", s: "Set a strong password for safe grid access" },
                { n: "03", t: "Access Dashboard", s: "Monitor live voltage data from all connected poles" }].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pe-orange/10 border border-pe-orange/30 flex items-center justify-center font-mono text-[11px] font-bold text-pe-orange">{step.n}</div>
                  <div><strong className="block text-sm font-semibold mb-0.5">{step.t}</strong><span className="text-[13px] text-pe-muted">{step.s}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
