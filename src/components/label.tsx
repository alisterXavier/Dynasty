'use client';
import { cn } from '@/utils/cn';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as React from 'react';

const Label = React.forwardRef(({ isDark, className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      `text-sm font-medium ${
        isDark ? 'text-offwhite' : 'text-darkButNotBlack'
      } leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`,
      className
    )}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };

