import { useState, useEffect } from "react";
import Footer from "../pages/Footer";
import restaurant1 from "../assets/food1.jpg";
import restaurant2 from "../assets/food2.jpg";
import restaurant3 from "../assets/food3.jpg";
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";
import food4 from "../assets/food4.jpg";
import food5 from "../assets/food5.jpg";

const Restaurant = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [restaurant1, restaurant2, restaurant3];

  const menuItems = [
    { name: "Grilled Fish", description: "Freshly grilled fish with herbs", price: "$12", image: food1 },
    { name: "Chicken Curry", description: "Spicy and creamy chicken curry", price: "$10", image: food2 },
    { name: "Beef Steak", description: "Juicy beef steak with sauce", price: "$15", image: food3 },
    { name: "Fresh Salad", description: "Crispy greens with vinaigrette", price: "$7", image: food4 },
    { name: "Pasta Alfredo", description: "Creamy pasta with cheese", price: "$11", image: food5 },
  ];

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Welcome Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Welcome to Ocean Beauty Restaurant
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Experience a unique blend of flavors and fresh ingredients in a serene oceanic ambiance. 
            Delight your taste buds with our signature dishes.
          </p>
        </div>

        {/* Hero Carousel */}
        <div className="relative max-w-6xl mx-auto mb-12 rounded-3xl overflow-hidden shadow-lg">
          <img
            src={heroImages[currentSlide]}
            alt={`Hero ${currentSlide + 1}`}
            className="w-full h-96 md:h-[500px] object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-start justify-center">
            {/* <h2 className="text-3xl md:text-5xl text-white font-bold mt-24">
              Delicious Food
            </h2> */}
          </div>
        </div>

        {/* Menu Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-8 text-center">
            Our Menu
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    {item.description}
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Restaurant;
