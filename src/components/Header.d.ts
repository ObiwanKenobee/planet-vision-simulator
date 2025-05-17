
import React from 'react';

export interface HeaderProps {
  title: string;
  subtitle?: string;
  onToggleTheme?: () => void;
  isDarkMode?: boolean;
  rightContent?: React.ReactNode;
}
