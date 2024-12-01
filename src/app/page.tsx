import HeroWrapper from "./_Components/HeroSection/HeroWrapper";
import Footer from "./_Components/Footer/Footer";
import ShopByCategory from "./_Components/ShopByCategory/Base";

export default function Home() {
  return (
    <main>
      <HeroWrapper />
      <ShopByCategory />
      <Footer />
    </main>
  );
}
