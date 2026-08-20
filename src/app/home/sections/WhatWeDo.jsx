export default function WhatWeDo() {
  // Array containing the card data to keep the component clean
  const services = [
    {
      id: 1,
      title: "Mental Health Counselling",
      description:
        "Providing individual, family, couples, child, adolescent, and geriatric counselling using evidence-based psychological interventions.",
    },
    {
      id: 2,
      title: "Addiction Recovery Services",
      description:
        "Providing individual, family, couples, child, adolescent, and geriatric counselling using evidence-based psychological interventions.",
    },
    {
      id: 3,
      title: "Research & Innovation",
      description:
        "Providing individual, family, couples, child, adolescent, and geriatric counselling using evidence-based psychological interventions.",
    },
    {
      id: 4,
      title: "Training & Capacity Building",
      description:
        "Providing individual, family, couples, child, adolescent, and geriatric counselling using evidence-based psychological interventions.",
    },
    {
      id: 5,
      title: "School & College Mental Health",
      description:
        "Providing individual, family, couples, child, adolescent, and geriatric counselling using evidence-based psychological interventions.",
    },
    {
      id: 6,
      title: "Clinical Psychology Services",
      description:
        "Providing individual, family, couples, child, adolescent, and geriatric counselling using evidence-based psychological interventions.",
    },
    {
      id: 7,
      title: "Addiction Recovery & Rehabilitation",
      description:
        "Providing individual, family, couples, child, adolescent, and geriatric counselling using evidence-based psychological interventions.",
    },
    {
      id: 8,
      title: "Psychiatric Social Work",
      description:
        "Providing individual, family, couples, child, adolescent, and geriatric counselling using evidence-based psychological interventions.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#1f7456]">
            What We Do
          </h2>
        </div>

        {/* Grid Layout (Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#839e79] rounded-xl px-8 py-14 max-sm:w-70 max-sm:ml-15 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* White Number Circle */}
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm shrink-0">
                <span className="text-2xl font-bold text-gray-900">
                  {service.id}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white text-base font-medium mb-4 leading-snug min-h-14 flex items-center justify-center">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/80 text-xs text-justify md:text-sm font-extralight leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}