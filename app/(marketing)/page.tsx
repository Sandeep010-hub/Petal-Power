import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import BentoGrid from '@/components/BentoGrid';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <BentoGrid />
    </>
  );
}
