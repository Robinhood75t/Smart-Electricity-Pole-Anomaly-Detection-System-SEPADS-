import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
  const members = [
    { initials: "RS", name: "Robin Singh", role: "Backend Developer", color: "green", desc: "Robin engineers the server-side backbone of PowerEye Monitor. He builds the APIs, manages the database architecture, and ensures live voltage data flows reliably from IoT sensors to the dashboard.", tags: ["Node.js", "REST API", "Database", "Auth Systems"] },
    { initials: "DK", name: "Daksh Kumar", role: "IoT Member", color: "orange", desc: "Daksh programs and deploys the IoT sensors attached to electricity poles, ensuring accurate voltage readings are captured and transmitted in real time.", tags: ["Arduino / ESP32", "Sensors", "Embedded C", "MQTT"] },
    { initials: "YK", name: "Yash Kumar", role: "Supporting Member", color: "violet", desc: "Yash supports testing, documentation, and quality assurance — making sure every feature works as expected before it ships.", tags: ["Testing & QA", "Documentation", "Research", "Team Support"] },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-grid" /><div className="bg-orb bg-orb1" /><div className="bg-orb bg-orb2" />
      <Navbar />
      <div className="relative z-[1] max-w-[1280px] mx-auto px-8 pt-16">
        <section className="pt-32 pb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pe-orange/30 bg-pe-orange/5 font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-pe-orange mb-6">
            <div className="w-[7px] h-[7px] rounded-full bg-pe-orange animate-pulse" /> Meet the Team
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl font-bold leading-tight mb-6">
            Built by <span className="text-pe-orange">Engineers,</span><br/>For <span className="text-pe-green">Engineers.</span>
          </motion.h1>
          <p className="text-lg text-pe-muted max-w-2xl leading-relaxed">PowerEye Monitor was designed and developed by a dedicated team of 4 members — combining frontend craft, backend power, IoT hardware expertise, and collaborative support to bring real-time grid monitoring to life.</p>
        </section>

        {/* Project Overview */}
        <section className="pb-16">
          <div className="font-mono text-[11px] font-semibold tracking-[0.2em] uppercase text-pe-orange mb-3">The Project</div>
          <div className="text-4xl font-bold mb-10">What is PowerEye Monitor?</div>
          <div className="grid md:grid-cols-2 gap-6">
            {[{ t: "Mission", d: "To provide electricity departments with a unified, real-time platform to monitor voltage levels across every pole in the grid.", c: "orange" },
              { t: "How It Works", d: "IoT sensors attached to electricity poles transmit live voltage readings to our backend. Data is processed and visualised in a live dashboard.", c: "green" },
              { t: "Core Goals", d: "Minimise manual inspections, enable rapid fault response, and secure sensitive grid data behind role-based access control.", c: "orange" },
              { t: "Impact", d: "From real-time fault alerts to automated shift reports, PowerEye Monitor turns raw voltage data into decisions.", c: "green" }
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-pe-surface border border-[var(--pe-border)] rounded-2xl p-8 hover:border-pe-orange/30 hover:shadow-[var(--pe-glow-lg)] transition-all">
                <h3 className="text-lg font-semibold mb-2">{c.t}</h3>
                <p className="text-sm text-pe-muted leading-relaxed">{c.d}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="pb-16">
          <div className="font-mono text-[11px] font-semibold tracking-[0.2em] uppercase text-pe-orange mb-3">The People</div>
          <div className="text-4xl font-bold mb-10">Our 4-Member Team</div>

          {/* Leader */}
          <div className="bg-pe-surface border border-pe-orange/20 rounded-2xl p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border-2 border-pe-gold flex items-center justify-center bg-pe-gold/10 font-mono text-xl font-bold text-pe-gold">AA</div>
                <div className="font-mono text-[10px] font-bold text-pe-gold mt-2 bg-pe-gold/10 px-2 py-0.5 rounded">01</div>
              </div>
              <div className="flex-1">
                <div className="text-xl font-bold mb-1">Aashish</div>
                <div className="font-mono text-xs text-pe-gold tracking-wider mb-3">⚡ Team Leader & Frontend Developer</div>
                <p className="text-sm text-pe-muted leading-relaxed mb-4">Aashish leads the PowerEye Monitor project, coordinating the team and driving the frontend development. He crafts the user interface that brings complex voltage data to life in an intuitive, accessible way.</p>
                <div className="flex flex-wrap gap-2">
                  {["Team Leader", "HTML / CSS", "JavaScript", "UI Design", "Project Coordination"].map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-full font-mono text-[10px] tracking-wider bg-pe-gold/10 text-pe-gold border border-pe-gold/20">{t}</span>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-48 space-y-3">
                {[{ l: "HTML / CSS", w: 78 }, { l: "JavaScript", w: 60 }, { l: "Leadership", w: 90 }, { l: "UI Design", w: 70 }].map(s => (
                  <div key={s.l}>
                    <div className="font-mono text-[10px] text-pe-muted mb-1">{s.l}</div>
                    <div className="h-1 rounded bg-[var(--pe-border)]"><div className="h-full rounded bg-gradient-to-r from-pe-orange to-pe-gold" style={{ width: `${s.w}%` }}/></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Other members */}
          <div className="grid md:grid-cols-3 gap-6">
            {members.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-pe-surface border border-[var(--pe-border)] rounded-2xl p-6 hover:border-pe-orange/30 transition-all">
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 rounded-full border-2 ${m.color === 'green' ? 'border-pe-green bg-pe-green/10' : m.color === 'orange' ? 'border-pe-orange bg-pe-orange/10' : 'border-purple-400 bg-purple-400/10'} flex items-center justify-center font-mono text-lg font-bold ${m.color === 'green' ? 'text-pe-green' : m.color === 'orange' ? 'text-pe-orange' : 'text-purple-400'}`}>
                    {m.initials}
                  </div>
                </div>
                <div className="text-center mb-4">
                  <div className="font-semibold text-lg">{m.name}</div>
                  <div className={`font-mono text-xs tracking-wider ${m.color === 'green' ? 'text-pe-green' : m.color === 'orange' ? 'text-pe-orange' : 'text-purple-400'}`}>{m.role}</div>
                </div>
                <div className="w-full h-px bg-[var(--pe-border)] mb-4" />
                <p className="text-xs text-pe-muted leading-relaxed mb-4">{m.desc}</p>
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {m.tags.map(t => (
                    <span key={t} className={`px-2 py-0.5 rounded-full font-mono text-[9px] tracking-wider border ${m.color === 'green' ? 'bg-pe-green/10 text-pe-green border-pe-green/20' : m.color === 'orange' ? 'bg-pe-orange/10 text-pe-orange border-pe-orange/20' : 'bg-purple-400/10 text-purple-400 border-purple-400/20'}`}>{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
