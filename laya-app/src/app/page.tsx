export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 py-24 bg-gradient-to-br from-green-100 to-green-50">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
          Transform Your Life with Laya
        </h1>

        <p className="text-lg text-gray-700 max-w-xl mb-6">
          Mindful learning programs designed for modern India—blending ancient
          wisdom with practical science.
        </p>

        <button className="bg-green-700 text-white px-8 py-3 rounded-md hover:bg-green-800 transition">
          Get Early Access
        </button>
      </section>

      {/* Programs Section */}
      <section className="px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
          Featured Programs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Mindfulness Basics</h3>
            <p className="text-gray-600">
              Build inner calm and emotional resilience with simple techniques.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Peak Performance Habits</h3>
            <p className="text-gray-600">
              Structure your day with habits used by top founders and athletes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Emotional Fitness</h3>
            <p className="text-gray-600">
              Improve your relationships with evidence-backed emotional tools.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center px-6 py-20 bg-green-700 text-white mt-10">
        <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
        <p className="text-lg text-green-100 mb-6">
          Join thousands of learners transforming their lives.
        </p>
        <button className="bg-white text-green-700 px-8 py-3 rounded-md hover:bg-gray-100 transition">
          Start Now
        </button>
      </section>
    </main>
  );
}
