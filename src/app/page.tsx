import { Metadata } from "next";
import HeroWrapper from "../components/herosection/HeroSection";
import Shop from "../components/shop/Shop";
import OurServicesSection from "@/components/ourservice/OurService";
import InstagramSection from "@/components/instagramsection/InstagramPost";
export const metadata: Metadata = {
  title: "Hyperce Home",
  description: "Hyperce Demo Ecommerce app",
};
export default function Home() {
  return (
    <main>
      <HeroWrapper />
      <Shop />
      <OurServicesSection/>
      <InstagramSection/>
    </main>
  );
}
