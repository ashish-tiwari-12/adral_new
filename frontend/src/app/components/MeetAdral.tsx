import { motion } from "motion/react";


export function MeetAdral() {
  return (
    <section className="px-6 py-32 max-w-6xl mx-auto border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight mb-16 text-foreground">
          Meet<br />
          Adral
        </h2>

        <div className="max-w-3xl mx-auto space-y-6 text-lg sm:text-xl text-slate-800 leading-relaxed mb-16 font-light">
          <p>
            Let AI agents learn how you work—whether you are writing code or just clearing your inbox.
          </p>
          <p className="text-slate-500">
            Your daily tasks, your favorite apps, your tools – all orchestrated from one place.
          </p>
        </div>

        {/* Abstract Workflow Visualization - Light Mode (Removed to match simple, minimal aesthetics) */}

        <p className="text-sm text-muted-foreground italic font-light">
          Your infra. Your browser. Your agents on autopilot.
        </p>
      </motion.div>
    </section>
  );
}
