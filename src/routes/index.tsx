import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LendWise — AI-Powered Financial Strategy" },
      { name: "description", content: "LendWise is the AI-first fintech platform for loan verification, smart payoff simulation, and 24/7 financial guidance." },
      { property: "og:title", content: "LendWise — AI-Powered Financial Strategy" },
      { property: "og:description", content: "AI-first fintech platform for modern borrowers." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Footer />
    </>
  );
}
