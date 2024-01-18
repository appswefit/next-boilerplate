import { TotalCardProps } from '../TotalCard/types';

export interface FilterTotalCardProps {
  value?: string;
  onChange?: (value: string) => void;
  filters: Array<TotalCardProps & { value: string }>;
}
