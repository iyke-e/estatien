import React from "react";
import AbsBg from "@/assets/abs_unlock_bg.svg";
import Image from "next/image";
import office1 from "@/assets/office1.png";
import office2 from "@/assets/office2.png";
import office3 from "@/assets/office3.png";
import office4 from "@/assets/office4.png";
import office5 from "@/assets/office5.png";
import office6 from "@/assets/office6.png";
import SectionHeader from "@/components/ui/SectionHeader";

const Gallery = () => {
  return (
    <div className="my-12 p-inline">
      <div
        style={{ backgroundImage: `url(${AbsBg.src})` }}
        className=" bg-no-repeat bg-cover bg-center border rounded-lg border-gray-15 grid grid-cols-2 sm:grid-cols-4 p-4 sm:p-12 gap-4 sm:gap-6 "
      >
        <Image className="col-span-2" src={office1} alt="office" />
        <Image className="col-span-2" src={office2} alt="office" />
        <Image className="col-span-2" src={office3} alt="office" />
        <Image src={office4} alt="office" />
        <Image src={office5} alt="office" />
        <Image className="col-span-2" src={office6} alt="office" />
        <div className="col-span-2 col-end-3 row-start-3 grid items-center">
          <SectionHeader
            sectionTitle="Explore Estatien World"
            description="Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better."
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
