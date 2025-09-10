import SectionHeader from "@/components/ui/SectionHeader";

type NavigatingCardProp = {
  step: number;
  title: string;
  subtext: string;
};

const NavigatingCard = ({ step, title, subtext }: NavigatingCardProp) => {
  return (
    <div>
      <div className="border-l border-[#703BF7] p-4">
        <h5>Step {String(step).padStart(2, "0")}</h5>
      </div>
      <div className=" bg-gradient-to-br from-[#703BF7] via-[#262626] to-[#262626] p-[1px] !rounded-r-xl !rounded-bl-xl">
        <div className="bg-gradient-to-br from-[#241B3C] via-black to-black   !rounded-r-xl p-8 !rounded-bl-xl">
          <h3> {title}</h3>
          <p>{subtext}</p>
        </div>
      </div>
    </div>
  );
};

const Navigating = () => {
  return (
    <div className="p-inline mt-24">
      <SectionHeader
        sectionTitle="Navigating the Estatein Experience"
        description="At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
      />

      <div className="grid grid-cols-3 mt-12 gap-8">
        <NavigatingCard
          step={1}
          title="Discover a World of possibilities"
          subtext={
            "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget."
          }
        />
        <NavigatingCard
          step={2}
          title="Narrowing Down Your Choices"
          subtext={
            "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision."
          }
        />
        <NavigatingCard
          step={3}
          title="Personalized Guidance"
          subtext={
            "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away."
          }
        />
        <NavigatingCard
          step={4}
          title="See It for Yourself"
          subtext={
            "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home."
          }
        />
        <NavigatingCard
          step={5}
          title="Making Informed Decisions"
          subtext={
            "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice."
          }
        />
        <NavigatingCard
          step={6}
          title="Getting the Best Deal"
          subtext={
            "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms."
          }
        />
      </div>
    </div>
  );
};

export default Navigating;
