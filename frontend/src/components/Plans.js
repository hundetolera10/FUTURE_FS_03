import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const plans = [
  {
    name: "Basic",
    price: "3000",
    features: [
      "Gym Access",
      "Locker Access",
      "Basic Equipment Use"
    ]
  },
  {
    name: "Standard",
    price: "5000",
    highlight: true,
    badge: "MOST POPULAR",
    features: [
      "Gym Access",
      "Locker Access",
      "Personal Trainer",
      "Group Classes"
    ]
  },
  {
    name: "Premium",
    price: "10000",
    features: [
      "All Access",
      "Personal Trainer",
      "All Classes Included",
      "Priority Booking",
      "Nutrition Guidance"
    ]
  }
];

export default function Plans() {
  const navigate = useNavigate();
  return (
    <section id="plans" className="py-24 px-10 bg-black">

      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Membership Plans
        </h2>

        <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {plans.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
            className={`rounded-2xl p-10 text-left shadow-lg transition duration-300 ${
              p.highlight
                ? "bg-card border-2 border-primary shadow-[0_0_40px_rgba(255,215,0,0.15)] scale-105"
                : "bg-card"
            }`}
          >

            {/* Badge */}
            {p.badge && (
              <div className="inline-block bg-primary text-black px-4 py-2 rounded-full text-sm font-bold mb-6">
                ⭐ {p.badge}
              </div>
            )}

            {/* Name */}
            <h3 className="text-3xl font-bold mb-4">
              {p.name}
            </h3>

            {/* Price */}
            <p className="text-primary text-5xl font-bold mb-8">
              {p.price}
              <span className="text-xl text-gray-400 font-normal ml-2">
                ETB/month
              </span>
            </p>

            {/* Features */}
            <ul className="space-y-4 text-gray-300 mb-10">
              {p.features.map((feature, idx) => (
                <li key={idx}>✓ {feature}</li>
              ))}
            </ul>
          
            {/* Button */}
            <div className="flex justify-center">
              <button
                onClick={() => navigate("/join")}
                className="w-full bg-primary text-black py-4 rounded-xl font-bold hover:scale-105 transition"
              >
                Join Now
              </button>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}