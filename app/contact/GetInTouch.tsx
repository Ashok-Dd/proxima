const GetInTouch = () => {
  return (
    <div className="py-28 flex flex-col items-center justify-center bg-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-14">
        Get in Touch
      </h1>

      <div className="w-[90%] md:w-[60%] lg:w-[50%] bg-gray-50 rounded-3xl p-12 shadow-xl">
        <form className="space-y-6">

          {/* Name & Email */}
          <div className="flex flex-col md:flex-row gap-8">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full md:w-1/2 px-6 bg-white py-4 text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full md:w-1/2 px-6 bg-white py-4 text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Subject */}
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-6 py-4 text-lg bg-white rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Message */}
          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full px-6 py-4 text-lg bg-white rounded-xl border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Button */}
          <div className="flex  justify-center">
            <button
              type="submit"
              className="bg-blue-600 w-full text-white px-12 py-4 text-lg rounded-xl font-semibold hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
