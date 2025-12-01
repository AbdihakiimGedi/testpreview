import Footer from "../pages/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import heroImg from "../assets/cosmatics1.jpg";
import creamImg from "../assets/cream.jpg";
import lipstickImg from "../assets/lipstick.jpg";
import perfumeImg from "../assets/black.jpg";
import lotionImg from "../assets/lotion.jpg";

const Cosmetics = () => {
  const products = [
    { name: "Facial Cream", description: "Hydrating cream for all skin types", price: "$25", image: creamImg },
    { name: "Lipstick Set", description: "Vibrant colors for all occasions", price: "$18", image: lipstickImg },
    { name: "Perfume", description: "Long-lasting signature scent", price: "$40", image: perfumeImg },
    { name: "Body Lotion", description: "Smooth and moisturized skin all day", price: "$22", image: lotionImg },
  ];

  const heroSlides = [heroImg, creamImg, perfumeImg];

  return (
    <>
      {/* ✅ Hero Carousel */}
      <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden rounded-b-3xl">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          className="w-full h-full"
        >
          {heroSlides.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Ocean Beauty Cosmetics
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl">
                  Premium skincare and beauty products for a radiant, healthy look.
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Products Section */}
      <section className="py-16 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
            Our Products
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Explore our collection of original cosmetics for every occasion.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  {product.description}
                </p>
                <p className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                  {product.price}
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

export default Cosmetics;
