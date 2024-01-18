import { LucideIcon } from 'lucide-react';

export interface TotalCardProps {
  className?: string;
  title: React.ReactNode;
  total: React.ReactNode;
  Icon?: LucideIcon;
  selected?: boolean;
  onClick?: () => void;
}
