import SectionHeader from "@/components/ui/SectionHeader";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import max from "@/assets/ma.png";
import sarah from "@/assets/sarah.png";
import david from "@/assets/david.png";
import laurel from "@/assets/turner.png";

type TeamCardProp = {
  bgImg: string;
  name: string;
  role: string;
};

const TeamCard = ({ bgImg, name, role }: TeamCardProp) => (
  <div className="w-full border border-gray-15 p-4 rounded-2xl text-center">
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className={
        "bg-no-re peat bg-gray-400 aspect-[5/4] mb-10 bg-cover rounded-2xl  bg-top relative"
      }
    >
      <div className="w-fit px-8 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 py-3 rounded-full bg-purple-60  ">
        <FaTwitter />
      </div>
    </div>

    <h3 className={"mb-2"}>{name}</h3>
    <p>{role}</p>

    <div>
      <button
        className={
          "flex mt-6 justify-between px-3 py-2 w-full border border-gray-15 rounded-full items-center"
        }
      >
        <span>Say Hello 👋 </span>
        <div
          className={
            "w-10 h-10 grid bg-purple-60 place-content-center rounded-full "
          }
        >
          <IoIosSend />
        </div>
      </button>
    </div>
  </div>
);

const Team = () => {
  return (
    <div className="p-inline mt-24">
      <SectionHeader
        sectionTitle="Meet the Estatein Team"
        description="At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 ">
        <TeamCard name="Max Mitchell" role="Founder" bgImg={max.src} />
        <TeamCard
          name="Sarah Johnson"
          role="Chief Real Estate Officer"
          bgImg={sarah.src}
        />
        <TeamCard
          name="David Brown"
          role="Head of Property Management"
          bgImg={david.src}
        />
        <TeamCard
          name="Laurel Turner"
          role="Legal Counsel"
          bgImg={laurel.src}
        />
      </div>
    </div>
  );
};

export default Team;
