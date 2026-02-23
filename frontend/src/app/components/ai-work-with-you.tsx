import { Eye, Boxes, Clock } from 'lucide-react';

const sections = [
  {
    icon: Eye,
    title: 'From scripts to screens.',
    description: 'What once lived in a command line now becomes a live, visual control room.',
    points: [
      'You see what the agent sees.',
      'You click where the agent clicks.',
      'You stay in control of every change.',
    ],
  },
  {
    icon: Boxes,
    title: 'Skills are your new tools.',
    description: 'Forget hunting for plugins and one‑off scripts. Just tell Adral what you need:',
    points: [
      'Spin up staging',
      'Roll back the last deploy',
      'Generate a migration plan',
      'Summarize logs from the last 24 hours',
    ],
    footer: 'Adral turns that into reusable, shareable skills for your whole team.',
  },
  {
    icon: Clock,
    title: 'Agents work while you live.',
    description: 'Start a task. Close the laptop. Go to class, the gym, or sleep.',
    points: [
      'When you come back, the work is done, the report is written, and the PR is ready.',
      'Your focus goes to problems that actually need you.',
    ],
  },
];

export function AIWorkWithYou() {
  return (
    <section className="relative py-32 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI should work<br />with you.
          </h2>
          <p className="text-xl text-zinc-400">
            Not behind a black box — right in front of you.
          </p>
        </div>

        {/* Subsections */}
        <div className="space-y-24">
          {sections.map((section, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <section.icon className="w-8 h-8 text-purple-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {section.title}
                  </h3>
                  <p className="text-xl text-zinc-300 mb-6 leading-relaxed">
                    {section.description}
                  </p>

                  {/* Points */}
                  <div className="space-y-3">
                    {section.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                        <p className="text-lg text-zinc-400">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Footer text if exists */}
                  {section.footer && (
                    <p className="text-lg text-zinc-300 mt-6 leading-relaxed">
                      {section.footer}
                    </p>
                  )}
                </div>
              </div>

              {/* Divider line (except for last item) */}
              {index < sections.length - 1 && (
                <div className="mt-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
