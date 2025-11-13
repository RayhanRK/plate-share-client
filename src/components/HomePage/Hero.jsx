import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="dark:bg-gray-900 py-16 sm:py-20 lg:py-28 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-accent dark:text-white mb-4 sm:mb-6">
          Share Food, <span className="text-primary">Spread Smile😊 </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
          Bring your community together through shared meals. Give what you can,
          find what you need, and help to reduce food waste.
        </p>

        <Link to="/available-foods"
          className="inline-block px-4 sm:px-8 py-3 sm:py-4 bg-primary hover:bg-green-500 text-white font-semibold rounded-lg text-base sm:text-lg md:text-xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg"
        >
          View All Foods
        </Link>
      </div>
    </section>
  );
};

export default Hero;
