import { salesAndCRMFeatures } from "@/constants/data";
import SectionHeader from "../ui/SectionHeader";
import SalesAndCrmFeature from "./SalesAndCrmFeature";

const SalesAndCrmFeatures = () => {
  return (
    <section className="w-full bg-lavender-200">
      <div className="max-w-screen-1.5xl mx-auto w-full px-4 md:px-16 lg:px-28 py-10 md:py-16 lg:py-24 flex flex-col items-center gap-6 md:gap-10 lg:gap-16">
        <SectionHeader
          featureName="Sales & CRM Features"
          headerTitle={
            <>
              Features for your online <br /> sales agents
            </>
          }
          buttonLabel="Join Waitlist"
        />

        <div className="flex flex-col lg:flex-row items-center justify-center flex-wrap gap-3 md:gap-4 lg:gap-5 ">
          {salesAndCRMFeatures.map((feature) => (
            <SalesAndCrmFeature key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesAndCrmFeatures;
