import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  // STATE
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //  HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Failed to send message 😢");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="text-white bg-black">

      {/* 🔥 HERO */}
      <section className="text-center py-24 px-6 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Bright Gym
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-5">
            Contact Us
          </h1>

          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-8">
            Have questions? We'd love to hear from you. Send us a message or
            visit our location to start your fitness journey.
          </p>
        </motion.div>
      </section>

      {/* 📞 MAIN SECTION */}
      <section className="px-6 md:px-10 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">

          {/* LEFT SIDE */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-[#111] border border-gray-800 rounded-3xl p-8 md:p-10 shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-10">
              Get In Touch
            </h2>

            {/* Card Item */}
            {[
              {
                icon: <MapPin size={20} />,
                title: "Location",
                text1: "Adama, Ethiopia",
                text2: "Visit our main training center",
              },
              {
                icon: <Phone size={20} />,
                title: "Phone",
                text1: "+251 911 491 277",
                text2: "Mon - Fri : 6AM - 10PM",
              },
              {
                icon: <Mail size={20} />,
                title: "Email",
                text1: "info@brightgym.com",
                text2: "Reply within 24 hours",
              },
              {
                icon: <Clock size={20} />,
                title: "Hours",
                text1: "Mon - Fri: 5AM - 11PM",
                text2: "Sat - Sun: 6AM - 10PM",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 mb-8 last:mb-0"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center shadow-lg shadow-yellow-500/20">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    {item.title}
                  </h3>

                  <p className="text-gray-300">{item.text1}</p>
                  <p className="text-gray-500 text-sm">{item.text2}</p>
                </div>
              </div>
            ))}

            {/* Extra Note */}
            <div className="mt-8 p-5 rounded-2xl bg-black border border-gray-800">
              <p className="text-primary font-semibold mb-1">
                Open 24/7 for Premium Members
              </p>
              <p className="text-gray-400 text-sm">
                Premium members get extended access and priority support.
              </p>
            </div>

            {/* MAP */}
            <div className="mt-10 overflow-hidden rounded-2xl border border-gray-800">
              <iframe
                title="Bright Gym Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.502358495617!2d39.26734917369368!3d8.547595591495766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b1f0031beaf37%3A0xc366b2c30acf4786!2sBright!5e0!3m2!1sen!2set!4v1776419265212!5m2!1sen!2set"
                className="w-full h-64"
              ></iframe>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-[#111] border border-gray-800 rounded-3xl p-8 md:p-10 shadow-[0_0_30px_rgba(255,215,0,0.06)]"
          >
            <h2 className="text-3xl font-bold mb-3">
              Send Us a Message
            </h2>

            <p className="text-gray-400 mb-8">
              Fill out the form below and our team will contact you soon.
            </p>

      

              {/*  SUCCESS MESSAGE */}
            {success && (
              <div className="mb-6 p-4 rounded-xl bg-green-500/10 text-green-400 border border-green-500/30">
                ✅ Message sent successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:border-primary outline-none"
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:border-primary outline-none"
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+251..."
                className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:border-primary outline-none"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your message..."
                required
                className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:border-primary outline-none"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-black py-4 rounded-xl font-bold transition hover:scale-[1.02] disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
          </motion.div>

        </div>
      </section>

    </div>
  );
}