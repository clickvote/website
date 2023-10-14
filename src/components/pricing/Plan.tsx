import * as React from 'react';

import { cn } from '@/lib/utils';

import Check from '~/svg/Check.svg';
import Close from '~/svg/Close.svg';

type Props = {
  title: string;
  description: string;
  selfhosted: boolean;
  contact: boolean;
  price: string;
  actionTitle: string;
  defaultAction?: boolean;
  content: Array<{
    title: string;
    support: boolean;
  }>;
  className?: string;
};

const PricingPlan = ({
  title,
  description,
  price,
  actionTitle,
  content,
  contact,
  defaultAction = false,
  selfhosted,
  className = '',
}: Props) => {
  return (
    <div
      className={`${className} h-full flex w-full min-w-[267px] flex-col gap-[26px] rounded-[12px] border-[1px] bg-gradient-to-b from-[#07070761] via-[#FFFFFF0A] to-[#FFFFFF14] px-[24px] pb-[40px] pt-[30px] md:max-w-[500px]`}
      style={{ borderColor: '#FFFFFF32' }}
    >
      <div className='flex flex-col items-center gap-[7px]'>
        <p className='text-[22px] font-[600] leading-[28.6px]'>{title}</p>
        <p className='text-center text-[16px] font-[400] leading-[21.6px] text-[#A7A7A7]'>
          {description}
        </p>
      </div>
      <p className='text-center text-[40px] font-[500] leading-[52px]'>
        {price}
      </p>
      <div className='flex flex-col gap-[32px]'>
        <a
          href={contact ? 'https://cal.com/nevodavid/30min' : selfhosted ? "https://docs.clickvote.dev/quickstart" : "https://app.clickvote.dev"} target="_blank"
          className={cn({
            'rounded-[7px] border-[1px] bg-gradient-to-b py-[16px] text-center': true,
            'border-transparent from-[#AF46FF] to-[#950AFF]': defaultAction,
            'border-[#FFFFFF66] from-[#FFFFFF16] to-[#FFFFFF00]':
              !defaultAction,
          })}
        >
          <span className='text-[18px] leading-[28.8px] text-[500]'>
            {actionTitle}
          </span>
        </a>
        <div className='h-[1px] bg-[#FFFFFF80]' />
        <div className='flex flex-col gap-[24px]'>
          {content &&
            content.map((item, index) => (
              <div className='flex items-center gap-[11px]' key={index}>
                <div
                  className={cn({
                    'flex h-[18px] w-[18px] items-center justify-center rounded-full':
                      true,
                    'bg-[#AF46FF] text-white': item.support,
                    'bg-[#474747] text-[#797979]': !item.support,
                  })}
                >
                  {item.support ? (
                    <Check className='w-[10px]' />
                  ) : (
                    <Close className='w-[10px]' />
                  )}
                </div>
                <p className='text-[16px] font-[400] leading-[21.6px]'>
                  {item.title}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
