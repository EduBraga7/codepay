import Navbar from '@/app/_components/navbar';
import Hero from '@/app/_components/hero';
import PortfolioMockup from '@/app/_components/portfolio-mockup';
import Features from '@/app/_components/features';
import InvestmentSimulator from '@/app/_components/investment-simulator';
import CTASection from '@/app/_components/cta-section';
import Footer from '@/app/_components/footer';

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
