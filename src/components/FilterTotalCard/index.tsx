import React from 'react';
import { FilterTotalCardProps } from './types';
import TotalCard from '../TotalCard';

function FilterTotalCard({ filters, onChange, value }: FilterTotalCardProps) {
  const currentValue = value;
  return (
    <div className="flex gap-4 flex-wrap">
      {filters.map(({ value, ...props }) => (
        <TotalCard
          onClick={() => {
            if (value === currentValue) {
              onChange?.('');
              return;
            }
            onChange?.(value);
          }}
          key={value}
          selected={value === currentValue}
          className="flex-1 cursor-pointer hover:border-primary"
          {...props}
        />
      ))}
    </div>
  );
}

export default FilterTotalCard;
