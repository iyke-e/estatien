import Button from "@/components/ui/Button";
import CustomSelect from "@/components/ui/CustomSelect";
import Input from "@/components/ui/Input";
import SectionHeader from "@/components/ui/SectionHeader";
import React from "react";

const Letsconnect = () => {
  return (
    <div className="p-inline mt-8">
      <SectionHeader
        sectionTitle="Let's Connect"
        description="We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need."
      />

      <div className="border border-gray-15 mt-8 p-6 grid gap-4 sm:gap-y-6 sm:grid-cols-3">
        <Input placeholder="Enter First Name" label="First Name" />
        <Input placeholder="Enter Last Name" label="Last Name" />
        <Input placeholder="Enter Your Email" label="Email" />
        <Input placeholder="Enter Phone Number" label="Phone" />{" "}
        <CustomSelect label="Inquiry Type" />
        <CustomSelect label="How Did You Hear About Us?" />
        <div className="grid gap-2 sm:col-span-3 ">
          <label htmlFor={"contact"}>Message</label>
          <textarea
            className="border h-40 px-4 py-3 bg-gray-10 rounded-lg border-gray-15"
            placeholder="Enter Your Message here."
          ></textarea>
        </div>
        <div className="grid gap-4 sm:flex justify-between items-center sm:col-span-3">
          <div className="flex gap-2 items-center"></div>
          <Button className="w-full sm:w-fit">Send Your Message</Button>
        </div>
      </div>
    </div>
  );
};

export default Letsconnect;
