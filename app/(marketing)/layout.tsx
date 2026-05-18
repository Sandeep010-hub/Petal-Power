import { AppContextProvider } from '@/context/AppContext';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import NoiseOverlay from '@/components/NoiseOverlay';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppContextProvider>
      <div className="w-full min-h-screen relative overflow-x-hidden bg-brand-cream pb-8">
        <NoiseOverlay />
        <Navbar />
        {children}
        <FooterSection />
      </div>
    </AppContextProvider>
  );
}
