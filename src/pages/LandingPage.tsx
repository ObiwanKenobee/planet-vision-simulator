
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Feature = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: string; 
  title: string; 
  description: string 
}) => {
  return (
    <div className="p-6 rounded-md border border-gray-700 bg-background/80 backdrop-blur-sm shadow-md hover:scale-105 transition duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground mt-2">{description}</p>
    </div>
  );
};

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-24 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          🌍 NEF + AI for a Sustainable Future
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-8">
          Simulate the future. Discover new energy. Clean our oceans. Restore balance — powered by next-gen AI.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/auth">
            <Button size="lg" className="bg-energy hover:bg-energy-dark text-white">
              🔐 Access Dashboard
            </Button>
          </Link>
          <a href="#mission" className="text-energy-light hover:text-energy hover:underline font-medium px-6 py-3">
            Learn More
          </a>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="bg-background/20 backdrop-blur-sm py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">🔬 Mission of the NEF</h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          The New Energy Foundation supports research into cold fusion, zero-point energy, and other paradigm-shifting technologies. 
          Partnering with AI enables a world where climate recovery, ocean healing, and community empowerment become reality.
        </p>
      </section>

      {/* Features */}
      <section className="py-16 px-6 container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <Feature 
            icon="⚡" 
            title="New Energy Simulations" 
            description="Model cold fusion, LENR, and vacuum energy with AI-enhanced physics engines." 
          />
          <Feature 
            icon="🌊" 
            title="Ocean Cleanup AI" 
            description="Orchestrate robotic fleets and AI detection systems to restore marine ecosystems." 
          />
          <Feature 
            icon="📊" 
            title="Climate Dashboards" 
            description="Live simulation models to monitor energy transition and policy impact." 
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f2027] py-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} New Energy Foundation · Powered by AI + Advanced Energy Analytics
      </footer>
    </div>
  );
};

export default LandingPage;
