export default function HomeContact() {
  const items = [
    {
      icon: "📍",
      title: "Location",
      text: "Adama, Ethiopia",
    },
    {
      icon: "📞",
      title: "Phone",
      text: "+251 911 491 277",
    },
    {
      icon: "✉️",
      title: "Email",
      text: "info@brightgym.com",
    },
  ];

  return (
    <section className="py-24 px-6 bg-black text-white">

      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Contact Us
        </h2>

        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-14">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-card rounded-3xl p-10 text-center border border-gray-800 shadow-lg hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(255,215,0,0.08)] transition duration-300"
          >
            {/* Icon */}
            <div className="text-3xl mb-5">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-3">
              {item.title}
            </h3>

            {/* Text */}
            <p className="text-gray-400 text-lg">
              {item.text}
            </p>
          </div>
        ))}
      </div>
  </section>

  );
}