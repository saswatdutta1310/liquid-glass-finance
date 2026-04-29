import { Navbar } from "./Navbar";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="bg-background relative overflow-hidden">
      <Navbar />
      <div className="flex flex-col items-center text-center pt-20 px-4">
        <h1
          className="hero-gradient-text font-normal leading-[1.02] tracking-[-0.024em] text-[120px] sm:text-[180px] md:text-[230px]"
          style={{ fontFamily: "'General Sans', 'Geist Sans', sans-serif" }}
        >
          Grow
        </h1>
        <p className="text-hero-sub text-center text-lg leading-8 max-w-md mt-4 opacity-80">
          The most powerful AI ever deployed
          <br />
          in talent acquisition
        </p>
        <div className="mt-8 mb-[66px]">
          <Button variant="heroSecondary" className="px-[29px] py-[24px]">
            Schedule a Consult
          </Button>
        </div>
      </div>
    </section>
  );
}
