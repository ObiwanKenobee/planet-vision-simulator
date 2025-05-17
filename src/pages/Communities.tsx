
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Users } from 'lucide-react';

const Communities: React.FC = () => {
  const communityProjects = [
    {
      name: "Rural Electrification - East Africa",
      peopleServed: 2.4,
      energyKits: 42000,
      progress: 76,
      educationCoursesCompleted: 18500
    },
    {
      name: "Island Microgrids - Southeast Asia",
      peopleServed: 1.7,
      energyKits: 28000,
      progress: 82,
      educationCoursesCompleted: 15200
    },
    {
      name: "Urban Energy Access - South America",
      peopleServed: 3.1,
      energyKits: 56000,
      progress: 65,
      educationCoursesCompleted: 22800
    },
    {
      name: "Remote Communities - Arctic Circle",
      peopleServed: 0.4,
      energyKits: 7800,
      progress: 91,
      educationCoursesCompleted: 6400
    },
  ];

  const impactMetrics = [
    { label: "Lives Improved", value: "786M" },
    { label: "Energy Kits Deployed", value: "142M" },
    { label: "Education Hours", value: "1.2B" },
    { label: "Community Hubs", value: "18,451" },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Community Empowerment Systems</h1>
        <p className="text-muted-foreground">
          Decentralized energy kits, AI education tools, and localized funding models for communities
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {impactMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="pb-2 pt-4">
              <CardDescription>{metric.label}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="mr-2 h-5 w-5 text-energy" />
            Global Empowerment Progress
          </CardTitle>
          <CardDescription>
            Progress toward goal of empowering 1 billion underserved individuals
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Overall Progress</span>
              <span className="font-medium">78.6%</span>
            </div>
            <Progress value={78.6} className="h-3" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Energy Access</div>
              <div className="text-lg font-semibold">786M / 1B people</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Knowledge Access</div>
              <div className="text-lg font-semibold">812M / 1B people</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-semibold mb-4">Featured Community Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {communityProjects.map((project, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.peopleServed}M people served</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Project Completion</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Energy Kits:</span>
                    <span className="ml-2 font-medium">{project.energyKits.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Courses Completed:</span>
                    <span className="ml-2 font-medium">{project.educationCoursesCompleted.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Communities;
