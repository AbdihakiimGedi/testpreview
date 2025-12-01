import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300"
    >
      {/* TITLE */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
          Have questions or need assistance? Reach out via email, phone, or visit our location.
          We are always happy to help!
        </p>
      </div>

      {/* CONTACT CARDS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">

        {/* Email */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-600 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
            <EnvelopeIcon className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Email
          </h3>
          <p className="text-gray-700 dark:text-gray-300">oceanbeauty@gmail.com</p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-600 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
            <PhoneIcon className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Phone
          </h3>
          <p className="text-gray-700 dark:text-gray-300">+252 612202080</p>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-600 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
            <MapPinIcon className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Address
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Mogadishu, Banadir, Somalia <br />
            Airport Road, Waberi, Mogadishu
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
