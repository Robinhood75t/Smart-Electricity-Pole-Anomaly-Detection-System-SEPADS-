import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function HomePage() {
  const features = [
    { icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>, title: "Real-Time Readings", desc: "Live voltage telemetry from every connected pole, updated every second with historical trend graphs." },
    { icon: <><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></>, title: "Fault Detection", desc: "Automated alerts when voltage exceeds thresholds. Pinpoint exactly which pole needs attention instantly." },
    { icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>, title: "Employee Access Control", desc: "Role-based login for field engineers and supervisors. Every session is logged and auditable." },
    { icon: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></>, title: "Grid Map View", desc: "Interactive geographic map showing every pole's status. Green, amber, and red indicators for instant triage." },
    { icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></>, title: "Shift Reports", desc: "Auto-generated PDF and CSV reports per shift. Send directly to supervisors or archive for compliance." },
    { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>, title: "Secure by Default", desc: "Employee ID + email verification, encrypted sessions, and audit logs. Your grid data stays protected." },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-grid" />
      <div className="bg-orb bg-orb1" />
      <div className="bg-orb bg-orb2" />
      <Navbar />

      <div className="relative z-[1] max-w-[1280px] mx-auto px-8 pt-16">
        <section className="pt-32 pb-20 max-w-[760px]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pe-orange/30 bg-pe-orange/5 font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-pe-orange mb-8">
            <div className="w-[7px] h-[7px] rounded-full bg-pe-orange relative animate-pulse" />
            Live Grid Monitoring Active
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold leading-[1.1] mb-6">
            Monitor Every<br/>
            <span className="text-pe-orange">Volt.</span>
            <span className="text-pe-gold"> Every Pole.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg text-pe-muted leading-relaxed mb-10 max-w-[600px]">
            PowerEye Monitor gives electricity engineers real-time visibility into pole voltage readings, fault detection, and grid health — all from a single secure dashboard.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-4 flex-wrap">
            <Link to="/signup" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-pe-orange-d to-pe-orange font-mono text-sm font-semibold tracking-wider uppercase text-white shadow-[var(--pe-glow-sm)] hover:shadow-[var(--pe-glow-md)] hover:scale-[1.04] transition-all">Create Account</Link>
            <Link to="/login" className="font-mono text-sm font-medium tracking-wider text-pe-muted hover:text-pe-orange transition-colors">Sign In to Dashboard →</Link>
          </motion.div>
        </section>
      </div>

      {/* Stats */}
      <div className="relative z-[1] border-y border-[var(--pe-border)] bg-pe-surface/50 backdrop-blur-sm">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4">
          {[{ val: "24", unit: "/7", label: "Live Monitoring" }, { val: "10", unit: "K+", label: "Poles Tracked" }, { val: "99", unit: "%", label: "Uptime SLA" }, { val: "<1", unit: "s", label: "Alert Latency" }].map((s, i) => (
            <div key={i} className="text-center py-8 px-4 border-r last:border-r-0 border-[var(--pe-border)]">
              <div className="text-3xl font-bold">{s.val}<span className="text-pe-orange text-xl">{s.unit}</span></div>
              <div className="font-mono text-[11px] text-pe-muted tracking-wider uppercase mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-[1] max-w-[1280px] mx-auto px-8">
        {/* Features */}
        <section className="py-24" id="features">
          <div className="font-mono text-[11px] font-semibold tracking-[0.2em] uppercase text-pe-orange mb-3">Platform Features</div>
          <div className="text-4xl font-bold mb-10">Everything Engineers Need</div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-pe-surface border border-[var(--pe-border)] rounded-2xl p-8 hover:border-pe-orange/30 hover:shadow-[var(--pe-glow-lg)] hover:-translate-y-0.5 transition-all">
                <div className="w-12 h-12 rounded-xl bg-pe-orange/10 border border-pe-orange/20 flex items-center justify-center mb-5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-pe-orange">{f.icon}</svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-pe-muted leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="bg-pe-surface border border-[var(--pe-border)] rounded-2xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Monitor Your <span className="grad-text">Grid?</span></h2>
            <p className="text-pe-muted max-w-lg mx-auto mb-8">Create your employee account and get instant access to real-time voltage monitoring across your entire pole network.</p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link to="/signup" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-pe-orange-d to-pe-orange font-mono text-sm font-semibold tracking-wider uppercase text-white shadow-[var(--pe-glow-sm)] hover:shadow-[var(--pe-glow-md)] hover:scale-[1.04] transition-all">Get Started Free</Link>
              <Link to="/login" className="font-mono text-sm text-pe-muted hover:text-pe-orange transition-colors">Sign In →</Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
