import { Control } from 'react-hook-form';

export interface TextInputProps extends React.HTMLAttributes<HTMLInputElement> {
  control: Control<any, any>;
  name: string;
  label?: string;
  description?: React.ReactNode;
  isLoading?: boolean;
}
