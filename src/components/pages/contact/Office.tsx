import Button from "@/components/ui/Button";
import CardWrapper from "@/components/ui/CardWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { BiPhone } from "react-icons/bi";
import { BsMailbox } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { FaLocationPin } from "react-icons/fa6";

interface OfficeCardProp {
  officetype: string;
  location: string;
  officedescription: string;
  email: string;
  phone: string;
  city: string;
}

const OfficeCard = ({
  officetype,
  location,
  officedescription,
  email,
  phone,
  city,
}: OfficeCardProp) => {
  return (
    <div className="border border-gray-15 p-4 ms:p-8 rounded-lg ">
      <p className="text-white mb-2">{officetype}</p>
      <h3 className="mb-4">{location}</h3>
      <p>{officedescription}</p>
      <div className="flex mt-8 items-center gap-4 flex-wrap">
        <div className="flex px-4 py-2  gap-2 items-center bg-gray-15 rounded-full">
          <CgMail />
          {email}
        </div>
        <div className="flex px-4 py-2  gap-2 items-center bg-gray-15 rounded-full">
          <BiPhone />
          {phone}
        </div>
        <div className="flex px-4 py-2  gap-2 items-center bg-gray-15 rounded-full">
          <FaLocationPin />
          {city}
        </div>
      </div>
      <Button className="w-full mt-8">Get Direction</Button>
    </div>
  );
};

const Office = () => {
  return (
    <div className="p-inline mt-20">
      <SectionHeader
        sectionTitle="Discover Our Office Locations"
        description="Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you"
      />

      <div className="grid mt-8 grid-cols-3 gap-2 items-center bg-gray-15 p-2 w-fit rounded-lg">
        <div className="px-4 py-3 grid place-content-center border border-white/10  rounded-md bg-bg">
          ALL
        </div>
        <div className="px-4 py-3  grid place-content-center border border-white/10  rounded-md ">
          Regional
        </div>
        <div className="px-4 py-3  grid place-content-center border border-white/10 rounded-md ">
          International{" "}
        </div>
      </div>

      <div className={"grid sm:grid-cols-2 items-center gap-4 mt-8"}>
        <OfficeCard
          officetype="Main Headquarters"
          location="123 Estatein Plaza, City Center, Metropolis"
          officedescription="Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us."
          email="info@estatein.com"
          phone="+1 (123) 456-7890"
          city="Metropolis"
        />
        <OfficeCard
          officetype="Main Headquarters"
          location="123 Estatein Plaza, City Center, Metropolis"
          officedescription="Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us."
          email="info@estatein.com"
          phone="+1 (123) 456-7890"
          city="Metropolis"
        />
      </div>
    </div>
  );
};

export default Office;
