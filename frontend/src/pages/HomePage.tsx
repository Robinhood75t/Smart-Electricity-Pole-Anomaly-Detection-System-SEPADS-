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
        {/* <section className="pt-32 pb-20 max-w-[760px]">
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
        </section> */}

        {/* Hero — two column with prototype */}
        <section className="pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — text */}
            <div className="max-w-[600px]">
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
                className="text-lg text-pe-muted leading-relaxed mb-10">
                PowerEye Monitor gives electricity engineers real-time visibility into pole voltage readings, fault detection, and grid health — all from a single secure dashboard.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-4 flex-wrap">
                <Link to="/signup" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-pe-orange-d to-pe-orange font-mono text-sm font-semibold tracking-wider uppercase text-white shadow-[var(--pe-glow-sm)] hover:shadow-[var(--pe-glow-md)] hover:scale-[1.04] transition-all">Create Account</Link>
                <Link to="/login" className="font-mono text-sm font-medium tracking-wider text-pe-muted hover:text-pe-orange transition-colors">Sign In to Dashboard →</Link>
              </motion.div>
            </div>

            {/* Right — prototype image */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block">

              {/* Corner accent brackets */}
              <div className="absolute -top-px -left-px w-5 h-5 border-t-2 border-l-2 border-pe-orange/60 rounded-tl-md z-10" />
              <div className="absolute -top-px -right-px w-5 h-5 border-t-2 border-r-2 border-pe-orange/60 rounded-tr-md z-10" />
              <div className="absolute -bottom-px -left-px w-5 h-5 border-b-2 border-l-2 border-pe-orange/60 rounded-bl-md z-10" />
              <div className="absolute -bottom-px -right-px w-5 h-5 border-b-2 border-r-2 border-pe-orange/60 rounded-br-md z-10" />

              <div className="relative rounded-2xl border border-pe-orange/25 overflow-hidden bg-pe-surface">

                {/* The prototype photo */}
                <img
                  src="/images/proto-powered.jpeg"
                  alt="PowerEye prototype installed in pole circuit box"
                  className="w-full h-[420px] object-cover"
                />

                {/* Dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Live badge top-right */}
                <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 border border-pe-orange/50 font-mono text-[10px] font-bold tracking-widest uppercase text-pe-orange">
                  <div className="w-[6px] h-[6px] rounded-full bg-pe-orange animate-pulse" />
                  Prototype Active
                </div>

                {/* Bottom chips */}
                <div className="absolute bottom-3.5 left-3.5 flex gap-2">
                  {[["ESP8266", "Wi-Fi"], ["Voltage", "Live"], ["Relay", "Armed"]].map(([label, val], i) => (
                    <div key={i} className="px-2.5 py-1.5 rounded-lg bg-black/75 border border-white/10 font-mono text-[11px] text-white/70">
                      {label} <span className="text-pe-orange font-bold">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
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

        {/* Prototype Installation */}
        <section className="py-24" id="prototype">
          <div className="font-mono text-[11px] font-semibold tracking-[0.2em] uppercase text-pe-orange mb-3 flex items-center gap-2">
            <div className="w-[7px] h-[7px] rounded-full bg-pe-orange animate-pulse" />
            Hardware Prototype
          </div>
          <div className="text-4xl font-bold mb-4">Inside the Circuit Box</div>
          <p className="text-pe-muted text-lg leading-relaxed max-w-[560px] mb-14">
            The PowerEye sensor unit is a compact, self-contained module installed directly inside the pole's circuit enclosure — measuring voltage in real time and transmitting data over Wi-Fi.
          </p>

          {/* 3 Images */}
          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {[
              { src: "/images/proto-open.jpeg", badge: "View 01 — Enclosure Open", caption: "Full assembly — NodeMCU ESP8266, Arduino Nano, current sensor, relay, and wiring harness seated in the protective casing." },
              { src: "/images/proto-powered.jpeg", badge: "View 02 — Powered On", caption: "Prototype energized — red status LEDs confirm live voltage sensing and active Wi-Fi transmission to the cloud dashboard." },
              { src: "/images/proto-sealed.jpeg", badge: "View 03 — Field-Ready", caption: "Enclosure sealed with external cable entry points — ready for pole-side deployment with live-line connections." },
            ].map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-pe-surface border border-[var(--pe-border)] rounded-2xl overflow-hidden hover:border-pe-orange/30 hover:shadow-[var(--pe-glow-lg)] transition-all">
                <div className="relative">
                  <img src={img.src} alt={img.badge} className="w-full h-64 object-cover" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-sm border border-pe-orange/40 font-mono text-[10px] font-bold tracking-widest uppercase text-pe-orange">
                    {img.badge}
                  </div>
                </div>
                <p className="text-[13px] text-pe-muted leading-relaxed p-4 border-t border-[var(--pe-border)]">{img.caption}</p>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-pe-orange/30 to-transparent mb-14" />

          {/* Installation Steps */}
          <div className="text-2xl font-bold mb-8">Installation Process</div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { n: "01", title: "Mount the Enclosure", desc: "Fix the protective casing inside the pole's circuit box. Ensure clearance from high-voltage lines before proceeding." },
              { n: "02", title: "Connect the Current Sensor", desc: "Clamp the non-invasive CT sensor around the phase wire — no cutting required. Feeds signal directly to the Arduino Nano." },
              { n: "03", title: "Wire the Voltage Tap", desc: "Connect the voltage divider leads (red/green wires) to the phase and neutral terminals for live voltage sampling." },
              { n: "04", title: "Power Up & Pair", desc: "The onboard buck converter steps down supply to 5V. On first boot, the ESP8266 connects to the pole's provisioned Wi-Fi." },
              { n: "05", title: "Verify Live Transmission", desc: "Red LED indicators confirm sensor activity. Within 10 seconds, telemetry appears on the dashboard — updated every second." },
              { n: "06", title: "Seal & Sign Off", desc: "Close the enclosure, secure cable glands, and log the pole ID in the dashboard. The unit runs fully autonomously." },
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-pe-surface border border-[var(--pe-border)] rounded-2xl p-6 flex gap-4 items-start hover:border-pe-orange/25 transition-all">
                <div className="w-9 h-9 min-w-[36px] rounded-xl bg-pe-orange/10 border border-pe-orange/20 flex items-center justify-center font-mono text-[13px] font-bold text-pe-orange">
                  {step.n}
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold mb-1.5">{step.title}</h3>
                  <p className="text-sm text-pe-muted leading-relaxed">{step.desc}</p>
                </div>
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
