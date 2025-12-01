import { Link } from "react-router-dom";
import restaurantImg from "../assets/resturnat.jpg";
import cosmeticsImg from "../assets/cosmatics.jpg";
import rbnbImg from "../assets/rbnb.jpg";
import spaImg from "../assets/spy.webp";

const Services = () => {
  const services = [
    {
      title: "Restaurant",
      desc: "Enjoy our delicious meals with premium quality and ocean vibes.",
      img: restaurantImg,
      link: "/restaurant",
    },
    {
      title: "Cosmetics",
      desc: "A wide range of original beauty and skincare products.",
      img: cosmeticsImg,
      link: "/cosmetics",
    },
    {
      title: "RBNB Houses",
      desc: "Rent beautiful ocean-view houses for daily, weekly & monthly stays.",
      img: rbnbImg,
      link: "/rbnb",
    },
    {
      title: "Spa & Beauty",
      desc: "Relax with professional massage, facial, and beauty spa services.",
      img: spaImg,
      link: "/spa",
    },
     {
      title: "Meating & resting halls",
      desc: "Relax with professional massage, facial, and beauty spa services.",
      img: spaImg,
      link: "/rest",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-16">
          Our Packages
        </h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500 cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-60 md:h-64 object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="absolute bottom-4 left-4 right-4 text-left text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-2 drop-shadow-lg">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base mb-3 drop-shadow-md">
                  {item.desc}
                </p>

                {/* Router Link */}
                <Link
                  to={item.link}
                  className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
                >
                  See More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
