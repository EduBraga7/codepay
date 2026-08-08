import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PortfolioMockup from '@/components/PortfolioMockup';
import Features from '@/components/Features';
import InvestmentSimulator from '@/components/InvestmentSimulator';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />
      <Hero />
      <PortfolioMockup />
      <Features />
      <InvestmentSimulator />
      <CTASection />
      <Footer />
    </main>
  );
}
