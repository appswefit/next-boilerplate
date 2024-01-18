import React from 'react';
import { TextAreaInputProps } from './types';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Textarea } from '../ui/textarea';

function TextAreaInput({
  control,
  name,
  label,
  isLoading,
  description,
  ...inputProps
}: TextAreaInputProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, formState: { isSubmitting } }) => (
        <FormItem className="h-full">
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Textarea
              className="textArea"
              disabled={isSubmitting}
              {...inputProps}
              {...field}
            />
          </FormControl>
          <FormMessage />
          {description && <FormDescription>{description}</FormDescription>}
        </FormItem>
      )}
    />
  );
}

export default TextAreaInput;
