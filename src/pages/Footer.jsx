import logo from "../assets/logo.jpeg";

const Footer = () => {
  const services = ["Restaurant", "Cosmetics", "RBNB Houses", "Spa & Beauty"];

  return (
    <footer className="pt-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-left">

        {/* Logo & Business Name */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={logo}
              alt="Ocean Beauty Logo"
              className="w-12 h-12 rounded-full object-cover shadow"
            />
            <h1 className="text-2xl font-bold tracking-wide text-gray-900 dark:text-white">
              OCEAN BEAUTY
            </h1>
          </div>

          <p className="text-gray-600 dark:text-gray-300 max-w-xs">
            Experience luxury, beauty, comfort, and delicious cultural food — all in one place.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Our Services
          </h3>
          <ul className="space-y-2">
            {services.map((s, index) => (
              <li
                key={index}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition cursor-pointer"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Contact Us
          </h3>
          <p className="text-gray-700 dark:text-gray-300">Email: oceanbeauty@gmail.com</p>
          <p className="text-gray-700 dark:text-gray-300">Phone: +252 61 2202080</p>
          <p className="text-gray-700 dark:text-gray-300">Website: www.oceanbeauty.com</p>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Address
          </h3>
          <p className="text-gray-700 dark:text-gray-300">Mogadishu, Banadir, Somalia</p>
          <p className="text-gray-700 dark:text-gray-300">Airport Road, Waberi, Mogadishu</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-6 text-center text-gray-700 dark:text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} OCEAN BEAUTY. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
