import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#FCFCFC]">
      <HeroBackground />
      <Navbar />
      <Hero />
    </main>
  );
}

/**
 * "Fractal Glass" backdrop from the Figma frame: a soft blue ambient wash
 * overlaid with 60px vertical glass columns fading out toward the right.
 */
function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1000px 700px at 6% 40%, rgba(64,144,255,0.22), transparent 65%)," +
            "radial-gradient(1200px 500px at 40% -10%, rgba(40,128,255,0.12), transparent 70%)," +
            "linear-gradient(90deg, rgba(190,220,255,0.35) 0%, rgba(255,255,255,0) 45%)",
        }}
      />
      <div
        className="absolute inset-y-0 left-0 w-[62%]"
        style={{
          background:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0) 0px, rgba(255,255,255,0.38) 40px, rgba(255,255,255,0) 60px)",
          maskImage: "linear-gradient(90deg, black 55%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(90deg, black 55%, transparent 100%)",
        }}
      />
      {/* Bottom of the frame settles to pure white in both corners */}
      <div
        className="absolute inset-x-0 bottom-0 h-[55%]"
        style={{
          background:
            "linear-gradient(180deg, rgba(252,252,252,0) 0%, rgba(252,252,252,0.85) 65%, #fcfcfc 100%)",
        }}
      />
    </div>
  );
}
