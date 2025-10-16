import Button from "@/components/ui/Button";
import { FaCalendarAlt, FaSearch } from "react-icons/fa";
import { FaLocationDot, FaMoneyBill1Wave } from "react-icons/fa6";
import { GiCube, GiFamilyHouse } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { ReactNode } from "react";
const filterlist = [
  {
    icon: <FaLocationDot />,
    title: "Location",
  },
  {
    icon: <GiFamilyHouse />,
    title: "Property Type",
  },
  {
    icon: <FaMoneyBill1Wave />,
    title: "Pricing Range",
  },
  {
    icon: <GiCube />,
    title: "Property Size",
  },
  {
    icon: <FaCalendarAlt />,
    title: "Build Year",
  },
];

type filterTabProp = {
  icon: ReactNode;
  title: string;
};

const FilterTab = ({ icon, title }: filterTabProp) => {
  return (
    <div className="flex-between bg-gray-80 p-4">
      <div className="flex items-center gap-2">
        <span>{icon}</span>
        <span>
          {" "}
          <span className="text-gray-15">|</span> {title}
        </span>
      </div>
      <div className="rounded-full grid place-content-center h-8 w-8 bg-gray-15">
        <IoIosArrowDown />
      </div>
    </div>
  );
};

const ServicesHero = () => {
  return (
    <div>
      <div className="py-12 lg:p-25 bg-gradient-to-r from-[#262626] via-transparent to-transparent p-inline border border-gray-15">
        <h1>Elevate Your Real Estate Experience</h1>
        <p className="mt-4 max-w-[1024px]">
          Welcome to Estatein, where your real estate aspirations meet expert
          guidance. Explore our comprehensive range of services, each designed
          to cater to your unique needs and dreams.
        </p>
      </div>
    </div>
  );
};

export default ServicesHero;
