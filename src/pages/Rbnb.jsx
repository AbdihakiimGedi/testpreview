import Footer from "../pages/Footer";
import heroImg from "../assets/rbnb-hero.jpg";
import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg";
import room3 from "../assets/room3.jpg";
import room4 from "../assets/room4.jpg";
import room5 from "../assets/room5.jpg";

const Rbnb = () => {
  const rooms = [
    {
      name: "Ocean View Suite",
      description: "A luxurious suite with stunning ocean views.",
   
      image: room1,
    },
    {
      name: "Cozy Garden Room",
      description: "Relax in our peaceful garden rooms.",
     
      image: room2,
    },
    {
      name: "Modern Studio",
      description: "A modern, fully-equipped studio for solo travelers.",
    
      image: room3,
    },
    {
      name: "Family Apartment",
      description: "Spacious apartment perfect for families.",
  
      image: room4,
    },
    {
      name: "Romantic Cabin",
      description: "A cozy cabin ideal for couples.",
    
      image: room5,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden rounded-b-3xl">
        <img
          src={heroImg}
          alt="Rbnb Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Stay with Ocean Beauty
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl">
            Discover the best places to stay with comfort and style.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition">
            Explore Rooms
          </button>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-16 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
            Our Rooms
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Choose from a variety of rooms to suit your style and budget.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {room.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  {room.description}
                </p>
                <p className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                  {room.price}
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

export default Rbnb;
