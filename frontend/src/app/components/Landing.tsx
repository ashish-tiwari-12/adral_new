import { Hero } from "./Hero";
import { MeetAdral } from "./MeetAdral";
import { AgentsForRealWork } from "./AgentsForRealWork";
import { AIWorkWithYou } from "./AIWorkWithYou";
import { Footer } from "./Footer";
import { ParticleNetwork } from "./ui/ParticleNetwork";

export function Landing() {
  return (
    <>
      <Hero />
      <div className="relative">
        <ParticleNetwork />
        <div className="relative z-10">
          <MeetAdral />
          <AgentsForRealWork />
          <AIWorkWithYou />
          <Footer />
        </div>
      </div>
    </>
  );
}
