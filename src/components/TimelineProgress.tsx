
import React from 'react';
import { cn } from '@/lib/utils';

interface TimelineProgressProps {
  currentYear: number;
  startYear: number;
  endYear: number;
  milestones: {
    year: number;
    label: string;
    completed: boolean;
  }[];
  className?: string;
}

const TimelineProgress: React.FC<TimelineProgressProps> = ({
  currentYear,
  startYear,
  endYear,
  milestones,
  className,
}) => {
  const totalYears = endYear - startYear;
  const progress = Math.min(100, Math.max(0, ((currentYear - startYear) / totalYears) * 100));

  return (
    <div className={cn("relative w-full pt-6 pb-2", className)}>
      <div className="relative h-2 bg-slate-100 dark:bg-slate-800 rounded-full">
        <div
          className="absolute h-full bg-primary rounded-full"
          style={{ width: `${progress}%` }}
        />
        {milestones.map((milestone, index) => {
          const position = ((milestone.year - startYear) / totalYears) * 100;
          return (
            <div
              key={index}
              className="absolute -top-6"
              style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
            >
              <div className="flex flex-col items-center">
                <span className="text-xs font-medium mb-1">{milestone.year}</span>
                <div
                  className={cn(
                    "w-4 h-4 rounded-full border-2 border-background",
                    milestone.completed ? "bg-primary" : "bg-slate-200 dark:bg-slate-700"
                  )}
                />
              </div>
              <span className="absolute text-xs whitespace-nowrap -bottom-6 left-1/2 -translate-x-1/2">
                {milestone.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimelineProgress;
