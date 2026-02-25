import { motion } from "motion/react";

export function MeetAdral() {
  return (
    <section className="relative overflow-hidden border-t border-border py-32">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif tracking-tighter mb-16 text-slate-900 leading-[1.1]">
            Meet<br />
            Adral
          </h2>

          <div className="max-w-3xl mx-auto space-y-6 text-xl sm:text-2xl text-slate-800 leading-relaxed mb-20 font-light">
            <p>
              Let AI agents learn how you work—whether you are writing code or just clearing your inbox.
            </p>
            <p className="text-slate-500">
              Your daily tasks, your favorite apps, your tools – all orchestrated from one place.
            </p>
          </div>

          <p className="text-sm text-slate-400 italic font-light tracking-wide">
            Your infra. Your browser. Your agents on autopilot.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
