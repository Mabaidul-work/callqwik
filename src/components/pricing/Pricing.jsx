"use client";
import { featureDetails, pricingPlans } from "@/constants/data";
import { useState } from "react";
import { PlanCard } from "../ui";
import FeatureSection from "./FeatureSection";

const Pricing = () => {
  const [updatedPricingPlans, setUpdatedPricingPlans] = useState(pricingPlans);

  const handleActivePlan = (id) => {
    setUpdatedPricingPlans((prevPlans) =>
      prevPlans.map((plan) =>
        plan._id === id
          ? { ...plan, isPlanActive: true }
          : { ...plan, isPlanActive: false }
      )
    );
  };

  return (
    <section className="w-full bg-lavender-200 lg:bg-gradient-to-r from-[#ffedf6] to-[#fff5f1]">
      <div className="max-w-screen-1.5xl mx-auto w-full px-4 md:px-16 lg:px-24 py-10 md:py-16 lg:py-24 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-3 md:gap-5 lg:gap-6 max-w-[673px] lg:max-w-[737px] mb-6 md:mb-10 lg:mb-16">
          <div className="flex flex-col items-center justify-center gap-3 md:gap-4 lg:gap-5">
            <p className="gradient-text font-bold text-sm md:text-base lg:text-xl mb-4 uppercase">
              Pricing
            </p>
            <h2 className="font-extrabold text-black-600 text-2.5xl md:text-3xl lg:text-5.5xl text-center leading-10 lg:leading-relaxed">
              The Perfect Plan for Your Needs
            </h2>
          </div>

          <p className="text-base md:text-lg lg:text-2xl text-center text-black-500">
            Perfect for small and medium sized businesses to scale their
            businesses
          </p>
        </div>

        <div className="flex flex-col gap-5 md:gap-7 lg:gap-10 items-center justify-center mb-10 md:mb-14 lg:mb-20">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-3 md:gap-4 lg:gap-5 w-full ">
            {updatedPricingPlans?.map((plan) => (
              <PlanCard
                key={plan._id}
                handleActivePlan={handleActivePlan}
                {...plan}
              />
            ))}
          </div>
          <div className="flex flex-col items-center justify-center gap-3 md:gap-5 lg:gap-7">
            <p className="text-center text-black-300 text-base lg:text-lg">
              1 AI Call equals 2 Credits/min, AI conversation equals 1 Credit
              and 1 Video Call equals 1 Credit/min
            </p>
            <div className="flex flex-col items-center justify-center gap-3 lg:flex-row text-center">
              <p className="text-base lg:text-lg">
                On exceeding the plan you will follow the recharge plans.
              </p>
              <button className="text-base lg:text-lg gradient-text">
                Click to View
              </button>
            </div>
          </div>
        </div>

        {/* FEATURE SECTION */}
        <FeatureSection section="Features" featureDetails={featureDetails} />
      </div>
    </section>
  );
};

export default Pricing;
