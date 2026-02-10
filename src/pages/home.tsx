

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-6">
        <h1 className="text-xl font-bold tracking-wide">Krish.dev</h1>
        <button className="border px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
          Contact
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center text-center mt-20 px-4">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
          I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            modern UI
          </span>
          <br /> for the web
        </h2>

        <p className="mt-6 text-gray-400 max-w-xl">
          Frontend Developer crafting clean, animated and user-friendly
          web experiences using React, Next.js & Tailwind.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            View Work
          </button>

          <button className="flex items-center gap-2 border px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
           
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        {[
          "⚡ Fast Performance",
          "🎨 Clean UI Design",
          "📱 Mobile First",
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">{item}</h3>
            <p className="text-gray-400 mt-2">
              High quality, modern and scalable frontend solutions.
            </p>
          </div>
        ))}
      </section>

      {/* PROJECT PREVIEW */}
      <section className="mt-32 px-8">
        <h3 className="text-3xl font-bold mb-6">Featured Project</h3>
        

        <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-10 hover:scale-[1.02] transition">
          <h4 className="text-2xl font-bold">Mini E-Commerce App</h4>
          <p className="mt-2 text-white/90">
            Cart • Dark Mode • Stripe UI • Animations
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-32 mb-20 flex flex-col items-center text-center px-4">
        <h3 className="text-4xl font-extrabold">
          Let’s build something <br /> amazing together
        </h3>

        {/* <button className="mt-8 bg-gradient-to-r from-pink-500 to-purple-500 px-10 py-4 rounded-full font-bold hover:scale-110 transition">
          Get in Touch 🚀
        </button> */}
      </section>
    </div>
  );
}











