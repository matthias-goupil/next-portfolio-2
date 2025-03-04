import React from "react";
import Achivement from "../ui/achivement";
import Button from "../ui/button";

function HeroSection() {
  return (
    <section className="flex items-center justify-between w-full py-36">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">
            Salut ! <br /> Je suis Matthias GOUPIL.
          </h1>
          <p className="font-light">Développeur web Fullstack.</p>
        </div>
        <div className="w-full flex justify-between">
          <Achivement quantity="3 ans" text="d'expérience" />
          <Achivement quantity="5 ans" text="d'études" />

          <Achivement quantity="56 contribs" text="sur github en 2025" />
        </div>
        <Button>Contactez moi</Button>
      </div>
      <div className="relative flex justify-center items-center">
        <img
          src={"/images/me.png"}
          alt="Photo"
          className="w-80 h-80 rounded-full z-1"
        />
        <div className="z-0 absolute bg-radial from-[#9123f8] via-30% via-[#6a2bff] to-60% to-transparent opacity-50 size-[500px] rounded-full"></div>
      </div>
    </section>
  );
}

export default HeroSection;
