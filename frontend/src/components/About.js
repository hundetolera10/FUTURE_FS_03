export default function About() {
  return (
    <section className="py-24 px-10 bg-[#111]">

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

        {/* Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&auto=format&fit=crop&q=80"
            alt="Gym"
            className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
          />
        </div>

        {/* Text */}
        <div>

          <h2 className="text-5xl font-bold mb-8">
            About Bright Gym
          </h2>

          <p className="text-gray-300 text-lg leading-8 mb-6">
            At Bright Gym, we believe fitness is more than just exercise, it’s a lifestyle.
            We are dedicated to helping individuals transform their bodies and build confidence
            through professional training programs and a supportive fitness community.
          </p>

          <p className="text-gray-400 text-lg leading-8 mb-10">
            Whether you're a beginner or an experienced athlete, we provide the right environment,
            equipment, and coaching to help you reach your goals.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8">

            <div>
              <h3 className="text-primary text-4xl md:text-5xl font-bold">
                5+
              </h3>
              <p className="text-gray-400 mt-2">Years Experience</p>
            </div>

            <div>
              <h3 className="text-primary text-4xl md:text-5xl font-bold">
                2000+
              </h3>
              <p className="text-gray-400 mt-2">Active Members</p>
            </div>

            <div>
              <h3 className="text-primary text-4xl md:text-5xl font-bold">
                15+
              </h3>
              <p className="text-gray-400 mt-2">Expert Trainers</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}