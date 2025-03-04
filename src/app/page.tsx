import HeroSection from "@/components/sections/heroSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="h-screen">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#9123f8] to-[#6a2bff] text-transparent bg-clip-text">
          Qui suis-je ?
        </h1>
        <p>Je suis Matthias</p>
      </section>
      <section>
        <h1>Mes expériences</h1>
      </section>
      <section>
        <h1>Mes projets</h1>
      </section>
      <section>
        <h1>Contactez-moi</h1>
      </section>
    </>
  );
}
