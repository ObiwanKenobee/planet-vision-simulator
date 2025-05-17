
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Leaf, CloudSun } from 'lucide-react';
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Legend, Tooltip } from 'recharts';

const ClimateModels: React.FC = () => {
  const emissionData = [
    { year: 2020, baseline: 36.5, projected: 36.5 },
    { year: 2025, baseline: 38.1, projected: 31.2 },
    { year: 2030, baseline: 40.3, projected: 22.7 },
    { year: 2035, baseline: 42.4, projected: 14.3 },
    { year: 2040, baseline: 44.1, projected: 7.1 },
    { year: 2045, baseline: 46.2, projected: 2.8 },
    { year: 2050, baseline: 48.5, projected: 0.5 }
  ];

  const config = {
    baseline: {
      label: "Baseline Scenario",
      theme: {
        light: "#ef4444",
        dark: "#ef4444"
      }
    },
    projected: {
      label: "NEF+AI Scenario",
      theme: {
        light: "#22c55e",
        dark: "#22c55e"
      }
    }
  };

  const targetRegions = [
    {
      name: "North America",
      carbonReduction: 78,
      renewableIncrease: 92,
      keyTechnologies: "Fusion, AI Grid Optimization"
    },
    {
      name: "Europe",
      carbonReduction: 85,
      renewableIncrease: 95,
      keyTechnologies: "LENR, Smart Microgrids"
    },
    {
      name: "Asia Pacific",
      carbonReduction: 71,
      renewableIncrease: 88,
      keyTechnologies: "Zero-point Energy, Quantum Batteries"
    },
    {
      name: "Africa",
      carbonReduction: 68,
      renewableIncrease: 96,
      keyTechnologies: "Decentralized Fusion, Community Grids"
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Climate Change & Net-Zero Modeling</h1>
        <p className="text-muted-foreground">
          Simulating transition to net-zero carbon using advanced energy and AI-optimized distribution
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Leaf className="mr-2 h-5 w-5 text-energy" />
              Global Carbon Status
            </CardTitle>
            <CardDescription>Path to carbon neutrality</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Progress to Net-Zero</span>
                <span className="font-medium">72%</span>
              </div>
              <Progress value={72} className="h-3" />
              <p className="text-sm text-muted-foreground">
                Projected to reach net-zero by 2040
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <CloudSun className="mr-2 h-5 w-5 text-energy" />
              Current Deployment
            </CardTitle>
            <CardDescription>NEF energy technologies in the field</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-bold">3,412</div>
                <p className="text-sm text-muted-foreground">AI grid nodes</p>
              </div>
              <div>
                <div className="text-2xl font-bold">241</div>
                <p className="text-sm text-muted-foreground">Fusion plants</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Global CO₂ Emissions Forecast</CardTitle>
          <CardDescription>
            Gigatons of CO₂ per year under baseline vs NEF+AI scenarios
          </CardDescription>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ChartContainer config={config}>
            <LineChart data={emissionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis label={{ value: 'Gt CO₂', position: 'insideLeft', angle: -90, dy: 50 }} />
              <Tooltip content={(props) => <ChartTooltipContent {...props} />} />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="baseline" 
                name="baseline" 
                stroke="var(--color-baseline)" 
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="projected" 
                name="projected"
                stroke="var(--color-projected)" 
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-semibold mb-4">Regional Transition Progress</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {targetRegions.map((region, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle>{region.name}</CardTitle>
              <CardDescription>Key tech: {region.keyTechnologies}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Carbon Reduction</span>
                    <span className="font-medium">{region.carbonReduction}%</span>
                  </div>
                  <Progress value={region.carbonReduction} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Renewable Adoption</span>
                    <span className="font-medium">{region.renewableIncrease}%</span>
                  </div>
                  <Progress value={region.renewableIncrease} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ClimateModels;
