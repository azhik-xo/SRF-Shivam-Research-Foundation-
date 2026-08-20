"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

// 1. Dummy Data (Replace this with your API fetch later)
const professionals = [
  {
    id: 1,
    name: "Dr. Partheeban, M.D. (Psychiatry), MBBS",
    specialty: "Consultant Psychiatrist | Addiction Psychiatrist | Sexologist",
    imageUrl: "/images/home/doctor.png", // Replace with your actual image paths
  },
  {
    id: 2,
    name: "Dr. Partheeban, M.D. (Psychiatry), MBBS",
    specialty: "Consultant Psychiatrist | Addiction Psychiatrist | Sexologist",
    imageUrl: "/images/home/doctor.png", 
  },
  {
    id: 3,
    name: "Dr. Partheeban, M.D. (Psychiatry), MBBS",
    specialty: "Consultant Psychiatrist | Addiction Psychiatrist | Sexologist",
    imageUrl: "/images/home/doctor.png", 
  },
  {
    id: 4,
    name: "Dr. Partheeban, M.D. (Psychiatry), MBBS",
    specialty: "Consultant Psychiatrist | Addiction Psychiatrist | Sexologist",
    imageUrl: "/images/home/doctor.png", 
  },
  {
    id: 5,
    name: "Dr. Partheeban, M.D. (Psychiatry), MBBS",
    specialty: "Consultant Psychiatrist | Addiction Psychiatrist | Sexologist",
    imageUrl: "/images/home/doctor.png", 
  },
  {
    id: 6,
    name: "Dr. Partheeban, M.D. (Psychiatry), MBBS",
    specialty: "Consultant Psychiatrist | Addiction Psychiatrist | Sexologist",
    imageUrl: "/images/home/doctor.png", 
  },
];

export default function OurProfessional() {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // 1. Calculate active index on scroll
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    // Calculate the width of one card + the gap (24px for gap-6)
    const itemWidth = container.children[0].clientWidth + 24;
    // Math.round ensures the indicator changes right as the next card takes up the majority of the view
    const newIndex = Math.round(container.scrollLeft / itemWidth);
    
    setActiveIndex(newIndex);
  };

  // 2. Scroll to a specific index when a pagination line is clicked
  const scrollToIndex = (index) => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const itemWidth = container.children[0].clientWidth + 24;
    
    container.scrollTo({
      left: index * itemWidth,
      behavior: "smooth",
    });
  };

  // Scroll handler for the Next/Prev arrows
  const scrollByArrow = (direction) => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const itemWidth = container.children[0].clientWidth + 24;
    
    container.scrollBy({
      left: direction === "left" ? -itemWidth : itemWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <h2 className="text-4xl md:text-5xl font-medium text-[#1f7456] leading-tight">
            Our <br /> Professional
          </h2>
          <p className="max-w-2xl text-gray-700 text-sm md:text-base leading-relaxed">
            We combine clinical excellence, research, education, and community
            engagement to deliver holistic, person-centred mental health
            services.
          </p>
        </div>

        {/* --- Carousel Section --- */}
        <div className="relative w-full">
          {/* Scrollable Container with onScroll listener */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-2 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
          >
            {professionals.map((pro) => (
              <div
                key={pro.id}
                className="relative shrink-0 w-70 md:w-[320px] h-87.5 md:h-90 bg-gray-300 rounded-4xl border-[3px] border-gray-700 overflow-hidden snap-start shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={pro.imageUrl}
                  alt={pro.name}
                  fill
                  className="object-cover object-top"
                />

                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-4 shadow-lg flex flex-col text-left ">
                  <h3 className="text-gray-900 font-semibold text-xs md:text-xs mb-1">
                    {pro.name}
                  </h3>
                  <p className="text-gray-500 text-[8px] md:text-[10px] tracking-wide">
                    {pro.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Controls Section --- */}
        <div className="flex items-center justify-between md:justify-end mt-4">
          
          {/* Dynamic Pagination Indicators */}
          <div className="flex items-center gap-2 md:absolute md:left-1/2 md:-translate-x-1/2">
            {professionals.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-black"
                    : "w-8 bg-gray-300 hover:bg-gray-400"
                }`}
              ></button>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button
              onClick={() => scrollByArrow("left")}
              disabled={activeIndex === 0}
              className={`w-10 h-10 flex items-center justify-center rounded-full border transition-colors ${
                activeIndex === 0
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-gray-300 text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-400"
              }`}
              aria-label="Previous slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scrollByArrow("right")}
              disabled={activeIndex === professionals.length - 1}
              className={`w-10 h-10 flex items-center justify-center rounded-full border transition-colors ${
                activeIndex === professionals.length - 1
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-gray-300 text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-400"
              }`}
              aria-label="Next slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}