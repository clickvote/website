import * as React from 'react';

import { cn } from '@/lib/utils';

const ButtonVariant = ['primary', 'outline'] as const;
type Props = {
  title: string;
  children?: React.ReactNode;
  fontSize?: number;
  variant?: (typeof ButtonVariant)[number];
  fixed?: boolean;
  onClick?: () => void;
};

export default function Button({
  title,
  children,
  variant = 'outline',
  fixed,
  onClick: handleClick,
}: Props) {
  return (
    <button
      className={cn(
        'bg-gradient5 flex items-center justify-center gap-[8px] rounded-[7px] border-[1px] border-[#FFFFFF80] px-[13px] py-[19px] transition-all duration-300 ease-in hover:opacity-80 md:gap-[12px] md:px-[25px] md:py-[17px]',
        !children && 'px-[51px]',
        variant === 'primary' && 'bg-gradient4 border-[#AF46FF]',
        fixed && 'w-full'
      )}
      onClick={handleClick}
    >
      {children}
      <span className={cn('leading-[25.6px] text-white')}>{title}</span>
    </button>
  );
}
