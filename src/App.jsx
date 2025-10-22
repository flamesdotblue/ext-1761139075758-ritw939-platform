import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import CodeGenerator from './components/CodeGenerator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
      <Hero />
      <main>
        <FeatureGrid />
        <CodeGenerator />
      </main>
      <Footer />
    </div>
  );
}

export default App;
