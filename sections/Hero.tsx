import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full">
      {/* Background Image */}
      <Image
        src="/images/sample.png" // replace with your image
        alt="Proxima Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen justify-left items-center">
        <div className="max-w-7xl w-full mx-auto  px-6">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            THE PROXIMA
          </h1>

          <p className="mt-6 max-w-2xl text-gray-200 text-base md:text-lg leading-relaxed">
            A global platform for scientific and technological innovation. Join
            world changers, researchers, and industry leaders at our
            international conferences across Europe, Asia-Pacific, and America.
          </p>

          <button className="mt-8 bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-lg">
            Explore Conferences
          </button>
        </div>
      </div>
    </section>
  );
}
