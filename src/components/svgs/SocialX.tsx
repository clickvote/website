import * as React from 'react';

interface SvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const SocialX = ({ ...props }: SvgProps) => {
  const { width = 20, height = 20, color = 'inherit' } = props;

  return (
    <svg width={width} height={height} viewBox='0 0 20 20' fill='inherit'>
      <path
        d='M11.9027 8.46429L19.3482 0H17.5838L11.119 7.34942L5.95547 0H0L7.8082 11.1136L0 19.9897H1.76443L8.59152 12.2285L14.0445 19.9897H20L11.9023 8.46429H11.9027ZM9.48608 11.2115L8.69495 10.1049L2.40018 1.29901H5.11025L10.1902 8.40562L10.9813 9.51229L17.5847 18.7498H14.8746L9.48608 11.212V11.2115Z'
        fill={color}
      />
    </svg>
  );
};

export default SocialX;
