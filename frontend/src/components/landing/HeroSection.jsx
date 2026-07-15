import { ArrowRight } from "lucide-react";  
import HeroMockTerminal from "./HeroMockTerminal";

function HeroSection() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center gap-16 px-6 py-20 lg:flex-row">
        
        {/* Left Content */}
        <div className="flex-1">

          <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            🚀 Sprint 3 • Diagnosis Engine
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white lg:text-6xl">
            Diagnose Backend Issues
            <br />
            <span className="text-blue-500">
              Before They Cost You Hours.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            DevSetup Doctor scans backend configurations,
            detects common development issues,
            and recommends practical fixes so you can spend
            more time building and less time debugging.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500">
              Start Diagnosis
              <ArrowRight size={18} />
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-300 transition hover:border-blue-500 hover:text-white">
              GitHub
            </button>

          </div>

        </div>

        {/* Right Content */}
        <div className="flex flex-1 justify-center">
          <HeroMockTerminal />
        </div>

      </div>
    </section>
  );
}

export default HeroSection;