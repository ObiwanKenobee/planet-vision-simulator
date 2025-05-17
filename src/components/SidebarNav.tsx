
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, Leaf, CloudLightning, Droplets, Users, FileText, BarChart3 } from 'lucide-react';

interface NavItem {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}

interface SidebarNavProps {
  collapsed: boolean;
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ collapsed, className }) => {
  const navItems: NavItem[] = [
    { label: 'Dashboard', icon: <LayoutDashboard className="h-5 w-5" />, active: true },
    { label: 'Energy Research', icon: <CloudLightning className="h-5 w-5" /> },
    { label: 'Ocean Cleanup', icon: <Droplets className="h-5 w-5" /> },
    { label: 'Climate Models', icon: <Leaf className="h-5 w-5" /> },
    { label: 'Communities', icon: <Users className="h-5 w-5" /> },
    { label: 'Validation', icon: <FileText className="h-5 w-5" /> },
    { label: 'Reports', icon: <BarChart3 className="h-5 w-5" /> },
  ];

  return (
    <nav className={cn('py-4', className)}>
      <div className="px-4 mb-8">
        <div className={cn("flex items-center", collapsed ? "justify-center" : "px-2")}>
          <div className="rounded-full bg-energy-light/30 p-1">
            <div className="bg-energy rounded-full h-8 w-8 flex items-center justify-center text-white font-bold">
              NEF
            </div>
          </div>
          {!collapsed && (
            <span className="ml-3 font-semibold text-lg">NEF Vision</span>
          )}
        </div>
      </div>
      <div className="space-y-1 px-2">
        {navItems.map((item, index) => (
          <Button
            key={index}
            variant={item.active ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start",
              collapsed ? "px-2" : "px-3",
              item.active && "bg-sidebar-accent text-sidebar-accent-foreground"
            )}
          >
            {item.icon}
            {!collapsed && <span className="ml-3">{item.label}</span>}
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default SidebarNav;
