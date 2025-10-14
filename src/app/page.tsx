import Cta from "@/components/pages/shared/Cta";
import Faq from "@/components/pages/home/faq/Faq";
import FeaturedProperty from "@/components/pages/home/featuredproperty/FeaturedProperty";
import Hero from "@/components/pages/home/hero/Hero";
import Testimonial from "@/components/pages/home/testimonial/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProperty />
      <Testimonial />
      <Faq />
      <Cta />
    </div>
  );
}
