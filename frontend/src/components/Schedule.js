export default function Schedule() {
  const schedule = [
    {
      day: "Monday",
      activity: "Yoga (6AM), Strength Training (4PM), HIIT (6PM)",
    },
    {
      day: "Tuesday",
      activity: "Cardio Blast (7AM), Personal Training (All Day)",
    },
    {
      day: "Wednesday",
      activity: "Pilates (6AM), CrossFit (5PM)",
    },
    {
      day: "Thursday",
      activity: "Strength Training (6AM), Boxing (6PM)",
    },
    {
      day: "Friday",
      activity: "HIIT (7AM), Yoga (5PM), Dance Fitness (7PM)",
    },
    {
      day: "Saturday",
      activity: "Group Classes (9AM - 12PM), Open Gym",
    },
    {
      day: "Sunday",
      activity: "Recovery & Stretch(10AM), Open Gym",
    },
  ];

  return (
    <section className="py-24 px-10 bg-[#111]">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Weekly Schedule
        </h2>

        <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
      </div>

      {/* Table */}
      <div className="max-w-6xl mx-auto bg-card rounded-2xl overflow-hidden border border-gray-800 shadow-xl">

        {/* Headings */}
        <div className="grid md:grid-cols-4 px-8 py-5 bg-black border-b border-gray-800">
          <span className="font-bold text-white text-lg">Day</span>
          <span className="md:col-span-3 font-bold text-white text-lg">
            Classes
          </span>
        </div>

        {/* Rows */}
        {schedule.map((item, i) => (
          <div
            key={i}
            className="grid md:grid-cols-4 px-8 py-6 border-b border-gray-800 transition duration-300 hover:bg-primary/10"
          >
            <span className="font-semibold text-white text-lg">
              {item.day}
            </span>

            <span className="md:col-span-3 text-gray-300 mt-2 md:mt-0">
              {item.activity}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}