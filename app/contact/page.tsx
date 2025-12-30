import Image from "next/image";
import GetInTouch from "./GetInTouch";
import HeroHeader from "@/components/ui/Hero";

const offices = [
  {
    title: "United States Office",
    company: "The Proxima",
    address: [
      "1400 W Lombard Street PMB 1140",
      "Baltimore, MD 21223, United States",
    ],
    phone: "+1-666-7444-3988",
    email: "contact@theproxima.org",
  },
  {
    title: "India Office",
    company: "Proxima Conferences Private Limited",
    address: [
      "Flat 502, Plot 136, APPLE HOMES",
      "RK Layout, Pragathi Nagar",
      "Hyderabad, Telangana - 500090",
    ],
    phone: "+91 9160290696",
  },
];


const Contact = () => {
    return (
        <>
            <HeroHeader title={'Contact Us'} desc={"We’re here to help. Reach out to us for any queries, collaborations, or conference information."} image={"/images/sample.png"} alt={"About Proxima"} />

            <section className="bg-gray-50 flex items-center flex-wrap py-20 justify-evenly w-full gap-8">
            {offices.map((office, index) => (
                <div
                key={index}
                className="bg-white rounded-xl px-8 py-8 w-[90%] md:w-[40%] shadow-lg"
                >
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                    {office.title}
                </h2>

                <p className="text-gray-600 font-medium mb-2">
                    {office.company}
                </p>

                {office.address.map((line, i) => (
                    <p key={i} className="text-gray-600 mb-1">
                    {line}
                    </p>
                ))}

                <p className="text-gray-600 mt-3">
                    <span className="font-medium">Ph:</span> <span className="text-blue-500">{office.phone}</span>
                </p>

                {office.email && (
                    <p className="text-gray-600 mt-1">
                    <span className="font-medium">Email:</span>{" "}
                    <a
                        href={`mailto:${office.email}`}
                        className="text-blue-500 hover:underline"
                    >
                        {office.email}
                    </a>
                    </p>
                )}
                </div>
            ))}
            </section>

            <GetInTouch />


        </>
    )
}

export default Contact ;
