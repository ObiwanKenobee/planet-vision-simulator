
import React from 'react';
import { cn } from '@/lib/utils';
import { MoonStar, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  title: string;
  subtitle?: string;
  onToggleTheme: () => void;
  isDarkMode: boolean;
  className?: string;
  rightContent?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  onToggleTheme,
  isDarkMode,
  className,
  rightContent,
}) => {
  return (
    <div className={cn('flex items-center justify-between py-4 px-4', className)}>
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" onClick={onToggleTheme}>
          {isDarkMode ? <Sun className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
        </Button>
        {rightContent}
      </div>
    </div>
  );
};

export default Header;
