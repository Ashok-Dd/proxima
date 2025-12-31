import HeroHeader from "@/components/ui/Hero";
import EventCard from "@/components/cards/EventCard";
import { sanityFetch } from "@/sanity/lib/live";
import { Event, upcomingEventsQuery } from "@/sanity/lib/queries";

// Format date for display
function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function UpcomingEvents() {
  const { data: events } = await sanityFetch({
    query: upcomingEventsQuery,
  });


  return (
    <>
      <HeroHeader
        title="Upcoming Events"
        desc="Join us at these exciting events and showcase your brand to a global audience."
        image="/images/sample.png"
        alt="Upcoming Events"
      />

      {/* Events Section */}
      <section className="py-24 bg-linear-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {events.length === 0 ? (
            <div className="text-center py-16 min-h-[60vh] flex flex-col justify-center items-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                No Upcoming Events
              </h3>
              <p className="text-gray-600">
                Check back soon for exciting new events!
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <p className="text-gray-600 text-lg">
                  Discover {events.length} upcoming{" "}
                  {events.length === 1 ? "event" : "events"}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event : Event) => (
                  <EventCard
                    key={event._id}
                    image={event.image}
                    title={event.title}
                    startDate={formatDate(event.startDate)}
                    endDate={formatDate(event.endDate)}
                    location={event.location}
                    website={event.website}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}