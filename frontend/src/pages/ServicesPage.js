import { motion } from "framer-motion";

const services = [
  {
    title: "Yoga Flow",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80",
    desc: "Flow through poses to improve flexibility, balance, and mental clarity.",
    duration: "60 min",
    level: "Beginner",
    calories: "200-300 cal",
    schedule: ["Mon 9:00 AM", "Wed 6:00 PM", "Fri 7:00 AM"]
  },
  {
    title: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=80",
    desc: "Build muscle and increase strength with resistance exercises.",
    duration: "45 min",
    level: "Intermediate",
    calories: "400-500 cal",
    schedule: ["Tue 6:00 AM", "Thu 5:30 PM", "Sat 10:00 AM"]
  },
  {
    title: "HIIT Cardio",
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=800&auto=format&fit=crop&q=80",
    desc: "High-intensity interval training for maximum calorie burn.",
    duration: "30 min",
    level: "Advanced",
    calories: "500-700 cal",
    schedule: ["Mon 6:00 PM", "Wed 6:00 AM", "Fri 5:30 PM"]
  },
  {
    title: "Personal Training",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80",
    desc: "One-on-one coaching tailored to your specific fitness goals.",
    duration: "60 min",
    level: "All Levels",
    calories: "300-600 cal",
    schedule: ["By Appointment"]
  },
  {
    title: "Spin Class",
    image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=800&auto=format&fit=crop&q=80",
    desc: "High-energy cycling sessions to boost endurance and burn fat.",
    duration: "45 min",
    level: "Intermediate",
    calories: "400-600 cal",
    schedule: ["Tue 7:00 AM", "Thu 6:00 PM", "Sat 9:00 AM"]
  },
  {
    title: "Functional Fitness",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80",
    desc: "Improve strength, balance, and mobility for everyday activities.",
    duration: "50 min",
    level: "All Levels",
    calories: "300-500 cal",
    schedule: ["Mon 7:00 AM", "Wed 5:30 PM", "Fri 6:30 AM"]
  }
];

export default function ServicesPage() {
  return (
    <div className="py-20 px-10 bg-black text-white">

      {/* 🔥 HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Our Services
        </h1>

        <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded"></div>

        <p className="text-gray-400 text-lg">
          From yoga to high-intensity training, we offer a diverse range of classes 
          to match your fitness goals and experience level
        </p>
      </motion.div>

      {/* 🧩 SERVICES GRID */}
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_40px_rgba(255,215,0,0.15)]"
          >
            {/* Image */}
            <img src={s.image} alt="" className="h-48 w-full object-cover" />

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>

              <p className="text-gray-400 mb-4">{s.desc}</p>

              <div className="flex justify-between text-sm text-gray-400 mb-4">
                <span>⏱ {s.duration}</span>
                <span>👤 {s.level}</span>
                <span>🔥 {s.calories}</span>
              </div>

              <div className="text-sm text-gray-400 mb-4">
                <p className="mb-1 font-semibold text-white">Schedule:</p>
                {s.schedule.map((time, idx) => (
                  <p key={idx}>{time}</p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🧾 CLASS INFORMATION */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-24 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Class Information
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

          {[
            {
              icon: "👥",
              title: "Small Class Sizes",
              desc: "Limited spots ensure personalized attention from instructors"
            },
            {
              icon: "⏰",
              title: "Flexible Schedule",
              desc: "Multiple time slots throughout the week to fit your schedule"
            },
            {
              icon: "🔥",
              title: "All Levels Welcome",
              desc: "Classes designed to accommodate beginners to advanced athletes"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-500/10 mb-4">
                <span className="text-yellow-400 text-2xl">{item.icon}</span>
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </motion.div>

    </div>
  );
}
