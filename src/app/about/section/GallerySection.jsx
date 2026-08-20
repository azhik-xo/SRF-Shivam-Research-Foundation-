import Image from "next/image";

// 1. Simulate fetching data from your database
async function fetchImagesFromDB() {
  // Replace this with your actual database query (e.g., MongoDB, Supabase).
  // For demonstration, we generate 9 placeholders to match the 3x3 grid.
  return Array.from({ length: 9 }).map((_, index) => ({
    id: index.toString(),
    imageUrl: `/your-image-path/image-${index}.jpg`, // Your actual DB image URL
    altText: `Gallery item ${index + 1}`,
  }));
}

export default async function GallerySection() {
  // Fetch the data on the server
  const images = await fetchImagesFromDB();

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24 bg-white">
      {/* Header Area */}
      <div className="flex flex-col items-center text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1f7456] mb-4">
          Gallery of Works
        </h2>
        <p className="text-gray-800 text-sm md:text-base max-w-2xl leading-relaxed">
          Showcasing our journey of empowering individuals, supporting
          communities, and advancing mental health through meaningful
          initiatives.
        </p>
      </div>

      {/* Grid Area */}
      {/* The grid starts with 1 col on mobile, 2 on small screens, and 3 on medium+ screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            // aspect-square forces the height to equal the width, 
            // ensuring perfect squares just like the reference image.
            className="relative w-full aspect-square bg-[#d9d5d4] overflow-hidden"
          >
            {/* 
              Uncomment the Next/Image component below once you have real URLs coming from your database.
              The hover scale effect is an optional nice touch for galleries.
            */}
            
            {/* 
            <Image
              src={image.imageUrl}
              alt={image.altText}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            /> 
            */}
          </div>
        ))}
      </div>
    </section>
  );
}