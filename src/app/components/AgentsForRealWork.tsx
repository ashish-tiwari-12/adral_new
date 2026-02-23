import { motion } from "motion/react";
import { Terminal, LayoutDashboard, Lock, Mail } from "lucide-react";

const features = [
  {
    icon: Terminal,
    title: "Run code agents, with flows built in.",
    description:
      "Spin up opinionated flows for monitoring, deployments, migrations, and refactors – directly in your browser.",
    className: "md:col-span-2 border-white/10",
  },
  {
    icon: LayoutDashboard,
    title: "A GUI built for developers.",
    description:
      "Powerful agents with clear actions, approvals, and rollbacks – never a black box.",
    className: "md:col-span-1 border-white/10",
  },
  {
    icon: Lock,
    title: "Your own private sandbox.",
    description:
      "Isolated, secure workspaces per project, with your keys and data fully under your control.",
    className: "md:col-span-1 border-white/10",
  },
  {
    icon: Mail,
    title: "Agents deliver work to your inbox.",
    description:
      "Get PRs, reports, and runbooks by email or Slack. Reply to refine or extend.",
    className: "md:col-span-2 border-white/10",
  },
];

export function AgentsForRealWork() {
  return (
    <section className="px-6 py-32 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-serif tracking-tight mb-8 text-foreground">
            Agents for real work.
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            For creators. For builders. For people who just want things done.<br />
            For production. For experiments. For fun.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative p-10 rounded-[2rem] border border-black/5 bg-white shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 overflow-hidden ${feature.className.replace('border-white/10', '')}`}
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-transparent border border-black/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ease-out shadow-sm">
                    <Icon className="w-7 h-7 text-foreground" />
                  </div>

                  <h3 className="text-2xl mb-4 font-medium text-foreground tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light text-lg">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
