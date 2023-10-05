import * as React from 'react';

interface SvgProps {
  width?: number;
  height?: number;
  className?: string;
}

const BackEllipse1 = ({ ...props }: SvgProps) => {
  const { width = 184, height = 92, className = '' } = props;

  return (
    <svg
      className={`${className} transition duration-150 ease-in`}
      width={width}
      height={height}
      viewBox='0 0 184 92'
      fill='none'
    >
      <circle
        className='stroke-[2.22222] group-hover:stroke-[1.11111]'
        cx='91.9998'
        cy='91.4451'
        r='90'
        stroke='url(#paint0_linear_279_142736)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_279_142736'
          x1='91.9998'
          y1='0.333984'
          x2='91.9998'
          y2='182.556'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#AF46FF' stopOpacity='0.89' />
          <stop offset='0.449213' stopColor='#AF46FF' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BackEllipse1;
