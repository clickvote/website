import * as React from 'react';

const Tag = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`w-fit rounded-full bg-gradient-to-l from-[#AB37FF] to-[#6100A7] px-[9px] py-[4px] ${className}`}
    >
      <p className='text-[12px]'>{children}</p>
    </div>
  );
};

export default Tag;
