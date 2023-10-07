import React, { useRef, useState } from 'react';

import { cn } from '@/lib/utils';

import Add from '~/svg/Add.svg';

type Props = {
  title: string;
  description: string;
};

const Accordion = ({ title, description }: Props) => {
  const [isOpened, setOpened] = useState(false);
  const [height, setHeight] = useState('0px');
  const contentElement = useRef<HTMLDivElement>(null);

  const HandleOpening = () => {
    setOpened(!isOpened);
    if (contentElement.current) {
      setHeight(!isOpened ? `${contentElement.current.scrollHeight}px` : '0px');
    }
  };
  return (
    <div
      onClick={HandleOpening}
      className='flex flex-col rounded-[7px] border border-[#FFFFFF66] bg-transparent px-[22px] py-[16px]'
    >
      <div className='flex cursor-pointer items-center justify-between text-[18px] font-[500] leading-[29px]'>
        <span>{title}</span>
        <div className='rounded-full p-2 hover:bg-[#A1A1A11E]'>
          <Add
            className={cn({
              'h-4 w-4 transition-transform duration-200': true,
              'rotate-45': isOpened,
            })}
          />
        </div>
      </div>
      <div
        ref={contentElement}
        style={{ height: height }}
        className='overflow-hidden text-[16px] text-[#A7A7A7] transition-all duration-200'
      >
        <p
          className='mt-[12px]'
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
    </div>
  );
};

export default Accordion;
