import * as React from 'react';

interface SvgProps {
  width?: number;
  height?: number;
  className?: string;
}

const LightEffect = ({ ...props }: SvgProps) => {
  const { width = 94, height = 85, className = '' } = props;

  return (
    <svg
      className={`${className} transition duration-150 ease-in`}
      width={width}
      height={height}
      viewBox='0 0 94 73'
      fill='none'
    >
      <g filter='url(#filter0_f_279_141305)'>
        <path
          d='M55.8984 18.5557C52.1736 18.5557 48.9795 20.0479 47.0176 22.6773C45.0556 20.0479 41.8585 18.5557 38.1353 18.5557C32.0042 18.5557 27.0176 22.5643 27.0176 27.4915C27.0176 31.6042 29.0449 35.4047 33.0431 38.7891C36.3383 41.5789 40.3142 43.5022 43.0699 44.6259C44.3229 45.1372 45.671 45.3914 47.0176 45.3914C48.3642 45.3914 49.7108 45.1357 50.9653 44.6259C53.7209 43.5022 57.6968 41.5774 60.992 38.7891C64.9887 35.4047 67.0161 31.6042 67.0161 27.4915C67.0161 22.5643 62.0295 18.5557 55.8984 18.5557Z'
          fill='#D7A2FF'
        />
      </g>
      <defs>
        <filter
          id='filter0_f_279_141305'
          x='0.350914'
          y='-8.111'
          width='93.3314'
          height='80.169'
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
            stdDeviation='13.3333'
            result='effect1_foregroundBlur_279_141305'
          />
        </filter>
      </defs>
    </svg>
  );
};

export default LightEffect;
