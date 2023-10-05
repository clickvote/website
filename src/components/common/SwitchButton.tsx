import * as React from 'react';

import { cn } from '@/lib/utils';

type Props = {
  className?: string;
  text1: string;
  text2: string;
  value?: boolean;
  onChange: (v: boolean) => void;
};

const SwitchButton = ({
  className,
  text1,
  text2,
  value = true,
  onChange: handleChange,
}: Props) => {
  return (
    <div
      className={`${className} flex w-full max-w-[314px] text-[16px] leading-[25.6px]`}
    >
      <button
        className={cn({
          'h-[60px] flex-1 rounded-l-[7px] border-[2px] border-r-0 bg-gradient-to-b uppercase':
            true,
          'border-[#FFFFFF80] from-[#FFFFFF16] to-[#FFFFFF00] hover:opacity-70':
            !value,
          'cursor-default border-[#AF46FF] from-[#AF46FF38] to-[#AF46FF00]':
            value,
        })}
        onClick={() => handleChange(true)}
      >
        {text1}
      </button>
      <div className='w-[2px] bg-[#AF46FF]'></div>
      <button
        className={cn({
          'h-[60px] flex-1 rounded-r-[7px] border-[2px] border-l-0  bg-gradient-to-b uppercase transition':
            true,
          'border-[#FFFFFF80] from-[#FFFFFF16] to-[#FFFFFF00] hover:opacity-70':
            value,
          'cursor-default border-[#AF46FF] from-[#AF46FF38] to-[#AF46FF00]':
            !value,
        })}
        onClick={() => handleChange(false)}
      >
        {text2}
      </button>
    </div>
  );
};

export default SwitchButton;
