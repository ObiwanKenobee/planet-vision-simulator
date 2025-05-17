
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  Leaf, 
  CloudLightning, 
  Droplets, 
  Users, 
  FileText, 
  BarChart3 
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  label: string;
  icon: React.ReactNode;
  href: string;
}

interface SidebarNavProps {
  collapsed: boolean;
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ collapsed, className }) => {
  const location = useLocation();
  
  const navItems: NavItem[] = [
    { label: 'Dashboard', icon: <LayoutDashboard className="h-5 w-5" />, href: '/' },
    { label: 'Energy Research', icon: <CloudLightning className="h-5 w-5" />, href: '/energy-research' },
    { label: 'Ocean Cleanup', icon: <Droplets className="h-5 w-5" />, href: '/ocean-cleanup' },
    { label: 'Climate Models', icon: <Leaf className="h-5 w-5" />, href: '/climate-models' },
    { label: 'Communities', icon: <Users className="h-5 w-5" />, href: '/communities' },
    { label: 'Validation', icon: <FileText className="h-5 w-5" />, href: '/validation' },
    { label: 'Reports', icon: <BarChart3 className="h-5 w-5" />, href: '/reports' },
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
        {navItems.map((item) => {
          const isActive = location.pathname === item.href || 
                          (item.href !== '/' && location.pathname.startsWith(item.href));
          
          return (
            <Button
              key={item.href}
              variant={isActive ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start",
                collapsed ? "px-2" : "px-3",
                isActive && "bg-sidebar-accent text-sidebar-accent-foreground"
              )}
              asChild
            >
              <Link to={item.href}>
                {item.icon}
                {!collapsed && <span className="ml-3">{item.label}</span>}
              </Link>
            </Button>
          );
        })}
      </div>
    </nav>
  );
};

export default SidebarNav;
