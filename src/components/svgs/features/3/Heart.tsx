import * as React from 'react';

interface SvgProps {
  width?: number;
  height?: number;
  className?: string;
}

const Heart = ({ ...props }: SvgProps) => {
  const { width = 50, height = 49, className = '' } = props;

  return (
    <svg
      className={`${className} mx-[-4px] my-[-7px] transition duration-150 ease-in`}
      width={width}
      height={height}
      viewBox='0 0 50 49'
      fill='none'
    >
      <path
        className='fill-[#AF46FF4C] transition duration-100 ease-in group-hover:fill-[#AF46FF]'
        d='M33.7778 20.9465C33.7778 18.4603 31.7047 16.4443 29.1477 16.4443C27.2365 16.4443 25.5951 17.5709 24.8889 19.1787C24.1827 17.5709 22.5412 16.4443 20.6291 16.4443C18.0741 16.4443 16 18.4603 16 20.9465C16 28.17 24.8889 32.9523 24.8889 32.9523C24.8889 32.9523 33.7778 28.17 33.7778 20.9465Z'
      />
      <g filter='url(#filter0_f_279_142476)'>
        <path
          className='fill-[#AF46FF00] transition duration-100 ease-in group-hover:fill-[#AF46FF]'
          d='M33.7778 20.9465C33.7778 18.4603 31.7047 16.4443 29.1477 16.4443C27.2365 16.4443 25.5951 17.5709 24.8889 19.1787C24.1827 17.5709 22.5412 16.4443 20.6291 16.4443C18.0741 16.4443 16 18.4603 16 20.9465C16 28.17 24.8889 32.9523 24.8889 32.9523C24.8889 32.9523 33.7778 28.17 33.7778 20.9465Z'
        />
      </g>
      <defs>
        <filter
          id='filter0_f_279_142476'
          x='0.444446'
          y='0.888782'
          width='48.8885'
          height='47.6189'
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
            stdDeviation='7.77778'
            result='effect1_foregroundBlur_279_142476'
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Heart;
