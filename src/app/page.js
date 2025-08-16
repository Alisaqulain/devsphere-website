export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 to-purple-700">
      <div className="text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">🚀 Coming Soon</h1>
        <p className="text-lg md:text-xl mb-8">
          We’re working hard to launch something amazing. Stay tuned!
        </p>

        <form className="flex flex-col md:flex-row justify-center items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg text-gray-900 w-72 focus:outline-none"
          />
          <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
}
