import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({ fname: "", lname: "", email: "", empid: "", subject: "", priority: "low", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const update = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }));

  const handleSubmit = () => {
    if (!form.fname || !form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <div className="bg-grid" /><div className="bg-orb bg-orb1" /><div className="bg-orb bg-orb2" />
      <Navbar />
      <div className="relative z-[1] max-w-[1280px] mx-auto px-8 pt-16">
        <section className="pt-32 pb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pe-orange/30 bg-pe-orange/5 font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-pe-orange mb-6">
            <div className="w-[7px] h-[7px] rounded-full bg-pe-orange animate-pulse" /> Get In Touch
          </motion.div>
          <h1 className="text-5xl font-bold mb-4">Contact <span className="text-pe-orange">PowerEye</span></h1>
          <p className="text-lg text-pe-muted max-w-2xl">Have a question, bug report, or want to collaborate? Reach out — we read every message.</p>
        </section>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 pb-20">
          {/* Left Info */}
          <div className="space-y-6">
            <div className="bg-pe-surface border border-[var(--pe-border)] rounded-2xl p-8">
              <h3 className="font-semibold text-lg mb-1">Contact Information</h3>
              <p className="text-sm text-pe-muted mb-6">Reach our team directly through any of the channels below.</p>
              {[{ label: "Primary Email", val: "ashishpraj357@gmail.com", note: "Team Leader — Aashish", color: "text-cyan-400" },
                { label: "Project Queries", val: "PowerEye Monitor Support", note: "Technical issues, access requests, feature feedback", color: "text-pe-green" },
                { label: "Working Hours", val: "Mon – Sat, 9:00 AM – 6:00 PM", note: "Indian Standard Time (IST, UTC+5:30)", color: "text-pe-gold" }
              ].map((c, i) => (
                <div key={i} className="flex gap-4 mb-5">
                  <div className={`w-10 h-10 rounded-lg bg-pe-surface2 flex items-center justify-center ${c.color} flex-shrink-0`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">{i === 0 ? <><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></> : i === 1 ? <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/> : <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>}</svg>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] font-semibold tracking-wider uppercase text-pe-muted">{c.label}</div>
                    <div className="text-sm font-medium">{c.val}</div>
                    <div className="text-xs text-pe-muted">{c.note}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-pe-surface border border-pe-orange/20 rounded-xl p-5 flex gap-4 items-center">
              <div className="w-10 h-10 rounded-full bg-pe-orange/10 border border-pe-orange/30 flex items-center justify-center font-mono text-xs font-bold text-pe-gold">AA</div>
              <div>
                <div className="font-mono text-[10px] text-pe-gold tracking-wider">⚡ Team Leader</div>
                <div className="font-semibold">Aashish</div>
                <div className="text-xs text-pe-orange">ashishpraj357@gmail.com</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-pe-surface border border-[var(--pe-border)] rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-pe-green/10 border border-pe-green/30 flex items-center justify-center mx-auto mb-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-pe-green"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-pe-muted">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-semibold mb-1">Send Us a Message</h3>
                <p className="text-sm text-pe-muted mb-6">Your message will be sent directly to <span className="text-pe-orange">ashishpraj357@gmail.com</span></p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div><label className="block font-mono text-[10px] font-semibold tracking-[0.15em] uppercase text-pe-muted mb-2">First Name</label><input className="pe-input" value={form.fname} onChange={e => update("fname", e.target.value)} placeholder="Rahul"/></div>
                  <div><label className="block font-mono text-[10px] font-semibold tracking-[0.15em] uppercase text-pe-muted mb-2">Last Name</label><input className="pe-input" value={form.lname} onChange={e => update("lname", e.target.value)} placeholder="Sharma"/></div>
                </div>
                <div className="mb-4"><label className="block font-mono text-[10px] font-semibold tracking-[0.15em] uppercase text-pe-muted mb-2">Email</label><input className="pe-input" type="email" value={form.email} onChange={e => update("email", e.target.value)} placeholder="you@example.com"/></div>
                <div className="mb-4">
                  <label className="block font-mono text-[10px] font-semibold tracking-[0.15em] uppercase text-pe-muted mb-2">Subject</label>
                  <select className="pe-select" value={form.subject} onChange={e => update("subject", e.target.value)}>
                    <option value="">— Select a subject —</option>
                    <option>Technical Issue / Bug Report</option><option>Access / Login Problem</option>
                    <option>Feature Request</option><option>IoT Hardware Query</option><option>Other</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block font-mono text-[10px] font-semibold tracking-[0.15em] uppercase text-pe-muted mb-2">Priority</label>
                  <div className="flex gap-2">
                    {["low","medium","high"].map(p => (
                      <button key={p} onClick={() => update("priority", p)}
                        className={`px-4 py-1.5 rounded-full font-mono text-[11px] tracking-wider border transition-all ${form.priority === p ? (p === 'low' ? 'bg-pe-green/10 border-pe-green/30 text-pe-green' : p === 'medium' ? 'bg-pe-amber/10 border-pe-amber/30 text-pe-amber' : 'bg-pe-red/10 border-pe-red/30 text-pe-red') : 'border-[var(--pe-border)] text-pe-muted hover:border-[var(--pe-border-md)]'}`}>
                        {p === 'low' ? '🟢' : p === 'medium' ? '🟡' : '🔴'} {p.charAt(0).toUpperCase() + p.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block font-mono text-[10px] font-semibold tracking-[0.15em] uppercase text-pe-muted mb-2">Message</label>
                  <textarea className="pe-input min-h-[120px] resize-y" value={form.message} onChange={e => update("message", e.target.value)} placeholder="Describe your issue, question, or feedback..." />
                </div>
                <button onClick={handleSubmit} className="w-full py-3.5 rounded-lg bg-gradient-to-r from-pe-orange-d to-pe-orange font-mono text-sm font-semibold tracking-wider uppercase text-white shadow-[var(--pe-glow-sm)] hover:shadow-[var(--pe-glow-md)] hover:scale-[1.02] transition-all">Send Message</button>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
