import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";


export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-extralight tracking-tight leading-[0.95] mb-8">
              The<br />
              agent‑native<br />
              control room
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-lg font-light">
              For developers who ship at 10x speed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button className="group px-8 py-4 bg-primary text-primary-foreground rounded-full hover:opacity-80 transition-all flex items-center justify-center gap-2">
                Launch in browser
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary rounded-full hover:bg-secondary transition-all">
                Get early access
              </button>
            </div>

            <p className="text-sm text-muted-foreground font-light">
              Adral – no setup, no security compromises.
            </p>
          </motion.div>

          {/* Right: Abstract illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end relative mr-4 md:mr-0"
          >
            {/* Abstract visual - Light Mode */}
            <div className="relative w-full max-w-lg aspect-square group perspective-1000">
              {/* Soft background glow */}
              <div className="absolute inset-0 bg-[#3b82f6]/5 blur-3xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Central element: Floating Control Panel */}
              <div className="absolute inset-4 rounded-[2rem] border border-black/5 bg-white/70 backdrop-blur-xl overflow-hidden shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] flex flex-col transform group-hover:rotate-x-2 group-hover:rotate-y-[-2deg] transition-transform duration-700 ease-out">
                {/* Header bar */}
                <div className="flex items-center gap-2 px-6 py-4 border-b border-black/5 bg-black/[0.02]">
                  <div className="w-3 h-3 rounded-full bg-black/10" />
                  <div className="w-3 h-3 rounded-full bg-black/10" />
                  <div className="w-3 h-3 rounded-full bg-black/10" />
                </div>
                {/* Body code/flow lines */}
                <div className="p-8 flex-1 flex flex-col gap-6 overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.05),transparent_50%)]" />

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    className="h-3 rounded-full bg-black/5 relative z-10"
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "70%" }}
                    transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
                    className="h-3 rounded-full bg-black/5 relative z-10"
                  />
                  <div className="flex items-center gap-4 mt-2">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 z-10 shadow-sm"
                    >
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                    </motion.div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: 1.1, ease: "easeOut" }}
                      className="h-3 rounded-full bg-blue-500/10 relative z-10 flex-1"
                    />
                  </div>

                  {/* Floating abstract elements */}
                  <div className="mt-auto self-end relative w-40 h-40">
                    <motion.div
                      animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-4 rounded-2xl border border-black/5 bg-white shadow-xl z-10 flex flex-col gap-3 p-4 justify-center"
                    >
                      <div className="w-full h-2 rounded-full bg-black/5" />
                      <div className="w-3/4 h-2 rounded-full bg-black/5" />
                      <div className="w-1/2 h-2 rounded-full bg-blue-500/20 mt-2" />
                    </motion.div>
                    <motion.div
                      animate={{ y: [0, 6, 0], scale: [1, 1.02, 1] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute inset-0 rounded-2xl border border-[#3b82f6]/10 bg-blue-50/50 z-0 shadow-lg translate-x-4 translate-y-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
