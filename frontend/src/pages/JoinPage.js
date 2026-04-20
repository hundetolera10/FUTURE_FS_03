import JoinForm from "../components/JoinForm";

export default function JoinPage() {
  return (
    <div className="text-white bg-black">

      {/* 🔥 Header */}
      <div className="text-center py-20 px-6 bg-black">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Join Bright Gym
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Take the first step toward your fitness transformation today.
        </p>
      </div>

      {/* 🧾 Form */}
      <JoinForm />
    </div>
  );
}
