
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Droplets, CloudRain } from 'lucide-react';

const OceanCleanup: React.FC = () => {
  const cleanupOperations = [
    {
      region: "Pacific Gyre",
      progress: 63,
      plasticsRemoved: "2.4M tons",
      fleetSize: 78,
      startDate: "2023-03-15"
    },
    {
      region: "Mediterranean Sea",
      progress: 82,
      plasticsRemoved: "1.1M tons",
      fleetSize: 45,
      startDate: "2023-01-22"
    },
    {
      region: "Indian Ocean",
      progress: 41,
      plasticsRemoved: "0.9M tons",
      fleetSize: 52,
      startDate: "2023-06-10"
    },
    {
      region: "Caribbean Sea",
      progress: 76,
      plasticsRemoved: "0.7M tons",
      fleetSize: 31,
      startDate: "2023-02-28"
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">AI-Driven Ocean Cleanup Operations</h1>
        <p className="text-muted-foreground">
          Autonomous fleets and AI navigators removing plastics and toxins from our oceans
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Droplets className="mr-2 h-5 w-5 text-energy" />
              Global Ocean Cleanup
            </CardTitle>
            <CardDescription>Overall progress across all regions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Cleanup Progress</span>
                <span className="font-medium">67%</span>
              </div>
              <Progress value={67} className="h-3" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <CloudRain className="mr-2 h-5 w-5 text-energy" />
              Fleet Status
            </CardTitle>
            <CardDescription>AI-powered autonomous vessels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-bold">206</div>
                <p className="text-sm text-muted-foreground">Active vessels</p>
              </div>
              <div>
                <div className="text-2xl font-bold">5.1M</div>
                <p className="text-sm text-muted-foreground">Tons removed</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Active Cleanup Operations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cleanupOperations.map((op, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle>{op.region}</CardTitle>
              <CardDescription>Operation started {new Date(op.startDate).toLocaleDateString()}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Cleanup Progress</span>
                    <span className="font-medium">{op.progress}%</span>
                  </div>
                  <Progress value={op.progress} className="h-2" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Plastics Removed:</span>
                    <span className="ml-2 font-medium">{op.plasticsRemoved}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Fleet Size:</span>
                    <span className="ml-2 font-medium">{op.fleetSize} vessels</span>
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

export default OceanCleanup;
