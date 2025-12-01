import heroVideo from "../assets/vuideo.mp4";

const Header = () => {
  return (
    <section
      id="hero"
      className="relative h-screen w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300"
    >
      {/* VIDEO BACKGROUND */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
      />

      {/* DARK OVERLAY (works for both modes) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* TEXT CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Welcome to OCEAN BEAUTY
        </h1>

        <p className="text-lg md:text-2xl max-w-3xl mx-auto text-white drop-shadow-md">
          Experience luxury, beauty, comfort, and delicious cultural food — all in one place.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-8 flex gap-4 flex-wrap justify-center">

          {/* First Button */}
          <a
            href="#services"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
          >
            Explore Services
          </a>

          {/* Second Button (auto dark/light support) */}
          <a
            href="#about"
            className="
              bg-white text-blue-700 hover:bg-gray-100
              dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700
              font-semibold px-6 py-3 rounded-lg transition duration-300
            "
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
