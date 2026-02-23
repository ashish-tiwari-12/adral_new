import { Code, Layout, Lock, Mail } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Run code agents, with flows built in.',
    description: 'Spin up opinionated flows for monitoring, deployments, migrations, and refactors – directly in your browser.',
    gradient: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-400',
  },
  {
    icon: Layout,
    title: 'A GUI built for developers.',
    description: 'Powerful agents with clear actions, approvals, and rollbacks – never a black box.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: Lock,
    title: 'Your own private sandbox.',
    description: 'Isolated, secure workspaces per project, with your keys and data fully under your control.',
    gradient: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'text-green-400',
  },
  {
    icon: Mail,
    title: 'Agents deliver work to your inbox.',
    description: 'Get PRs, reports, and runbooks by email or Slack. Reply to refine or extend.',
    gradient: 'from-orange-500/20 to-red-500/20',
    iconColor: 'text-orange-400',
  },
];

export function Features() {
  return (
    <section className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Agents for real work.
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            For creators. For builders. For people who just want things done.<br />
            For production. For experiments. For fun.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-zinc-900 border border-white/10 hover:border-white/20 transition-all hover:scale-[1.02] cursor-pointer"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className="relative">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
