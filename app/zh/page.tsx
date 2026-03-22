import { Header } from "@/components/landing-zh/Header";
import { Hero } from "@/components/landing-zh/Hero";
import { HowItWorks } from "@/components/landing-zh/HowItWorks";
import { Features } from "@/components/landing-zh/Features";
import { Audiences } from "@/components/landing-zh/Audiences";
import { Team } from "@/components/landing-zh/Team";
import { Supporters } from "@/components/landing-zh/Supporters";
import { FAQ } from "@/components/landing-zh/FAQ";
import { WaitlistForm } from "@/components/landing-zh/WaitlistForm";
import { Footer } from "@/components/landing-zh/Footer";

export default function ZhHome() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Audiences />
        <Team />
        <Supporters />
        <FAQ />
        <WaitlistForm />
      </main>
      <Footer />
    </>
  );
}
