import { useState } from "react";

export default function JoinForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    plan: "Basic - 3000 ETB/month"
  });

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    alert(data.message);

    setForm({
      name: "",
      phone: "",
      plan: "Basic - 3000 ETB/month"
    });

  } catch (error) {
    alert("Server error");
  }
};

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Start Your Fitness Journey
        </h2>

        <div className="bg-black rounded-3xl p-10 md:p-14 shadow-2xl border border-gray-800 text-left max-w-lg mx-auto">

          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Name */}
            <div>
              <label className="block text-white font-semibold mb-3 text-lg">
                Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
                className="w-full bg-[#111] text-white px-6 py-5 rounded-xl border border-gray-800 focus:border-yellow-400 focus:outline-none text-lg"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-white font-semibold mb-3 text-lg">
                Phone
              </label>
              <input
                type="text"
                placeholder="+251 9xx xxx xxx"
                value={form.phone}
                onChange={(e) => setForm({...form, phone: e.target.value})}
                className="w-full bg-[#111] text-white px-6 py-5 rounded-xl border border-gray-800 focus:border-yellow-400 focus:outline-none text-lg"
              />
            </div>

            {/* Plan */}
            <div>
              <label className="block text-white font-semibold mb-3 text-lg">
                Select Plan
              </label>

              <select
                value={form.plan}
                onChange={(e) => setForm({...form, plan: e.target.value})}
                className="w-full bg-[#111] text-white px-6 py-5 rounded-xl border border-gray-800 focus:border-yellow-400 focus:outline-none text-lg"
              >
                <option>Basic - 3000 ETB/month</option>
                <option>Standard - 5000 ETB/month</option>
                <option>Premium - 10000 ETB/month</option>
              </select>
            </div>

            {/* Button */}
            <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-5 rounded-xl text-xl transition duration-300 hover:scale-[1.02]">
              Join Now
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
