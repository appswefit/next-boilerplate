import React from 'react';
import { TextInputProps } from './types';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

function TextInput({
  control,
  name,
  label,
  isLoading,
  description,
  ...inputProps
}: TextInputProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, formState: { isSubmitting } }) => (
        <FormItem className="w-full">
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              className="w-full"
              disabled={isSubmitting}
              {...inputProps}
              {...field}
            />
          </FormControl>
          {description && <FormDescription>{label}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default TextInput;
