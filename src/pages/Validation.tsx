
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Check, FileCheck } from 'lucide-react';

const Validation: React.FC = () => {
  const validationStatistics = [
    { label: "Papers Validated", value: "12,847" },
    { label: "Consensus Score", value: "92.4%" },
    { label: "Peer Reviews", value: "51,388" },
    { label: "Successful Replications", value: "2,156" },
  ];

  const recentBreakthroughs = [
    {
      title: "Plasma Containment Breakthrough",
      consensus: 96,
      journal: "Advanced Energy Research",
      researchers: "Chen, Smith, Okonkwo",
      date: "2025-03-12",
      status: "Validated"
    },
    {
      title: "Zero-Point Energy Extraction Method",
      consensus: 89,
      journal: "Quantum Physics Today",
      researchers: "Patel, Garcia, Johnson",
      date: "2025-02-28",
      status: "Validation in Progress"
    },
    {
      title: "Nanomaterial Catalytic Converter",
      consensus: 94,
      journal: "Nature Materials",
      researchers: "Wong, Fischer, Nakamura",
      date: "2025-01-17",
      status: "Validated"
    },
    {
      title: "Room Temperature Superconductor",
      consensus: 91,
      journal: "Science Advances",
      researchers: "Kim, Martinez, Taylor",
      date: "2025-04-03",
      status: "Validation in Progress"
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Scientific Validation & Ethical Governance</h1>
        <p className="text-muted-foreground">
          Peer-review engines and open-science verifiers driven by AI consensus models
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {validationStatistics.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="pb-2 pt-4">
              <CardDescription>{stat.label}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileCheck className="mr-2 h-5 w-5 text-energy" />
            Validation Transparency
          </CardTitle>
          <CardDescription>
            Scientific claims validation with full transparency and reproducibility
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Open Access Papers</div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">100%</span>
                  <span className="text-sm text-muted-foreground ml-2">of NEF research</span>
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Data Availability</div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">100%</span>
                  <span className="text-sm text-muted-foreground ml-2">with open datasets</span>
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Code Transparency</div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">100%</span>
                  <span className="text-sm text-muted-foreground ml-2">open-source models</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-semibold mb-4">Recent Breakthrough Validations</h2>
      <div className="space-y-4">
        {recentBreakthroughs.map((item, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle>{item.title}</CardTitle>
                <span className={`text-sm font-medium px-2 py-1 rounded-md ${
                  item.status === "Validated" 
                    ? "bg-energy-light/20 text-energy" 
                    : "bg-secondary text-muted-foreground"
                }`}>
                  {item.status}
                </span>
              </div>
              <CardDescription>{item.journal} • {new Date(item.date).toLocaleDateString()}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Scientific Consensus</span>
                    <span className="font-medium">{item.consensus}%</span>
                  </div>
                  <Progress value={item.consensus} className="h-2" />
                </div>
                <div className="text-sm">
                  <span className="text-muted-foreground">Researchers:</span>
                  <span className="ml-2">{item.researchers}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Validation;
