import React from "react";
import sectionstar from "@/assets/sectionstar.svg";
import Image from "next/image";

const SectionHeader = ({
  sectionTitle,
  description,
}: {
  sectionTitle: string;
  description: string;
}) => {
  return (
    <div className="max-w-[975px]">
      <Image src={sectionstar} alt="section star" />
      <h2 className="mb-2">{sectionTitle}</h2>
      <p className="max-w-[1020]">{description}</p>
    </div>
  );
};

export default SectionHeader;
