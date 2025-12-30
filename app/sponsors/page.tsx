import HeroHeader from "@/components/ui/Hero";

const Sponsers = () => {
  return (
    <>
      <HeroHeader
        title="Become a Sponsor"
        desc="Partner with us and showcase your brand to a global audience."
        image="/images/sample.png"
        alt="About Proxima"
      />

      {/* Sponsorship Interest Form */}
      <section className="py-24 flex justify-center bg-gray-50">
        <div className="w-[95%] md:w-[70%] lg:w-[55%] bg-white rounded-3xl shadow-xl p-12">
          <h2 className="text-3xl font-bold text-center mb-10">
            Sponsorship Interest Form
          </h2>

          <form className="space-y-8">

            {/* Title & Full Name */}
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                placeholder="Title (Mr / Ms / Dr)"
                className="w-full md:w-1/2 px-5 py-4 text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full md:w-1/2 px-5 py-4 text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email & Organisation */}
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full md:w-1/2 px-5 py-4 text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Organisation"
                className="w-full md:w-1/2 px-5 py-4 text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone, City & Country */}
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full md:w-1/3 px-5 py-4 text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="City"
                className="w-full md:w-1/3 px-5 py-4 text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Country"
                className="w-full md:w-1/3 px-5 py-4 text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Sponsor for Conference */}
            <select
              className="w-full px-5 py-4 text-lg rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Sponsor for Conference</option>
              <option>Platinum Sponsorship</option>
              <option>Gold Sponsorship</option>
              <option>Silver Sponsorship</option>
              <option>Exhibitor</option>
              <option>Other</option>
            </select>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 text-lg rounded-xl font-semibold hover:bg-blue-700 transition duration-300"
            >
              Submit Sponsorship Request
            </button>

          </form>
        </div>
      </section>
    </>
  );
};

export default Sponsers;
