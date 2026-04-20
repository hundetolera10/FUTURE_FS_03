import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen flex items-center justify-center text-center">

      <img
        src="https://media.istockphoto.com/id/2170450588/photo/interior-of-modern-light-gym-is-well-equipped-with-modern-machines-and-fitness-gear-offering.webp?a=1&b=1&s=612x612&w=0&k=20&c=DHZrsUreCkgZcQG5NAkEl60e2CHHCDjMgra3eL17NbA="
        alt="Gym Background"
        className="absolute inset-0 w-full h-full object-cover brightness-110"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 px-6 max-w-3xl">
        
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight max-w-4xl mx-auto"
        >
          <span className="block text-white">
            Build Your Dream Body at
          </span>

          <span className="block text-primary mt-2">
            Bright Gym
          </span>
        </motion.h1>

        <p className="text-gray-300 mb-10 text-lg md:text-xl max-w-2xl mx-auto">
          Train hard. Stay strong. Become unstoppable.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/join")}
            className="bg-primary text-black px-6 py-3 rounded-lg font-bold hover:scale-105 transition"
          >
            Join Now
          </button>

          <button
            onClick={() => navigate("/plans")}
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            View Plans
          </button>
        </div>

      </div>
    </div>
  );
}
