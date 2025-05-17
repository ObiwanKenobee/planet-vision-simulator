
import React from 'react';
import { cn } from '@/lib/utils';

interface Hotspot {
  x: number;
  y: number;
  size: number;
  color: string;
  pulsing?: boolean;
}

interface GlobalMapProps {
  className?: string;
}

const GlobalMap: React.FC<GlobalMapProps> = ({ className }) => {
  const hotspots: Hotspot[] = [
    { x: 25, y: 30, size: 8, color: 'bg-energy-light', pulsing: true },
    { x: 40, y: 40, size: 12, color: 'bg-forest-light' },
    { x: 60, y: 35, size: 10, color: 'bg-ocean-light', pulsing: true },
    { x: 75, y: 25, size: 14, color: 'bg-energy-light' },
    { x: 30, y: 60, size: 10, color: 'bg-ocean-light' },
    { x: 65, y: 65, size: 8, color: 'bg-forest-light', pulsing: true },
    { x: 85, y: 50, size: 12, color: 'bg-ocean-light' },
  ];

  return (
    <div className={cn("relative w-full h-full min-h-[300px] rounded-lg overflow-hidden globe-gradient", className)}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[80%] h-[80%] bg-slate-100/10 rounded-full border border-slate-200/20 animate-pulse-slow">
          {hotspots.map((spot, index) => (
            <div
              key={index}
              className={cn(
                "absolute rounded-full", 
                spot.color,
                spot.pulsing ? "animate-pulse-slow" : ""
              )}
              style={{
                left: `${spot.x}%`,
                top: `${spot.y}%`,
                width: `${spot.size}px`,
                height: `${spot.size}px`,
                transform: 'translate(-50%, -50%)'
              }}
            />
          ))}
          <div className="absolute left-0 w-full h-1 top-1/2 -translate-y-1/2 bg-slate-200/10" />
          <div className="absolute top-0 h-full left-1/2 -translate-x-1/2 w-1 bg-slate-200/10" />
        </div>
      </div>
      <div className="waves"></div>
    </div>
  );
};

export default GlobalMap;
