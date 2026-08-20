import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <section className="relative w-full max-sm:bg-[url('/images/about/about_bg_mob.png')] bg-[url('/images/about/about_bg.png')] bg-center bg-no-repeat bg-cover min-h-[50vh] flex flex-col items-center pt-20 pb-40 overflow-hidden">
        {/* Optional: Add a spotlight gradient effect */}
        <div className="absolute top-0 left-0 w-1/2 h-full  from-white/10 to-transparent pointer-events-none rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/4"></div>

        <h1 className="text-white text-5xl md:text-6xl font-bold z-10 mb-8 tracking-wide"></h1>

        {/* Chairs Image Placeholder */}
        {/* Replace the src with your actual image path */}
        <div className="relative w-full max-w-3xl h-48 z-10 opacity-90">
          <Image
            src="/images/chairs.png" // REPLACE ME
            alt="Empty chairs arranged in a circle"
            fill
            className="object-contain object-bottom hidden"
          />
        </div>
      </section>

      {/* 2. OVERLAPPING INFO CARD */}
      <section className="relative w-full max-w-4xl mx-auto px-4 -mt-32 z-20">
          <div className="bg-white rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-10 md:p-14 flex flex-col items-center text-center border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1f7456] mb-6">
              Sivam Research Foundation
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-3xl mb-8">
              is a non-profit organization committed to advancing mental health,
              research, education, and community well-being. Through
              evidence-based counselling, rehabilitation, training, research,
              and awareness programmes, SRF empowers individuals, families, and
              communities to achieve better mental health and an improved
              quality of life while promoting resilience, inclusion, and social
              responsibility.
            </p>
            <button className="px-8 py-3 rounded-full border-2 border-[#1f7456] text-[#1f7456] font-semibold hover:bg-[#1f7456] hover:text-white transition-colors duration-300">
              Explore Services
            </button>
          </div>
        </section>
    </>
  );
};

export default HeroSection;
