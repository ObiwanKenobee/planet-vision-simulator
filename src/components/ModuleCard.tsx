
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface ModuleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  progress: number;
  className?: string;
}

const ModuleCard = ({ title, description, icon, color, progress, className }: ModuleCardProps) => {
  return (
    <Card className={cn("module-card border-none h-full", className)}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-2">
          <div className={cn("p-2 rounded-full", `bg-${color}-light/20`)}>
            {icon}
          </div>
          <div className="relative w-12 h-12">
            <svg className="w-12 h-12">
              <circle
                className="text-muted/20"
                strokeWidth="4"
                stroke="currentColor"
                fill="transparent"
                r="20"
                cx="24"
                cy="24"
              />
              <circle
                className={`progress-ring-circle text-${color}`}
                strokeWidth="4"
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="20"
                cx="24"
                cy="24"
                style={{ strokeDashoffset: 400 - (400 * progress) / 100 }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">
              {progress}%
            </div>
          </div>
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Progress value={progress} className={`h-1.5 bg-muted/30 [&>*]:bg-${color}`} />
      </CardContent>
      <CardFooter className="pt-2">
        <span className={`text-xs font-medium text-${color}`}>View Details</span>
      </CardFooter>
    </Card>
  );
};

export default ModuleCard;
