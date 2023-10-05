import * as React from 'react';

const GradientText = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <p
      className={`bg-gradient-to-b from-[#FFFFFF] to-[#AF47FF] bg-clip-text text-transparent ${className}`}
    >
      {children}
    </p>
  );
};

export default GradientText;
