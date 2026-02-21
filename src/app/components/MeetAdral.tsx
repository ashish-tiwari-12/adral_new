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
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight mb-16">
          Meet<br />
          Adral
        </h2>

        <div className="max-w-3xl mx-auto space-y-6 text-lg sm:text-xl text-foreground leading-relaxed mb-16 font-light">
          <p>
            Let AI agents learn how you build, instead of you learning how they work.
          </p>
          <p className="text-muted-foreground">
            Your workflows, your stack, your tools – all orchestrated from one place.
          </p>
        </div>

        {/* Abstract Workflow Visualization - Light Mode */}
        <div className="relative max-w-4xl mx-auto mb-20 h-64 sm:h-80 rounded-2xl border border-black/5 bg-white/50 backdrop-blur-sm shadow-[0_4px_24px_rgb(0,0,0,0.02)] overflow-hidden flex items-center justify-center">
          {/* Background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]" />

          <div className="relative flex items-center justify-between w-full max-w-2xl px-4 sm:px-8">
            {/* Node 1 */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-16 h-16 rounded-xl border border-black/5 bg-white shadow-sm flex items-center justify-center relative z-10"
            >
              <div className="w-5 h-5 rounded-full bg-gray-200" />
            </motion.div>

            {/* Connecting Line */}
            <div className="flex-1 h-px bg-gray-200 relative overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                whileInView={{ x: "200%" }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-[#3b82f6]/40 to-transparent"
              />
            </div>

            {/* Node 2 */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="w-20 h-20 rounded-xl border border-black/5 bg-white shadow-md flex items-center justify-center relative z-10"
            >
              <div className="w-6 h-6 rounded bg-[#3b82f6]/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#3b82f6]" />
              </div>
            </motion.div>

            {/* Connecting Line */}
            <div className="flex-1 h-px bg-gray-200 relative overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                whileInView={{ x: "200%" }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-[#3b82f6]/40 to-transparent"
              />
            </div>

            {/* Node 3 */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="w-24 h-24 rounded-full border border-black/5 bg-white shadow-lg flex items-center justify-center p-2 relative z-10"
            >
              <div className="w-full h-full rounded-full bg-[#3b82f6]/10 flex items-center justify-center relative">
                <div className="w-4 h-4 rounded-full bg-[#3b82f6]" />
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 border border-[#3b82f6] rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground italic font-light">
          Your infra. Your browser. Your agents on autopilot.
        </p>
      </motion.div>
    </section>
  );
}
