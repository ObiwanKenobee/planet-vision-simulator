
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SidebarProps {
  className?: string;
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ className, children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        'h-screen fixed left-0 top-0 z-30 flex flex-col border-r bg-sidebar transition-width duration-300',
        collapsed ? 'w-16' : 'w-64',
        className
      )}
    >
      <div className="flex-1 overflow-auto">{children}</div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-3 top-6 h-6 w-6 rounded-full bg-background border shadow-sm"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
};

export default Sidebar;
