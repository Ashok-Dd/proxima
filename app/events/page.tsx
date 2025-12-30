import HeroHeader from "@/components/ui/Hero";

const events = [
  {
    image: "/images/sample.png",
    title: "International Science Conference 2025",
    startDate: "March 15, 2025",
    endDate: "March 17, 2025",
    location: "New York, USA",
    website: "https://example.com",
  },
  {
    image: "/images/sample.png",
    title: "Global Medical Summit",
    startDate: "April 10, 2025",
    endDate: "April 12, 2025",
    location: "London, UK",
    website: "https://example.com",
  },
  {
    image: "/images/sample.png",
    title: "AI & Technology Expo",
    startDate: "May 5, 2025",
    endDate: "May 7, 2025",
    location: "Singapore",
    website: "https://example.com",
  },
  {
    image: "/images/sample.png",
    title: "International Science Conference 2025",
    startDate: "March 15, 2025",
    endDate: "March 17, 2025",
    location: "New York, USA",
    website: "https://example.com",
  },
  {
    image: "/images/sample.png",
    title: "Global Medical Summit",
    startDate: "April 10, 2025",
    endDate: "April 12, 2025",
    location: "London, UK",
    website: "https://example.com",
  },
  {
    image: "/images/sample.png",
    title: "AI & Technology Expo",
    startDate: "May 5, 2025",
    endDate: "May 7, 2025",
    location: "Singapore",
    website: "https://example.com",
  },
  {
    image: "/images/sample.png",
    title: "Healthcare Innovation Forum",
    startDate: "June 20, 2025",
    endDate: "June 22, 2025",
    location: "Berlin, Germany",
    website: "https://example.com",
  },
];

const UpcomingEvents = () => {
  return (
    <>
      <HeroHeader
        title="Upcoming Events"
        desc="Events with us and showcase your brand to a global audience."
        image="/images/sample.png"
        alt="About Proxima"
      />

      {/* Events Cards */}
      <section className="py-24  bg-gray-50 ">
        <div className="flex flex-wrap  justify-start  gap-1">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg ml-[2.5%] mt-2 w-[90%] sm:w-[45%] lg:w-[30%] overflow-hidden flex flex-col"
            >
              {/* Image */}
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {event.title}
                </h3>

                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Start:</span> {event.startDate}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">End:</span> {event.endDate}
                </p>
                <p className="text-gray-600 mb-5">
                  <span className="font-medium">Location:</span> {event.location}
                </p>

                {/* Button */}
                <a
                  href={event.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block text-center bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default UpcomingEvents;
