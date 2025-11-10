import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const OurMission = () => {

  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="bg-green-100 dark:bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top centered title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent dark:text-white mb-16">
          Our <span className="text-primary">Mission</span>
        </h2>

        {/* Left and Right split */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
          {/* Left half */}
          <div data-aos="fade-right" className="lg:w-1/2 text-left">
            <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 tracking-[0.25em] uppercase">
             <span className="text-accent">Plate</span>Share  Community
            </h3>
            <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-primary dark:text-white leading-snug md:leading-[3.6rem] max-w-[480px]">
              We are creating a thriving community, free of hunger.
            </h2>
          </div>

          {/* Right half */}
          <div data-aos="fade-left" className="lg:w-1/2 text-left">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed md:leading-[2.8rem]">
              PlateShare’s mission is to bring people together by sharing food
              with love and care. We aim to stop good food from being wasted and
              make sure it reaches those who truly need it. Every shared meal
              helps build a generous, more connected community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
