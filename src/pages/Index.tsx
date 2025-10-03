import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductDemo from '@/components/ProductDemo';
import WhatIsRun from '@/components/WhatIsRun';
import Architecture from '@/components/Architecture';
import TrustedBy from '@/components/TrustedBy';
import UseCases from '@/components/UseCases';
import APISection from '@/components/APISection';
import Roadmap from '@/components/Roadmap';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        <HeroSection />
        <ProductDemo />
        <WhatIsRun />
        <Architecture />
        <TrustedBy />
        <UseCases />
        <APISection />
        <Roadmap />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
