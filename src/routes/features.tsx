import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Calculator, MessageSquareHeart } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — LendWise" },
      {
        name: "description",
        content:
          "AI loan verification, smart payoff simulation, and a 24/7 financial copilot — explore LendWise features.",
      },
      { property: "og:title", content: "Features — LendWise" },
      { property: "og:description", content: "Explore the AI capabilities powering LendWise." },
    ],
  }),
  component: FeaturesPage,
});

const features = [
  {
    icon: ShieldCheck,
    title: "AI Loan Verification",
    desc: "Instant document analysis and risk scoring powered by domain-tuned models.",
  },
  {
    icon: Calculator,
    title: "Smart Payoff Simulation",
    desc: "Visualize payoff strategies and see how every dollar moves your timeline.",
  },
  {
    icon: MessageSquareHeart,
    title: "24/7 Financial Copilot",
    desc: "A conversational AI that understands your full financial picture, anytime.",
  },
];

function FeaturesPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 pt-20 pb-32 max-w-6xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="hero-gradient-text text-5xl md:text-7xl font-normal tracking-[-0.02em] leading-[1.05]">
            Features
          </h1>
          <p className="text-hero-sub text-lg mt-5 opacity-80">
            Everything you need to understand, manage, and accelerate your loans — powered by AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {features.map((f) => (
            <div key={f.title} className="liquid-glass rounded-2xl p-8 flex flex-col gap-4">
              <div className="liquid-glass w-12 h-12 rounded-xl flex items-center justify-center text-primary">
                <f.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="text-foreground text-xl font-semibold">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-6">{f.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
