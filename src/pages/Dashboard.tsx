
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CloudLightning, Droplets, Leaf, Users, FileText, Globe, ArrowDown, ArrowUp } from 'lucide-react';

import ModuleCard from '@/components/ModuleCard';
import GlobalMap from '@/components/GlobalMap';
import StatsCard from '@/components/StatsCard';
import TimelineProgress from '@/components/TimelineProgress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const chartData = [
  { year: '2025', carbon: 40, energy: 24, cleanup: 10 },
  { year: '2030', carbon: 30, energy: 43, cleanup: 25 },
  { year: '2035', carbon: 20, energy: 65, cleanup: 45 },
  { year: '2040', carbon: 8, energy: 80, cleanup: 70 },
  { year: '2045', carbon: 3, energy: 92, cleanup: 85 },
  { year: '2050', carbon: 0, energy: 100, cleanup: 95 },
];

const Dashboard: React.FC = () => {
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentYear((prev) => (prev < 2050 ? prev + 1 : 2025));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const modules = [
    {
      title: "Energy Research",
      description: "AI-enhanced laboratories optimizing clean energy development",
      icon: <CloudLightning className="h-5 w-5 text-energy" />,
      color: "energy",
      progress: 65,
    },
    {
      title: "Ocean Cleanup",
      description: "Autonomous fleets removing ocean plastics and toxins",
      icon: <Droplets className="h-5 w-5 text-ocean" />,
      color: "ocean",
      progress: 78,
    },
    {
      title: "Climate Action",
      description: "Global net-zero carbon transition strategy",
      icon: <Leaf className="h-5 w-5 text-forest" />,
      color: "forest",
      progress: 42,
    },
    {
      title: "Communities",
      description: "Decentralized energy kits and education tools",
      icon: <Users className="h-5 w-5 text-energy" />,
      color: "energy",
      progress: 59,
    },
    {
      title: "Validation",
      description: "Scientific validation and ethical governance",
      icon: <FileText className="h-5 w-5 text-ocean" />,
      color: "ocean",
      progress: 83,
    },
    {
      title: "Global Impact",
      description: "Real-time planetary simulation environment",
      icon: <Globe className="h-5 w-5 text-forest" />,
      color: "forest",
      progress: 71,
    },
  ];

  const stats = [
    {
      title: "Carbon Reduction",
      value: "63.8%",
      description: "From 2024 levels",
      icon: <Leaf className="h-4 w-4" />,
      color: "forest",
      trend: { value: 12.4, isPositive: true },
    },
    {
      title: "Clean Energy",
      value: "82.3%",
      description: "Global grid penetration",
      icon: <CloudLightning className="h-4 w-4" />,
      color: "energy",
      trend: { value: 8.7, isPositive: true },
    },
    {
      title: "Ocean Plastic",
      value: "47.5%",
      description: "Reduction from peak",
      icon: <Droplets className="h-4 w-4" />,
      color: "ocean",
      trend: { value: 15.2, isPositive: true },
    },
  ];

  const milestones = [
    { year: 2025, label: "Launch", completed: true },
    { year: 2030, label: "50% Reduction", completed: false },
    { year: 2040, label: "Net Zero", completed: false },
    { year: 2050, label: "Regeneration", completed: false },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            description={stat.description}
            icon={stat.icon}
            color={stat.color}
            trend={stat.trend}
          />
        ))}
      </div>

      <div className="rounded-lg border bg-card">
        <div className="p-6">
          <h3 className="text-lg font-medium mb-4">Progress Towards Net Zero</h3>
          <TimelineProgress
            currentYear={currentYear}
            startYear={2025}
            endYear={2050}
            milestones={milestones}
            className="mb-6"
          />
          <Tabs defaultValue="trends">
            <TabsList className="mb-4">
              <TabsTrigger value="trends">Trends</TabsTrigger>
              <TabsTrigger value="projections">Projections</TabsTrigger>
              <TabsTrigger value="impact">Impact</TabsTrigger>
            </TabsList>
            <TabsContent value="trends" className="pt-2">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="year" />
                    <YAxis unit="%" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="carbon"
                      name="Carbon Emissions"
                      stroke="#ef4444"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="energy"
                      name="Clean Energy"
                      stroke="#9B87F5"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="cleanup"
                      name="Ocean Cleanup"
                      stroke="#0EA5E9"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            <TabsContent value="projections">
              <p className="text-muted-foreground">
                Detailed projections for climate, energy and social impact metrics through 2050.
              </p>
            </TabsContent>
            <TabsContent value="impact">
              <p className="text-muted-foreground">
                Comprehensive impact assessment across environmental, social and economic dimensions.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((module, index) => (
              <ModuleCard
                key={index}
                title={module.title}
                description={module.description}
                icon={module.icon}
                color={module.color}
                progress={module.progress}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="rounded-lg overflow-hidden border bg-card h-full">
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">Global Implementation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Real-time monitoring of NEF initiatives worldwide
              </p>
            </div>
            <GlobalMap className="h-[400px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
