import SectionHeader from "@/components/ui/SectionHeader";
import ServiceValueCard from "./ServiceValueCard";
import MarkeInsight from "@/assets/marketinsight.svg";
import RoiAssessment from "@/assets/roiassessment.svg";
import CustomerStrategies from "@/assets/customizedstrategies.svg";
import DiversificationMastery from "@/assets/diversificationmastery.svg";
import AbsBg from "@/assets/abs_unlock_bg.svg";
import Button from "@/components/ui/Button";

const SmartInvestment = () => {
  return (
    <div className="p-inline grid md:grid-cols-3 gap-4 mt-16">
      <SectionHeader
        sectionTitle="Smart Investments, Informed Decisions"
        description="Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions."
      />
      <ServiceValueCard
        image={MarkeInsight.src}
        title="Market Insight"
        description="Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions"
      />
      <ServiceValueCard
        image={RoiAssessment.src}
        title="ROI Assessment"
        description="Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments"
      />
      <ServiceValueCard
        image={CustomerStrategies.src}
        title="Customized Strategies"
        description="Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs"
      />
      <ServiceValueCard
        image={DiversificationMastery.src}
        title="Diversification Mastery"
        description="Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations"
      />

      <div
        style={{ backgroundImage: `url(${AbsBg.src})` }}
        className="flex md:col-start-1 md:row-start-2 bg-no-repeat bg-center border rounded-lg border-gray-15  flex-col justify-center gap-4 p-4 md:p-8 "
      >
        <h3 className="test-6 font-semibold text-white ">
          Unlock Your Investment Potential{" "}
        </h3>
        <p>
          Explore our Property Management Service categories and let us handle
          the complexities while you enjoy the benefits of property ownership.
        </p>
        <Button>Learn More</Button>
      </div>
    </div>
  );
};

export default SmartInvestment;
