export function MeetAdral() {
  return (
    <section className="relative py-32 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Meet<br />Adral
          </h2>
          
          <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed mb-4">
            Let AI agents learn how you build, instead of you learning how they work.
          </p>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Your workflows, your stack, your tools – all orchestrated from one place.
          </p>
        </div>

        {/* Video/Illustration placeholder */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/10 aspect-video mb-8 group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]" />
          <div className="relative h-full flex flex-col items-center justify-center gap-4">
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform cursor-pointer">
              <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[12px] border-y-transparent ml-1" />
            </div>
            <p className="text-zinc-400 text-sm">Demo video coming soon</p>
          </div>
        </div>

        {/* Tagline under video */}
        <p className="text-center text-lg text-zinc-400">
          Your infra. Your browser. Your agents on autopilot.
        </p>
      </div>
    </section>
  );
}
