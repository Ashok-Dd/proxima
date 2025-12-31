import { client } from "@/sanity/lib/client";
import StatItem from "../ui/StatItem";
import { statsSectionQuery } from "@/sanity/lib/queries";

export default async function Stats() {
  
  let data = {
    successConferences: 0,
    committeeMembers: 0,
    participants: 0,
    hostCountries: 0,
  };

  try {
    const fetchedData = await client.fetch(statsSectionQuery);

    data = {
      successConferences: fetchedData?.successConferences ?? 0,
      committeeMembers: fetchedData?.committeeMembers ?? 0,
      participants: fetchedData?.participants ?? 0,
      hostCountries: fetchedData?.hostCountries ?? 0,
    };
  } catch (_) {}

  return (
    <section className="bg-linear-to-r from-blue-50 via-white to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        <StatItem value={data.successConferences} label="Success Conferences" />
        <StatItem value={data.committeeMembers} label="Committee Members" />
        <StatItem value={data.participants} label="All Participants" />
        <StatItem value={data.hostCountries} label="Host Countries" />
      </div>
    </section>
  );
}
