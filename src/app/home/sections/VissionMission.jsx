import Image from "next/image";

import { Playfair_Display, Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function VisionMission() {
  return (
    <section className="bg-white py-20 px-3  border-2 border-amber-500">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        {/* --- Our Vision Section --- */}
        <div className="flex flex-col md:flex-row items-center gap-30 border-2 border-amber-500">
          {/* Image */}
          <Image
            src="/images/home/vission.png" // Replace with your actual image path
            alt="Therapist and patient during a consultation"
            width={400}
            height={450}
            className="w-100 h-112.5 rounded-3xl border-2 border-amber-500"
          />

          {/* Content */}
          <div className="w-full h-fit flex flex-col gap-6 border-2 border-amber-500 ">
            <h2 className={`text-5xl  font-normal text-[#185e49] ${poppins.className}`}>
              Our Vision
            </h2>
            <p className="text-base font-semibold text-black">
              To create a mentally healthy, resilient, and inclusive society
              where every individual has access to quality mental health care,
              psychosocial support, and opportunities to achieve their fullest
              potential.
            </p>
            <ul className="flex flex-col gap-4 text-[#8a8a8a] text-sm md:text-base leading-relaxed font-extralight">
              <li className="flex gap-3">
                <span className="text-[#8a8a8a] mt-1">•</span>
                <p>
                  Mental health services are accessible, affordable, and
                  available to everyone.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8a8a8a] mt-1">•</span>
                <p>
                  Individuals and families receive timely psychological support
                  and evidence-based care.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8a8a8a] mt-1">•</span>
                <p>
                  Communities promote emotional well-being, resilience, and
                  social inclusion.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8a8a8a] mt-1">•</span>
                <p>
                  Research and innovation strengthen mental health policies and
                  clinical practices.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8a8a8a] mt-1">•</span>
                <p>
                  Mental illness is understood with compassion, dignity, and
                  without stigma.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Our Mission Section --- */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 lg:gap-24">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full aspect-4/5 max-w-md overflow-hidden rounded-3xl">
              <Image
                src="/images/home/mission.png" // Replace with your actual image path
                alt="Two people holding hands in support"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#185e49] mb-8">
              Our Mission
            </h2>
            <ul className="flex flex-col gap-4 text-[#8a8a8a] text-sm md:text-base leading-relaxed font-light">
              <li className="flex gap-3">
                <span className="text-[#8a8a8a] mt-1">•</span>
                <p>
                  Providing professional psychological counselling and
                  psychiatric social work services.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8a8a8a] mt-1">•</span>
                <p>
                  Delivering evidence-based clinical interventions for mental
                  health and addiction recovery.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8a8a8a] mt-1">•</span>
                <p>
                  Conducting research, programe evaluation, and intervention
                  development.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8a8a8a] mt-1">•</span>
                <p>
                  Training students, professionals, and caregivers in mental
                  health care.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8a8a8a] mt-1">•</span>
                <p>
                  Raising awareness through workshops, campaigns, and community
                  outreach.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
