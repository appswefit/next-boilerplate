import { Control } from 'react-hook-form';

export interface TextAreaInputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  control: Control<any, any>;
  name: string;
  label?: string;
  description?: React.ReactNode;
  isLoading?: boolean;
}
