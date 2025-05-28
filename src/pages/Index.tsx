
import Header from '@/components/Layout/Header';
import HeroSection from '@/components/Home/HeroSection';
import ProductCatalog from '@/components/Products/ProductCatalog';
import TrendAnalytics from '@/components/Analytics/TrendAnalytics';
import AIAssistant from '@/components/AI/AIAssistant';
import FloatingParticles from '@/components/Effects/FloatingParticles';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingParticles />
      <Header />
      <main className="pt-20">
        <HeroSection />
        <ProductCatalog />
        <TrendAnalytics />
      </main>
      <AIAssistant />
    </div>
  );
};

export default Index;
