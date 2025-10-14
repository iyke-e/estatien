import Image from "next/image";
import CardWrapper from "@/components/ui/CardWrapper";
import trust from "@/assets/trust.svg";
import excellence from "@/assets/excellence.svg";
import clinic from "@/assets/clientclinic.svg";
import committment from "@/assets/commitment.svg";
import SectionHeader from "@/components/ui/SectionHeader";

const Values = () => {
  return (
    <div className="grid gap-12 lg:grid-cols-[4fr_5fr] items-center p-inline mt-16">
      <SectionHeader
        sectionTitle="Our Values"
        description={`Our values form the foundation of everything we do. Built on trust, we foster lasting relationships with our clients and partners. We are committed to delivering excellence in every project, ensuring that quality and attention to detail define our work. By staying client-centric, we listen, understand, and design solutions that truly meet unique needs. And through unwavering commitment, we go the extra mile to turn goals into lasting success.`}
      />

      <div className="">
        <CardWrapper className="p-8 grid grid-cols-2 shadow-[0_0_14px_rgba(255,255,255,0.2)]">
          <div className="pb-4 pr-4">
            <div className="flex items-center gap-4">
              <Image src={trust} alt="" width={24} height={24} />
              <h4 className={"text-lg font-semi-bold"}>Trust</h4>
            </div>
            <p className="mt-4">
              Trust is the cornerstone of every successful real estate
              transaction.
            </p>
          </div>
          <div className=" pb-6">
            <div className="border-l pl-8 border-gray-15">
              <div className="flex items-center gap-4">
                <Image src={excellence} alt="" width={24} height={24} />
                <h4 className={"text-lg font-semi-bold"}>Excellence</h4>
              </div>
              <p className="mt-4">
                We set the bar high for ourselves. From the properties we list
                to the services we provide.
              </p>
            </div>
          </div>
          <div className="pr-4 pt-6 border-t border-gray-15">
            <div className="flex items-center gap-4">
              <Image src={clinic} alt="" width={24} height={24} />
              <h4 className={"text-lg font-semi-bold"}>Client-Centric</h4>
            </div>
            <p className="mt-4">
              Your dreams and needs are at the center of our universe. We
              listen, understand.
            </p>
          </div>
          <div className=" pt-6 border-t border-gray-15">
            <div className="border-l pl-8 border-gray-15">
              <div className="flex items-center gap-4">
                <Image src={committment} alt="" width={24} height={24} />
                <h4 className={"text-lg font-semi-bold"}>Our Commitment</h4>
              </div>
              <p className="mt-4">
                We are dedicated to providing you with the highest level of
                service, professionalism, and support.
              </p>
            </div>
          </div>
        </CardWrapper>
      </div>
    </div>
  );
};

export default Values;
