import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Plans() {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Basic",
      price: "3000",
      features: ["Gym Access", "Locker Access", "Basic Equipment Use"],
      popular: false,
    },
    {
      name: "Standard",
      price: "5000",
      features: ["Gym Access", "Locker Access", "Personal Trainer", "Group Classes"],
      popular: true,
    },
    {
      name: "Premium",
      price: "10000",
      features: [
        "All Access",
        "Personal Trainer",
        "All Classes Included",
        "Priority Booking",
        "Nutrition Guidance",
      ],
      popular: false,
    },
  ];

  const includes = [
    "No enrollment fees",
    "No long-term contracts",
    "Cancel anytime",
    "Free Wi-Fi",
    "Secure storage lockers",
    "Clean, modern facilities",
    "Expert staff support",
    "Member events & workshops",
  ];

  return (
    <section className="py-24 px-10 bg-black">

      {/* 🔥 Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Membership Plans
        </h2>

        <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded"></div>

        <p className="text-gray-400 text-lg">
          Choose the perfect plan to start your fitness journey. All memberships include no 
          commitment and can be cancelled anytime.
        </p>
      </motion.div>

      {/* 💳 Plans */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className={`rounded-2xl p-10 bg-card border transition duration-300 ${
              plan.popular
                ? "border-primary shadow-[0_0_40px_rgba(255,215,0,0.12)] scale-105"
                : "border-gray-800"
            }`}
          >
            {plan.popular && (
              <div className="inline-block bg-primary text-black px-4 py-2 rounded-full font-bold text-sm mb-6">
                ⭐ MOST POPULAR
              </div>
            )}

            <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>

            <p className="text-primary text-5xl font-bold mb-8">
              {plan.price}
              <span className="text-xl text-gray-400 font-medium">
                {" "}ETB/month
              </span>
            </p>

            <ul className="space-y-4 text-gray-300 mb-10">
              {plan.features.map((item, idx) => (
                <li key={idx}>✓ {item}</li>
              ))}
            </ul>

            <button
              onClick={() => navigate("/join")}
              className="w-full bg-primary text-black py-4 rounded-xl font-bold hover:opacity-90 transition"
            >
              Join Now
            </button>
          </motion.div>
        ))}
      </div>

      {/* 📋 Includes */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto bg-card border border-gray-800 rounded-3xl p-10 md:p-14"
      >
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            All Memberships Include
          </h3>
          <p className="text-gray-400">
            Every Bright Gym membership gives you premium benefits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {includes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-4 rounded-xl bg-black border border-gray-800"
            >
              <span className="text-primary text-xl">✓</span>
              <span className="text-gray-300">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
