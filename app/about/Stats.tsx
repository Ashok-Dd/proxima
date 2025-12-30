// Stats.tsx
import React, { useEffect, useState } from "react";

interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}

const statsData: StatItem[] = [
  { label: "Success Conferences", value: 124, suffix: "+" },
  { label: "Committee Members", value: 200, suffix: "+" },
  { label: "All Participants", value: 5000, suffix: "+" },
  { label: "Host Countries", value: 19, suffix: "+" },
];

const Stats: React.FC = () => {
  const [counts, setCounts] = useState<number[]>(statsData.map(() => 0));

  useEffect(() => {
    const increments = statsData.map((stat) => Math.ceil(stat.value / 100));
    const interval = setInterval(() => {
      setCounts((prev) => {
        const updated = prev.map((count, index) => {
          if (count < statsData[index].value) {
            const newCount = count + increments[index];
            return newCount > statsData[index].value ? statsData[index].value : newCount;
          }
          return count;
        });

        // Stop the interval when all counts reach their max
        if (updated.every((count, i) => count >= statsData[i].value)) {
          clearInterval(interval);
        }
        return updated;
      });
    }, 20); // Update speed in ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap gap-6 justify-evenly mt-8 mb-16">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl shadow-md text-center w-[300px] px-16 py-10"
        >
          <h2 className="text-5xl font-bold">{counts[index]}{stat.suffix}</h2>
          <p className="text-gray-600 mt-2">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
