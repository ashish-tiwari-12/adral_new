import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const sections = [
  {
    title: "From scripts to screens.",
    content: [
      "What once lived in a command line now becomes a live, visual control room.",
      "You see what the agent sees.",
      "You click where the agent clicks.",
      "You stay in control of every change.",
    ],
  },
  {
    title: "Skills are your new tools.",
    content: [
      "Forget hunting for plugins and one‑off scripts.",
      "Just tell Adral what you need:",
    ],
    bullets: [
      "Spin up staging",
      "Roll back the last deploy",
      "Generate a migration plan",
      "Summarize logs from the last 24 hours",
    ],
    footer:
      "Adral turns that into reusable, shareable skills for your whole team.",
  },
  {
    title: "Agents work while you live.",
    content: [
      "Start a task.",
      "Close the laptop. Go to class, the gym, or sleep.",
      "When you come back, the work is done, the report is written, and the PR is ready.",
      "Your focus goes to problems that actually need you.",
    ],
  },
];

export function AIWorkWithYou() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="px-6 py-32 border-t border-border overflow-hidden relative" ref={containerRef}>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-32"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight mb-6 leading-tight text-foreground">
            AI should work<br />
            <span className="italic">with you.</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground font-light">
            Not behind a black box — right in front of you.
          </p>
        </motion.div>

        <div className="relative">
          {/* Central subtle vertical timeline */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden sm:block">
            <motion.div
              className="w-full bg-black/20"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-24 md:space-y-32">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                <div className="hidden sm:flex absolute left-[27px] md:left-1/2 top-10 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-black/20 bg-white shadow-sm z-20" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />

                <div className="flex-1 w-full">
                  <div className="p-8 md:p-10 rounded-[2.5rem] border border-black/5 bg-white shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-shadow duration-700 relative group">
                    <h3 className="text-3xl sm:text-4xl font-extralight tracking-tight mb-8 relative z-10 text-foreground">
                      {section.title}
                    </h3>

                    <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed font-light relative z-10">
                      {section.content.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}

                      {section.bullets && (
                        <ul className="space-y-3 my-8 pl-0">
                          {section.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="text-foreground mt-1.5 opacity-60">✦</span>
                              <span className="text-foreground/90">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.footer && (
                        <p className="mt-8 pt-6 border-t border-black/5 text-foreground font-normal">
                          {section.footer}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
