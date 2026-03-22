import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Features } from "@/components/landing/Features";
import { Audiences } from "@/components/landing/Audiences";
import { Team } from "@/components/landing/Team";
import { Supporters } from "@/components/landing/Supporters";
import { FAQ } from "@/components/landing/FAQ";
import { WaitlistForm } from "@/components/landing/WaitlistForm";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
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
