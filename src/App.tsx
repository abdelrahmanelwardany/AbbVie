import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhoIsEbers from '@/components/WhoIsEbers';
import StatementOfNeed from '@/components/StatementOfNeed';
import Objective from '@/components/Objective';
import ActivationIdeas from '@/components/ActivationIdeas';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-light">
      <Header />

      <main>
        <Hero />
        <WhoIsEbers />
        <StatementOfNeed />
        <Objective />

        <ActivationIdeas />

        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}

export default App;
