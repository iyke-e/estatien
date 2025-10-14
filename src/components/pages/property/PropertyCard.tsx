import React, { HTMLAttributes } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import ClampText from "@/components/utility/ClampText";

interface FeaturedPropertyCardProps extends HTMLAttributes<HTMLDivElement> {
  imgurl: string;
  name: string;
  description: string;
  quote?: string;
  price: number;
  propertyUrl: string;
}
const PropertyCard = ({
  imgurl,
  name,
  className,
  description,
  quote,
  price,
  propertyUrl,
}: FeaturedPropertyCardProps) => {
  return (
    <div
      className={`${className} w-full rounded-lg p-5 border space-y-4 border-gray-15`}
    >
      <div
        className="w-full h-60 rounded-lg bg-filled"
        style={{ backgroundImage: `url(${imgurl})` }}
      ></div>
      <p className="bg-gray-10 border border-gray-15 w-fit px-4 py-2 rounded-full">
        {quote}
      </p>
      <h3 className="text-xl">{name}</h3>

      <ClampText text={description} />

      <div className="flex-between ">
        <div>
          <p>Price</p>
          <h3>${price}</h3>
        </div>
        <Link href={propertyUrl}>
          <Button>View Property Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
