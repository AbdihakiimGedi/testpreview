const About = () => {
  const testimonials = [
    {
      name: "Maryan ali farah",
      feedback: "Ocean Beauty exceeded my expectations! The spa and RBNB houses are amazing.",
      role: "Customer",
    },
    {
      name: "Abdihakiin Gedi mohamed",
      feedback: "The restaurant experience is top-notch. Delicious food with a beautiful ocean view!",
      role: "Customer",
    },
    {
      name: "Nasra ali husein",
      feedback: "Cosmetics and skincare products are authentic and high quality. Highly recommend!",
      role: "Customer",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300"
    >
      {/* About Us */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-6">
          About Us
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
          OCEAN BEAUTY is a multi-service business offering luxury hospitality,
          beauty services, fine dining, cosmetics, and RBNB-style house rentals.
          Experience comfort, style, and elegance all in one place.
        </p>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-10">
          What People Say
        </h3>

        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="
                bg-gradient-to-r from-blue-100 via-blue-50 to-white 
                dark:from-gray-800 dark:via-gray-700 dark:to-gray-800
                rounded-3xl shadow-2xl p-8 
                flex flex-col items-center text-center 
                transform hover:scale-105 transition duration-500 
                border border-blue-200 dark:border-gray-600
              "
            >
              <p className="text-gray-700 dark:text-gray-300 italic mb-6 text-lg">
                "{t.feedback}"
              </p>
              <h4 className="text-xl md:text-2xl font-semibold text-blue-700 dark:text-blue-400">
                {t.name}
              </h4>
              <span className="text-gray-500 dark:text-gray-400 text-sm">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
