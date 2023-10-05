import * as React from 'react';
import { Tooltip } from 'react-tooltip';

import { cn } from '@/lib/utils';

import { ReactCodeSnippet } from '@/components/snippets';

import Angular from '~/svg/Angular.svg';
import Heart from '~/svg/Heart.svg';
import ReactSvg from '~/svg/React.svg';
import Svelte from '~/svg/Svelte.svg';
import Vue from '~/svg/Vue.svg';
import Web from '~/svg/Web.svg';

type StackProps = {
  title: string;
  disabled: boolean;
  children?: React.ReactNode;
  selected?: boolean;
  onClick: () => void;
};

const Stack = ({
  title,
  disabled,
  children,
  selected = false,
  onClick: handleClick,
}: StackProps) => {
  return (
    <button
      className={cn(
        'bg-gradient7 flex cursor-pointer items-center justify-center gap-[7px] rounded-[7px] border-[1px] border-[#FFFFFF1A] px-[9px] py-1 text-[#FFFFFF99] transition duration-150 ease-in',
        selected && 'bg-gradient6 border-[#AF46FF] text-white'
      )}
      onClick={handleClick}
      data-tooltip-id={disabled ? 'coming_soon' : ''}
      disabled
    >
      {children}
      <span className='text-[14px] leading-[22px]'>{title}</span>
    </button>
  );
};

const Stacks = [
  {
    title: 'React',
    icon: <ReactSvg className='h-[14px] w-[14px]' loading='lazy' />,
    disabled: false,
  },
  {
    title: 'VueJs',
    icon: <Vue className='h-[14px] w-[14px]' loading='lazy' />,
    disabled: true,
  },
  {
    title: 'Angular',
    icon: <Angular className='h-[14px] w-[14px]' loading='lazy' />,
    disabled: true,
  },
  {
    title: 'Svelte',
    icon: <Svelte className='h-[14px] w-[14px]' loading='lazy' />,
    disabled: true,
  },
  {
    title: 'Web',
    icon: <Web className='h-[14px] w-[14px]' loading='lazy' />,
    disabled: true,
  },
];

export default function Code() {
  const [stackId, setStack] = React.useState(0);
  const handleClick = (index: number) => {
    setStack(index);
  };

  return (
    <div className='w-screen px-[20px]' style={{ overflow: 'overlay' }}>
      <div className='bg-gradient8 m-auto flex h-[600px] w-[1000px] rounded-[7px] border-[1px] border-[#FFFFFF2B]'>
        <div className='h-full w-[645px] border-r-[1px] border-[#FFFFFF2B]'>
          <div className='flex h-[60px] w-full items-center gap-[10px] border-b-[1px] border-[#FFFFFF2B] px-[30px] py-[15px]'>
            {Stacks &&
              Stacks.map((item, index) => (
                <Stack
                  title={item.title}
                  disabled={item.disabled}
                  onClick={() => handleClick(index)}
                  selected={index === stackId}
                  key={index}
                >
                  {item.icon}
                </Stack>
              ))}
          </div>
          <div className='flex flex-col px-[30px] py-[26px] text-[14px] leading-[26px]'>
            <ReactCodeSnippet />
          </div>
        </div>
        <div className='h-full w-[354px]'>
          <div className='h-[60px] w-full border-b-[1px] border-[#FFFFFF2B] px-[22px] py-[17px]'>
            <span className='text-[16px] font-[500] leading-[25.6px] text-white'>
              Preview
            </span>
          </div>
          <div className='px-[50px] pt-[150px]'>
            <div className='flex items-center justify-center gap-[8.42px] rounded-full bg-[#FFFFFF0D] px-[45px] py-[20px] text-[23px] leading-[37px] text-white'>
              <Heart className='h-[20px] w-[22px]' loading='lazy' />
              <span>Like</span>
              <div className='h-[20px] w-[1.3px] bg-[#FFFFFF4D]'></div>
              <span>400</span>
            </div>
          </div>
        </div>
      </div>
      <Tooltip
        id='coming_soon'
        style={{
          backgroundColor: '#AF46FF',
          borderRadius: 99999,
          fontSize: 12,
          fontWeight: 500,
          fontFamily: 'IBM Plex Mono',
          padding: '2px 8px',
        }}
      >
        Coming soon
      </Tooltip>
    </div>
  );
}
