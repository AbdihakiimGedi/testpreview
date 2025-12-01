import Footer from "../pages/Footer";
import spaImg from "../assets/spy.webp";

import fullbodyImg from "../assets/fullbody.jpg";
import facialImg from "../assets/facial.jpg";
import manicureImg from "../assets/manicure.jpg";
import packageImg from "../assets/spapackage.jpg";

const Spa = () => {
  const services = [
    {
      name: "Full Body Massage",
      description: "A relaxing full-body massage to ease tension and improve blood flow.",
      image: fullbodyImg,
    },
    {
      name: "Facial Treatment",
      description: "Deep cleansing and rejuvenating facial therapy for glowing skin.",
      image: facialImg,
    },
    {
      name: "Manicure & Pedicure",
      description: "Professional nail care with premium products and techniques.",
      image: manicureImg,
    },
    {
      name: "Beauty Spa Package",
      description: "Complete spa package including massage, facial, and beauty care.",
      image: packageImg,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[550px] w-full overflow-hidden rounded-b-3xl">
        <img
          src={spaImg}
          alt="Spa & Beauty Hero"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Spa & Beauty Services
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl drop-shadow-md">
            Relax with professional massage, facial, and beauty spa treatments.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
            Our Services
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2 text-lg">
            Pamper yourself with our curated luxury spa treatments.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-xl 
              hover:scale-105 transform transition duration-300 overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Spa;
