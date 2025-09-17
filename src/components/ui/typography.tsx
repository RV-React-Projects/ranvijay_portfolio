import React, { ElementType } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@lib/utils';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      h5: 'text-lg font-semibold tracking-tight',
      h6: 'text-base font-medium tracking-tight',
      p: 'leading-7',
      ul: 'my-6 ml-6 list-disc [&>li]:mt-2',
      li: 'mt-2 ml-4 list-item',
      code: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
      table: 'my-6 w-full overflow-y-auto',
      thead: '',
      tbody: '',
      tr: 'm-0 border-t p-0 even:bg-muted',
      th: 'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
      td: 'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
      blockquote: 'mt-6 border-l-2 pl-6 italic',
      list: 'my-6 ml-6 list-disc [&>li]:mt-2',
      strong: 'font-semibold',
    },
    affects: {
      default: '',
      lead: 'text-xl text-muted-foreground',
      large: 'text-lg font-semibold',
      small: 'text-sm font-medium leading-none',
      muted: 'text-sm text-muted-foreground',
      removePMargin: '[&:not(:first-child)]:mt-0',
    },
  },
  defaultVariants: {
    variant: 'p',
    affects: 'default',
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyVariants> {}

const Typography = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, variant, affects, ...props }, ref) => {
    const Comp = (variant || 'p') as ElementType;
    return (
      <Comp
        className={cn(typographyVariants({ variant, affects, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Typography.displayName = 'Typography';

export { Typography, typographyVariants };
