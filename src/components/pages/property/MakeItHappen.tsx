import Button from "@/components/ui/Button";
import CustomSelect from "@/components/ui/CustomSelect";
import Input from "@/components/ui/Input";
import SectionHeader from "@/components/ui/SectionHeader";
import React from "react";

const MakeItHappen = () => {
  return (
    <div className="p-inline mt-8">
      <SectionHeader
        sectionTitle="Let's Make it Happen"
        description="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
      />

      <div className="border border-gray-15 mt-8 p-6 grid gap-4 sm:gap-y-6 sm:grid-cols-4">
        <Input placeholder="Enter First Name" label="First Name" />
        <Input placeholder="Enter Last Name" label="Last Name" />
        <Input placeholder="Enter Your Email" label="Email" />
        <Input placeholder="Enter Phone Number" label="Phone" />
        <CustomSelect label="Preferred Location" />
        <CustomSelect label="Property Type" />
        <CustomSelect label="No. of Bathrooms" />
        <CustomSelect label="No. of Bedrooms" />
        <CustomSelect label="Budget" wrapperClassName="sm:col-span-2" />
        <div className="grid gap-2 sm:col-span-2 ">
          <label htmlFor={"contact"}>Preferred Contact Method</label>
          <div className="grid gap-6 sm:grid-cols-2 ">
            <input
              className="border px-4 py-3 bg-gray-10 rounded-lg border-gray-15"
              placeholder="Enter Your Number"
              id={"contact"}
            />
            <input
              className="border px-4 py-3 bg-gray-10 rounded-lg border-gray-15 "
              placeholder="Enter Your email"
              id={"contact"}
            />
          </div>
        </div>
        <div className="grid gap-2 sm:col-span-4 ">
          <label htmlFor={"contact"}>Message</label>
          <textarea
            className="border h-40 px-4 py-3 bg-gray-10 rounded-lg border-gray-15"
            placeholder="Enter Your Message here."
          ></textarea>
        </div>
        <div className="grid gap-4 sm:flex justify-between items-center sm:col-span-4">
          <div className="flex gap-2 items-center">
            <input type="checkbox" />
            <p>
              I agree with <a href=""> Terms of Use</a> and{" "}
              <a href="">Privacy Polic</a> y
            </p>
          </div>
          <Button className="w-full sm:w-fit">Send Your Message</Button>
        </div>
      </div>
    </div>
  );
};

export default MakeItHappen;
