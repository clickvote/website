import * as React from 'react';

interface SvgProps {
  width?: number;
  height?: number;
  className?: string;
  lightMode?: boolean;
}

const Rect = ({ ...props }: SvgProps) => {
  const { width = 58, height = 59, className = '', lightMode = false } = props;

  return (
    <svg
      className={`${className} mx-[-8px] my-[-11px] transition duration-150 ease-in`}
      width={width}
      height={height}
      viewBox='0 0 58 59'
      fill='none'
    >
      <g filter='url(#filter0_f_308_357)'>
        <rect
          x='20'
          y='20.8887'
          width='17.7778'
          height='17.7778'
          rx='3.33333'
          className={lightMode ? 'fill-[#AF46FF]' : 'fill-[#AF46FF00]'}
        />
      </g>
      <rect
        x='20'
        y='20.8887'
        width='17.7778'
        height='17.7778'
        rx='3.33333'
        className={lightMode ? 'fill-[#AF46FF]' : 'fill-[#AF46FF4C]'}
      />
      <defs>
        <filter
          id='filter0_f_308_357'
          x='1.90735e-06'
          y='0.888674'
          width='57.7773'
          height='57.7778'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feGaussianBlur
            stdDeviation='10'
            result='effect1_foregroundBlur_308_357'
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Rect;
