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
            <h1 className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-serif tracking-tight leading-[0.95] mb-8 text-foreground">
              The<br />
              agent‑native<br />
              control room
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-lg font-light">
              For developers who ship at 10x speed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button className="group px-8 py-4 bg-black text-white rounded-full hover:bg-black/80 transition-all flex items-center justify-center gap-2">
                Launch in browser
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-black text-black rounded-full hover:bg-black/5 transition-all">
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
            {/* Simple Premium Visual */}
            <div className="relative w-full max-w-lg aspect-square group flex items-center justify-center">
              <img
                src="/hero_abstract.png"
                alt="Adral AI Control Room"
                className="w-full max-w-md h-auto object-contain drop-shadow-2xl mix-blend-multiply rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
