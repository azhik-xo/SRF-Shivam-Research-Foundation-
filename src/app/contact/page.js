import Footer from "@/components/Footer";
import Navbar from "../../components/Navbar";

import Image from "next/image";

const Contact = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pb-20">
        {/* 1. HERO SECTION (Single Background Image) */}
        {/* Adjust the height (h-[50vh] or specific px) based on your image's aspect ratio */}
        <section className="relative w-full h-[65vh] md:h-[65vh] min-h-87.5 bg-gray-100">
          <Image
            src="/images/contact/contact_hero.png" // Replace with your actual combined image path
            alt="Need help? We are one message away."
            fill
            className=" hidden md:block object-cover object-center"
            priority
          />
          <Image
            src="/images/contact/contact_hero_mob.png" // Replace with your Mobile image
            alt="Need help? We are one message away."
            fill
            className="block md:hidden object-cover object-center"
            priority
          />
        </section>

        {/* 2. OVERLAPPING CONTACT INFO CARDS */}
        <section className="relative w-full max-w-5xl mx-auto px-4 -mt-16 md:-mt-32 z-20">
          {/* Main light-gray container */}
          <div className="bg-[#f7f7f7] rounded-4xl p-6 md:p-10 shadow-lg border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column: Contact Info & Location */}
              <div className="flex flex-col gap-6">
                {/* Contact Info Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Contact info
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-gray-600 text-sm md:text-base">
                      {/* Phone Icon */}
                      <svg
                        className="w-5 h-5 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                      (+91) 9952 9416 14
                    </li>
                    <li className="flex items-center gap-3 text-gray-600 text-sm md:text-base">
                      {/* Email Icon */}
                      <svg
                        className="w-5 h-5 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                      sivamresearchfoundation@gmail.com
                    </li>
                  </ul>
                </div>

                {/* Location Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm grow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Location
                  </h3>
                  <div className="flex items-start gap-3 text-gray-600 text-sm md:text-base">
                    {/* Pin Icon */}
                    <svg
                      className="w-5 h-5 text-gray-700 mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    <span>123 Recovery Road, Gladstone QLD 4680</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Opening Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Opening hours
                </h3>
                <ul className="space-y-4 text-sm md:text-base text-gray-600">
                  <li className="flex justify-between items-center">
                    <span className="w-24">Monday:</span>
                    <span>9:30am - 5pm</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="w-24">Tuesday:</span>
                    <span>9:30am - 5pm</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="w-24">Wednesday:</span>
                    <span>9:30am - 5pm</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="w-24">Thursday:</span>
                    <span>9:30am - 5pm</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="w-24">Friday:</span>
                    <span>9:30am - 5pm</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="w-24">Saturday:</span>
                    <span>9:30am - 6pm</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. LOCATE US SECTION (Map) */}
        <section className="w-full max-w-5xl mx-auto px-4 mt-20 md:mt-28 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-black">
            Locate <span className="text-[#105e46]">Us.</span>
          </h2>

          {/* Map Container */}
          <div className="relative w-full h-75 md:h-112.5 rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-gray-200">
            {/* Replace this Image with your actual map image or a Google Maps iframe */}
            <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15774.472618262078!2d77.68875473975102!3d8.727760220513774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b041185017eff2d%3A0xc67484ac20e5f4f2!2sTirunelveli%20Junction!5e0!3m2!1sen!2sin!4v1769330079011!5m2!1sen!2sin"
                  className="w-full h-full"
                  loading="lazy"
                />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
