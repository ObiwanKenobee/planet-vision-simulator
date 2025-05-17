
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Flask, AtomIcon } from 'lucide-react';

const EnergyResearch: React.FC = () => {
  const researchProjects = [
    {
      title: "Cold Fusion Experiments",
      progress: 78,
      description: "Optimizing palladium electrode configurations for sustained reactions",
      lead: "Dr. Emma Chen",
      breakthroughPotential: "High"
    },
    {
      title: "Zero-Point Energy Extraction",
      progress: 42,
      description: "Quantum vacuum fluctuations as renewable energy source",
      lead: "Dr. Marcus Webb",
      breakthroughPotential: "Medium" 
    },
    {
      title: "LENR Catalyst Development",
      progress: 65,
      description: "Novel nano-structured catalysts for low energy nuclear reactions",
      lead: "Dr. Sophia Kim",
      breakthroughPotential: "Very High"
    },
    {
      title: "Quantum Harmonic Oscillators",
      progress: 31,
      description: "Harnessing quantum mechanical energy from oscillating systems",
      lead: "Dr. James Torres",
      breakthroughPotential: "Medium"
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Energy Research Acceleration</h1>
        <p className="text-muted-foreground">
          NEF-supported AI-enhanced laboratories optimizing research into breakthrough energy technologies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Flask className="mr-2 h-5 w-5 text-energy" />
              Research Velocity
            </CardTitle>
            <CardDescription>AI-accelerated experimental iterations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">10.3x</div>
            <p className="text-sm text-muted-foreground">Faster than traditional methods</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <AtomIcon className="mr-2 h-5 w-5 text-energy" />
              Energy Density Achieved
            </CardTitle>
            <CardDescription>Maximum output in prototype systems</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">4.7 MJ/cm³</div>
            <p className="text-sm text-muted-foreground">Compared to 0.01 MJ/cm³ baseline</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Active Research Projects</h2>
      <div className="space-y-6">
        {researchProjects.map((project, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle>{project.title}</CardTitle>
                <span className="text-sm font-medium px-2 py-1 bg-energy-light/20 text-energy rounded-md">
                  {project.breakthroughPotential} Potential
                </span>
              </div>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Research Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
                <div className="text-sm text-muted-foreground">
                  Lead Researcher: {project.lead}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EnergyResearch;
