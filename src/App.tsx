import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import IntegrationsGrid from './components/IntegrationsGrid';
import ComparisonTable from './components/ComparisonTable';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Contact from './components/Contact';
import WhatsAppStyle from './components/ChatBot/WhatsAppStyle';
import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Benefits />
        <Features />
        <IntegrationsGrid />
        <ComparisonTable />
        <Pricing />
        <Team />
        <Contact />
        <WhatsAppStyle />
      </main>
    </div>
  );
}

export default App;