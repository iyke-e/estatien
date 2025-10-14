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

const PropertyHero = () => {
  return (
    <div>
      <div className="py-12 lg:p-25 bg-gradient-to-r from-[#262626] via-transparent to-transparent p-inline border border-gray-15">
        <h1>Find Your Dream Property</h1>
        <p className="mt-4 max-w-[1024px]">
          Welcome to Estatein, where your dream property awaits in every corner
          of our beautiful world. Explore our curated selection of properties,
          each offering a unique story and a chance to redefine your life. With
          categories to suit every dreamer, your journey{" "}
        </p>
      </div>

      <div className=" p-inline mt-8  sm:-mt-10 relative">
        <div className="p-2 sm:px-2 sm:pt-2 rounded-2xl sm:rounded-b-none bg-gray-15 sm:mx-8">
          <div className="flex items-center gap-2 rounded-xl bg-bg px-4 py-2 ">
            <input
              className="pr-4 py-2 w-full"
              type="search"
              placeholder="Search for a Property"
            />
            <Button>
              <FaSearch />
            </Button>
          </div>
        </div>

        <div className="grid gap-4 bg-gray-15 p-4 mt-4 sm:mt-0 sm:grid sm:grid-cols-5 sm:gap-4">
          {filterlist.map((item, index) => (
            <FilterTab key={index} icon={item.icon} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyHero;
