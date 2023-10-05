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
      viewBox='0 0 94 85'
      fill='none'
    >
      <g filter='url(#filter0_f_279_141384)'>
        <path
          d='M46.8882 27.292C45.4313 27.292 44.0782 27.8714 43.273 28.8407L38.7548 34.2785C38.5637 34.5103 38.2732 34.6788 37.9376 34.7541L30.0661 36.5045C28.6619 36.8175 27.5542 37.6649 27.1027 38.7726C26.6511 39.8803 26.9236 41.0859 27.8311 41.998L32.9107 47.1107C33.1259 47.3274 33.2373 47.6013 33.2222 47.8783L32.8761 54.3982C32.8144 55.5616 33.4811 56.6663 34.6611 57.3496C35.4136 57.7876 36.3076 58.0134 37.2106 58.0134C37.7209 58.0134 38.2341 57.9411 38.7262 57.7951L46.3855 55.5165C46.548 55.4683 46.7196 55.4442 46.8897 55.4442C47.0598 55.4442 47.2313 55.4683 47.3939 55.5165L55.0531 57.7951C55.5468 57.9411 56.06 58.0134 56.5702 58.0134C57.4718 58.0134 58.3658 57.7876 59.1183 57.3496C60.2983 56.6663 60.9665 55.5631 60.9033 54.3982L60.5571 47.8783C60.5421 47.6013 60.6535 47.3289 60.8687 47.1107L65.9483 41.998C66.8558 41.0859 67.1282 39.8803 66.6767 38.7726C66.2252 37.6664 65.119 36.8175 63.7148 36.5045L55.8418 34.7541C55.5077 34.6788 55.2157 34.5103 55.0245 34.2785L50.5063 28.8407C49.7011 27.8699 48.3481 27.292 46.8912 27.292'
          fill='#D7A1FF'
          fillOpacity='0.9'
        />
      </g>
      <defs>
        <filter
          id='filter0_f_279_141384'
          x='0.222008'
          y='0.625328'
          width='93.3353'
          height='84.0546'
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
            result='effect1_foregroundBlur_279_141384'
          />
        </filter>
      </defs>
    </svg>
  );
};

export default LightEffect;
