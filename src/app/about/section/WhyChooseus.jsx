import Image from "next/image";

const WhyChooseus = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                Why Choose Us
              </span>
              <div className="h-px w-16 bg-gray-300"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Trusted, Proven <br /> & Local We&apos;ve Got <br /> Your Back
            </h2>

            <p className="text-gray-600 mb-10 leading-relaxed max-w-md">
              We combine clinical excellence, research, education, and community
              engagement to deliver holistic, person-centred mental health
              services.
            </p>

            <button className="px-8 py-3 rounded-full bg-[#333333] text-white font-medium hover:bg-black transition-colors duration-300">
              Know more
            </button>
          </div>

          {/* Right Content - Images Collage */}
          <div className="relative w-full h-125">
            {/* Top Right Image (Therapy session) */}
            <div className="absolute top-0 right-0 w-2/3 h-48 rounded-xl overflow-hidden shadow-lg z-10 border-4 border-white">
              <div className="relative w-full h-full bg-gray-200">
                <Image
                  src="/images/about/theraphy.png" // REPLACE ME
                  alt="Therapy session"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bottom Right Image (Hands holding brain) */}
            <div className="absolute bottom-0 right-4 w-3/5 h-64 rounded-xl overflow-hidden shadow-xl z-20 border-4 border-white bg-white">
              <div className="relative w-full h-full p-2">
                <Image
                  src="/images/about/brain.png" // REPLACE ME
                  alt="Hands holding brain"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Left Overlapping Image (Vintage brain collage) */}
            <div className="absolute top-20 left-0 w-3/5 h-80 rounded-xl overflow-hidden shadow-2xl z-30 border-4 border-white bg-white">
              <div className="relative w-full h-full p-2">
                <Image
                  src="/images/about/mind.png" // REPLACE ME
                  alt="Vintage brain collage"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Decorative background cards to create the stack effect */}
            <div className="absolute -bottom-2.5 -right-2.5 w-3/5 h-64 bg-gray-100 rounded-xl z-0 rotate-3 shadow-sm border border-gray-200"></div>
            <div className="absolute top-24 -left-2.5 w-3/5 h-80 bg-gray-100 rounded-xl z-0 -rotate-2 shadow-sm border border-gray-200"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseus;
