import QuickCards from "@/components/pages/home/hero/QuickCards";
import EffortlessProperty from "@/components/pages/services/EffortlessProperty";
import ServicesHero from "@/components/pages/services/ServicesHero";
import SmartInvestment from "@/components/pages/services/SmartInvestment";
import UnlockValue from "@/components/pages/services/UnlockValue";
import Cta from "@/components/pages/shared/Cta";

const Services = () => {
  return (
    <div>
      <ServicesHero />
      <QuickCards />
      <UnlockValue />
      <EffortlessProperty />
      <SmartInvestment />
      <Cta />
    </div>
  );
};

export default Services;
