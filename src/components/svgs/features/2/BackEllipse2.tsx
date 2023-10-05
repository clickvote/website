import * as React from 'react';

interface SvgProps {
  width?: number;
  height?: number;
  className?: string;
}

const BackEllipse2 = ({ ...props }: SvgProps) => {
  const { width = 288, height = 144, className = '' } = props;

  return (
    <svg
      className={`${className} transition duration-150 ease-in`}
      width={width}
      height={height}
      viewBox='0 0 288 144'
      fill='none'
    >
      <circle
        className='stroke-[2.22222] group-hover:stroke-[1.11111]'
        cx='143.999'
        cy='143.446'
        r='142.222'
        stroke='url(#paint0_linear_279_142737)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_279_142737'
          x1='143.999'
          y1='0.112305'
          x2='143.999'
          y2='286.779'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#AF46FF' />
          <stop offset='0.531826' stopColor='#AF46FF' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BackEllipse2;
