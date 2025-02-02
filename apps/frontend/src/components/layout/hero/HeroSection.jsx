import React, { useState, useEffect } from "react";
import BlurFade from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import { api } from "@/services/api/abouts";

function HeroSection() {
  const [abouts, setAbouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAbouts = async () => {
      try {
        const data = await api.getAbouts();
        setAbouts(data);
        setLoading(false);
      } catch (err) {
        setError("Errore nel caricamento delle abouts");
        setLoading(false);
      }
    };

    loadAbouts();
  }, []);

  if (loading) return <div className="text-center">Caricamento...</div>;

  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Text Content */}
        {abouts.map((about) => (
          <div key={about.id} className="flex flex-col items-start">
            <BlurFade delay={0.25} inView>
              <h1 className="text-4xl font-bold text-gray-100">
                Hi there, I'm{" "}
                <span className="bg-gradient-to-r from-sky-500 to-blue-electric bg-clip-text text-transparent">
                  {about.name}
                </span>{" "}
                👋
              </h1>
            </BlurFade>
            <BlurFade delay={0.5} inView>
              <span className="text-pretty text-blue-electric text-sm tracking-tighter">
                Nice to meet you
              </span>
            </BlurFade>
          </div>
        ))}

        {/* Right Column - Avatar */}
        {abouts.map((about) => (
          <div key={about.id} className="flex justify-end items-center">
            <img
              src={about.img}
              alt="Profile avatar"
              className="rounded-full h-36 w-36 object-cover shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* About Section - Kept exactly as you originally had it */}
      <div className="my-12">
        <div className="text-white font-bold text-3xl text-center mb-3">
          About
        </div>
        <div className="text-white text-sm text-center">
          {abouts.map((about) => about.description).join(" ")}
        </div>
      </div>

    </>
  );
}

export default HeroSection;