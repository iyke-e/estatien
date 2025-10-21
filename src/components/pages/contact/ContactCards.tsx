import Image from "next/image";
import Link from "next/link";
import React from "react";
import email from "@/assets/email.svg";
import phone from "@/assets/phone.svg";
import location from "@/assets/location.svg";
import socials from "@/assets/socials.svg";
import { GoArrowUpRight } from "react-icons/go";

type CardProp = {
  imgurl: string;
  linkUrl: string;
  description: string;
};
const Card = ({ imgurl, description, linkUrl }: CardProp) => {
  return (
    <Link
      className="flex-center relative gap-3 bg-gray-10 rounded-xl px-4 py-7 flex-col text-center "
      href={linkUrl}
    >
      <GoArrowUpRight className="absolute square-7 text-white/50 z-25 top-4 right-4" />
      <Image src={imgurl} alt={""} width={60} height={60} />
      <p className="text-white">{description}</p>
    </Link>
  );
};

const ContactCards = () => {
  return (
    <div className="grid gap-2.5 p-inline grid-cols-2 mt-10 md:mt-8 lg:mt-4  lg:grid-cols-4">
      <Card description="info@estatein.com" linkUrl="/" imgurl={email} />
      <Card description="+1 (123) 456-7890" linkUrl="/" imgurl={phone} />
      <Card description="Main Headquarters" linkUrl="/" imgurl={location} />
      <Card
        description="Instagram Linkedin Facebook"
        linkUrl="/"
        imgurl={socials}
      />
    </div>
  );
};

export default ContactCards;
