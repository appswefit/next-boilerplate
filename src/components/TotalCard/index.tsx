import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { TotalCardProps } from './types';
import { cn } from '@/lib/utils';

function TotalCard({
  total,
  Icon,
  title,
  selected,
  className,
  onClick,
}: TotalCardProps) {
  const cardStyle = cn(className, selected ? 'border-primary' : '');
  const iconStyle = cn(selected ? 'text-primary' : 'text-secondary');

  return (
    <Card onClick={onClick} className={cardStyle}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 pt-3">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {Icon && <Icon className={iconStyle} />}
      </CardHeader>
      <CardContent className="pb-3 pt-2">
        <span className="text-2xl font-bold">{total}</span>
      </CardContent>
    </Card>
  );
}

export default TotalCard;
