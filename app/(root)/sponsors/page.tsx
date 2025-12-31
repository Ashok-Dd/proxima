import SponsorsForm from "@/components/forms/SponsorForm";
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
      <SponsorsForm />
    </>
  );
};

export default Sponsers;
