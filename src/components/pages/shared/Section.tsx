import React, { ReactNode } from "react";
import sectionstar from "@/assets/sectionstar.svg";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

type SectionProp = {
  sectionTitle?: string;
  description?: string;
  cta?: string;
  children: ReactNode;
  swiperRef?: any;
  currentIndex?: number;
  totalSlides?: number;
};

const Section = ({
  sectionTitle,
  description,
  cta,
  children,
  swiperRef,
  currentIndex = 1,
  totalSlides = 1,
}: SectionProp) => {
  return (
    <div>
      <div className="flex items-end  justify-between gap-20">
        <div className="max-w-[975px]">
          <Image src={sectionstar} alt="section star" />
          <h2 className="mb-2">{sectionTitle}</h2>
          <p className="max-w-[1020]">{description}</p>
        </div>

        {cta && (
          <div className="hidden md:block">
            <Link href={"/"}>
              <Button btntype="black">{cta}</Button>
            </Link>
          </div>
        )}
      </div>

      <div className="my-10">{children}</div>

      <div className="border-t border-gray-15 py-4 flex-between md:block">
        <Link className="md:hidden" href={"/"}>
          <Button btntype="black">{cta}</Button>
        </Link>

        <div className="flex-between">
          <div className="hidden md:block">
            {String(currentIndex).padStart(2, "0")} of{" "}
            {String(totalSlides).padStart(2, "0")}
          </div>

          <div className="flex items-center gap-4">
            <div
              className="bg-gray-15 square-8 grid-center rounded-full cursor-pointer"
              onClick={() => {
                swiperRef?.current?.slidePrev(),
                  console.log(swiperRef.current.slidePrev());
              }}
            >
              <GoArrowLeft />
            </div>

            <div className="md:hidden">
              {String(currentIndex).padStart(2, "0")} of {totalSlides}
            </div>

            <div
              className="bg-gray-15 square-8 grid-center rounded-full cursor-pointer"
              onClick={() => swiperRef?.current?.slideNext()}
            >
              <GoArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
