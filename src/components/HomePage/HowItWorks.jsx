import { FaUtensils, FaSearch, FaHandHoldingHeart } from "react-icons/fa";
import { PiBowlFoodBold } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const HowItWorks = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);
  const steps = [
    {
      id: 1,
      icon: <PiBowlFoodBold className="text-primary size-15 lg:size-20" />,
      title: "Share Your Food",
      description:
        "Have extra food? Post its name, description, quantity, and pickup location, and help someone in your community today.",
    },
    {
      id: 2,
      icon: <FaSearch className="text-primary size-15 lg:size-20" />,
      title: "Find Food",
      description:
        "Browse available food in your area, see photos and locations, and connect with generous community members.",
    },
    {
      id: 3,
      icon: <FaHandHoldingHeart className="text-primary size-15 lg:size-20" />,
      title: "Collect Food",
      description:
        "Found a meal you need? Contact the donor, pick it up, and enjoy your food. Let's reduce food waste together.",
    },
  ];

  return (
    <section className="py-10 md:py-20 bg-green-50">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="container mx-auto px-4 text-center"
      >
        {/* Heading */}
        <div className="mb-15 flex flex-col items-center">
          <h2 className=" text-3xl text-accent md:text-5xl font-semibold mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto">
            Follow simple steps with PlateShare to share and receive meals.
            Contribute your community for reducing food wastage every day.
          </p>
        </div>

        <div className="grid gap-15 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {steps.map((step) => (
            <div
              key={step.id}
              className="card bg-white shadow-lg hover:shadow-xl transition duration-300 rounded-xl p-6  flex flex-col items-center text-center hover:scale-105"
            >
              <div className="mb-8">{step.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
