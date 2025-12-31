"use client";

import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

export default function SponsorsForm() {
  const [formData, setFormData] = useState({
    title: "",
    fullName: "",
    email: "",
    organisation: "",
    phone: "",
    city: "",
    country: "",
    sponsorshipType: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/sponsorship", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit");
      }

      setSuccess(true);
      setFormData({
        title: "",
        fullName: "",
        email: "",
        organisation: "",
        phone: "",
        city: "",
        country: "",
        sponsorshipType: "",
      });

      // Hide success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 flex justify-center bg-gray-50">
      <div className="w-[95%] md:w-[70%] lg:w-[55%] bg-white rounded-3xl shadow-xl p-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          Sponsorship Interest Form
        </h2>

        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <p className="text-green-800 font-medium">
              Your sponsorship request has been submitted successfully! We'll
              contact you soon.
            </p>
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-red-800 font-medium">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Title & Full Name */}
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title (Mr / Ms / Dr)"
              required
              disabled={loading}
              className="w-full md:w-1/2 px-5 py-4 text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
              disabled={loading}
              className="w-full md:w-1/2 px-5 py-4 text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>

          {/* Email & Organisation */}
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              disabled={loading}
              className="w-full md:w-1/2 px-5 py-4 text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
            <input
              type="text"
              name="organisation"
              value={formData.organisation}
              onChange={handleChange}
              placeholder="Organisation"
              required
              disabled={loading}
              className="w-full md:w-1/2 px-5 py-4 text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>

          {/* Phone, City & Country */}
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              disabled={loading}
              className="w-full md:w-1/3 px-5 py-4 text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              required
              disabled={loading}
              className="w-full md:w-1/3 px-5 py-4 text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country"
              required
              disabled={loading}
              className="w-full md:w-1/3 px-5 py-4 text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>

          {/* Sponsor for Conference */}
          <select
            name="sponsorshipType"
            value={formData.sponsorshipType}
            onChange={handleChange}
            required
            disabled={loading}
            className="w-full px-5 py-4 text-lg rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          >
            <option value="">Sponsor for Conference</option>
            <option value="Platinum Sponsorship">Platinum Sponsorship</option>
            <option value="Gold Sponsorship">Gold Sponsorship</option>
            <option value="Silver Sponsorship">Silver Sponsorship</option>
            <option value="Exhibitor">Exhibitor</option>
            <option value="Other">Other</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-4 text-lg rounded-xl font-semibold hover:bg-blue-700 transition duration-300 disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Sponsorship Request"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}