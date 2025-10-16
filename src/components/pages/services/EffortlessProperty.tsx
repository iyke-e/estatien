import SectionHeader from "@/components/ui/SectionHeader";
import React from "react";
import ServiceValueCard from "./ServiceValueCard";
import TenantHarmony from "@/assets/tenantharmony.svg";
import Maintenance from "@/assets/maintenace.svg";
import FinancialPeace from "@/assets/financialpeace.svg";
import LegalGurdian from "@/assets/legalguardian.svg";
import AbsBg from "@/assets/abs_unlock_bg.svg";

const EffortlessProperty = () => {
  return (
    <div className="p-inline mt-12">
      <SectionHeader
        sectionTitle="Effortless Property Management"
        description="Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you"
      />

      <div className="grid md:grid-cols-3 gap-4 mt-10">
        <ServiceValueCard
          image={TenantHarmony.src}
          title="Tenant Harmony"
          description="Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies."
        />
        <ServiceValueCard
          image={Maintenance.src}
          title="Maintenance Ease"
          description="Say goodbye to property maintenance headaches. We handle all aspects of property upkeep."
        />
        <ServiceValueCard
          image={FinancialPeace.src}
          title="Financial Peace of Mind"
          description="Managing property finances can be complex. Our financial experts take care of rent collection"
        />
        <ServiceValueCard
          image={LegalGurdian.src}
          title="Legal Guardian"
          description="Stay compliant with property laws and regulations effortlessly."
        />
        <div
          style={{ backgroundImage: `url(${AbsBg.src})` }}
          className="flex bg-no-repeat bg-center border rounded-lg border-gray-15  flex-col justify-center gap-4 p-4 md:p-8 md:col-span-2"
        >
          <h3 className="test-6 font-semibold text-white ">
            Experience Effortless Property Management
          </h3>
          <p>
            Ready to experience hassle-free property management? Explore our
            Property Management Service categories and let us handle the
            complexities while you enjoy the benefits of property ownership.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EffortlessProperty;
