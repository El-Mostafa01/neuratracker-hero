import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { HeroBackground } from "./components/hero-background";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#F8F8F8]">
      <HeroBackground />
      <Navbar />
      <Hero />
    </main>
  );
}
