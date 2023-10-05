import * as React from 'react';

interface SvgProps {
  width?: number;
  height?: number;
  className?: string;
}

const Star = ({ ...props }: SvgProps) => {
  const { width = 52, height = 51, className = '' } = props;

  return (
    <svg
      className={`${className} mx-[-5px] my-[-7px] transition duration-150 ease-in`}
      width={width}
      height={height}
      viewBox='0 0 52 51'
      fill='none'
    >
      <path
        className='fill-[#AF46FF4C] transition duration-100 ease-in group-hover:fill-[#AF46FF]'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M24.888 17.0258C25.3402 15.9536 26.8824 15.9536 27.3346 17.0258L29.436 22.0103L34.8903 22.4414C36.0652 22.534 36.5416 23.9795 35.6463 24.7361L31.491 28.2472L32.7597 33.4966C33.0332 34.6275 31.7867 35.5205 30.7814 34.9152L26.1113 32.1019L21.4412 34.9152C20.436 35.5205 19.1895 34.6265 19.463 33.4966L20.7317 28.2472L16.5763 24.7361C15.6811 23.9795 16.1575 22.534 17.3323 22.4414L22.7866 22.0103L24.888 17.0258Z'
      />
      <g filter='url(#filter0_f_279_142473)'>
        <path
          className='fill-[#AF46FF00] transition duration-100 ease-in group-hover:fill-[#AF46FF]'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M24.888 17.0258C25.3402 15.9536 26.8824 15.9536 27.3346 17.0258L29.436 22.0103L34.8903 22.4414C36.0652 22.534 36.5416 23.9795 35.6463 24.7361L31.491 28.2472L32.7597 33.4966C33.0332 34.6275 31.7867 35.5205 30.7814 34.9152L26.1113 32.1019L21.4412 34.9152C20.436 35.5205 19.1895 34.6265 19.463 33.4966L20.7317 28.2472L16.5763 24.7361C15.6811 23.9795 16.1575 22.534 17.3323 22.4414L22.7866 22.0103L24.888 17.0258Z'
        />
      </g>
      <defs>
        <filter
          id='filter0_f_279_142473'
          x='0.555774'
          y='0.666125'
          width='51.1111'
          height='49.9998'
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
            result='effect1_foregroundBlur_279_142473'
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Star;
