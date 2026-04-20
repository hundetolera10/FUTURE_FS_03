import { motion } from "framer-motion";
import { FaDumbbell, FaHeartbeat, FaUsers, FaRunning } from "react-icons/fa";

const services = [
  { name: "Strength Training", 
    icon: <FaDumbbell className="rotate-[30deg]" />,
    desc: "Build muscle and increase power with our expert designed programs."
 },
  { name: "Cardio Programs", 
    icon: <FaHeartbeat />,
    desc: "improve endurance and burn calories with state of the art equipment."
  },
  { name: "Personal Coaching", 
    icon: <FaUsers />,
    desc: "Receive personalized attention and guidance from our certified trainers."
  },
  { name: "Group Classes", 
    icon: <FaRunning />,
    desc: "Join fun and engaging group fitness sessions led by experienced instructors."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
      
        <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-card p-6 rounded-xl text-center transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)]"
          >  
            <div className="flex justify-center mb-4">
              <div className="bg-black p-4 rounded-full border border-gray-700 shadow-md hover:shadow-yellow-500/50 transition">
                <span className="text-primary text-2xl">
                  {service.icon}
                </span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
            <p className="text-gray-400">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
