import Image from "next/image";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

type EventCardProps = {
  image: string;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  website: string;
};

export default function EventCard({
  image,
  title,
  startDate,
  endDate,
  location,
  website,
}: EventCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          width={600}
          height={400}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-bold mb-4 text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3 text-gray-600">
            <Calendar className="w-5 h-5 mt-0.5 shrink-0 text-blue-600" />
            <div className="text-sm">
              <p className="font-medium text-gray-900">{startDate}</p>
              <p className="text-xs text-gray-500">to {endDate}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-gray-600">
            <MapPin className="w-5 h-5 shrink-0 text-blue-600" />
            <p className="text-sm font-medium">{location}</p>
          </div>
        </div>

        {/* Button */}
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors group/btn"
        >
          Visit Website
          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}