
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, BarChart3, FileSearch } from 'lucide-react';

const Reports: React.FC = () => {
  const globalReports = [
    {
      title: "Global Energy Transition Roadmap",
      description: "Comprehensive analysis of pathways to 100% renewable energy",
      datePublished: "2025-04-15",
      pages: 124,
      authors: "NEF Research Team",
      downloads: 24859
    },
    {
      title: "Ocean Health Index 2025",
      description: "Status of marine ecosystems and cleanup progress",
      datePublished: "2025-03-22",
      pages: 86,
      authors: "Ocean Ecology Group",
      downloads: 18271
    },
    {
      title: "Net Zero Carbon Economy Blueprint",
      description: "Economic models and policy recommendations",
      datePublished: "2025-02-10",
      pages: 152,
      authors: "Climate Economics Consortium",
      downloads: 31452
    }
  ];

  const regionalReports = [
    {
      title: "Southeast Asia Energy Transformation",
      region: "Southeast Asia",
      date: "2025-04-02",
      highlights: "Island microgrids, community solar, regional cooperation"
    },
    {
      title: "African Renewable Energy Corridor",
      region: "Africa",
      date: "2025-03-18",
      highlights: "Cross-border transmission, rural electrification"
    },
    {
      title: "European Zero-Carbon Cities",
      region: "Europe",
      date: "2025-02-25",
      highlights: "Urban planning, transportation, building efficiency"
    },
    {
      title: "North American Grid Modernization",
      region: "North America",
      date: "2025-01-30",
      highlights: "AI grid management, energy storage solutions"
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Reports & Analysis</h1>
        <p className="text-muted-foreground">
          Research publications, policy roadmaps, and analytical insights on sustainable energy futures
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <FileText className="mr-2 h-5 w-5 text-energy" />
              Publications
            </CardTitle>
            <CardDescription>Comprehensive research reports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">247</div>
            <p className="text-sm text-muted-foreground">Reports published this year</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <FileSearch className="mr-2 h-5 w-5 text-energy" />
              Policy Recommendations
            </CardTitle>
            <CardDescription>Guidance for decision makers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">172</div>
            <p className="text-sm text-muted-foreground">Policies implemented globally</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <BarChart3 className="mr-2 h-5 w-5 text-energy" />
              Data Access
            </CardTitle>
            <CardDescription>Open data initiatives</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">5.2M</div>
            <p className="text-sm text-muted-foreground">Dataset downloads</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Global Reports</h2>
      <div className="space-y-6 mb-8">
        {globalReports.map((report, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{report.title}</CardTitle>
              <CardDescription>{report.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground block">Published:</span>
                  <span>{new Date(report.datePublished).toLocaleDateString()}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block">Pages:</span>
                  <span>{report.pages}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block">Authors:</span>
                  <span>{report.authors}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                {report.downloads.toLocaleString()} downloads
              </div>
              <Button variant="outline" size="sm">
                <FileText className="mr-2 h-4 w-4" />
                View Report
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Regional Reports</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {regionalReports.map((report, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle>{report.title}</CardTitle>
              <CardDescription>Region: {report.region}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-muted-foreground">Published:</div>
                  <div>{new Date(report.date).toLocaleDateString()}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Key Highlights:</div>
                  <div className="text-sm">{report.highlights}</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="ml-auto">
                <FileText className="mr-2 h-4 w-4" />
                View Report
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Reports;
