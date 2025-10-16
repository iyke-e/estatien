import SectionHeader from "@/components/ui/SectionHeader";
import React from "react";
import ServiceValueCard from "./ServiceValueCard";
import ValuationMastery from "@/assets/valuationmastery.svg";
import StrategicMarketing from "@/assets/strategicmarketing.svg";
import NegotiationWizardry from "@/assets/negotiationwizardry.svg";
import ClosingSuccess from "@/assets/closingsuccess.svg";
import AbsBg from "@/assets/abs_unlock_bg.svg";

const UnlockValue = () => {
  return (
    <div className="p-inline mt-12">
      <SectionHeader
        sectionTitle="Unlock Property Value"
        description="Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey"
      />

      <div className="grid md:grid-cols-3 gap-4 mt-10">
        <ServiceValueCard
          image={ValuationMastery.src}
          title="Valuation Mastery"
          description="Discover the true worth of your property with our expert valuation services."
        />
        <ServiceValueCard
          image={StrategicMarketing.src}
          title="Strategic Marketing"
          description="Selling a property requires more than just a listing; it demands a strategic marketing."
        />
        <ServiceValueCard
          image={NegotiationWizardry.src}
          title="Negotiation Wizardry"
          description="Negotiating the best deal is an art, and our negotiation experts are masters of it."
        />
        <ServiceValueCard
          image={ClosingSuccess.src}
          title="Closing Success"
          description="A successful sale is not complete until the closing. We guide you through the intricate closing process."
        />
        <div
          style={{ backgroundImage: `url(${AbsBg.src})` }}
          className="flex bg-no-repeat bg-center border rounded-lg border-gray-15  flex-col justify-center gap-4 p-4 md:p-8 md:col-span-2"
        >
          <h3 className="test-6 font-semibold text-white ">
            Unlock the Value of Your Property Today
          </h3>
          <p>
            Ready to unlock the true value of your property? Explore our
            Property Selling Service categories and let us help you achieve the
            best deal possible for your valuable asset.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnlockValue;
