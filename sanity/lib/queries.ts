import { groq } from "next-sanity";


export type Event = {
  _id: string;
  title: string;
  slug: string;
  image: string;
  startDate: string;
  endDate: string;
  location: string;
  website: string;
  description?: string;
};



// queries for the statsSection document
export const statsSectionQuery = groq`*[_type == "statsSection"][0]{
    successConferences,
    committeeMembers,
    participants,
    hostCountries
}`;


// Query to fetch upcoming events only
export const upcomingEventsQuery = groq`
  *[_type == "event" && isActive == true && startDate >= now()] | order(startDate asc) {
    _id,
    title,
    "slug": slug.current,
    "image": image.asset->url,
    startDate,
    endDate,
    location,
    website,
    description
  }
`;

