import { HeroSection } from "@/components/sections/HeroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";

export default function PublicHomePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <HeroSection />
        <BenefitsSection />
        <FeaturesSection />
      </div>
    </main>
  );
}
