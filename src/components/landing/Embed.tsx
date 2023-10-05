import * as React from 'react';

import Button from '@/components/common/Button';
import Code from '@/components/landing/Code';
import NextImage from '@/components/NextImage';
import { HeartSvg, StarSvg, UpvoteSvg } from '@/components/svgs';

import Hashtag from '~/svg/Hashtag.svg';

export default function Embed() {
  const [selected, setStatus] = React.useState('like');
  return (
    <div className='mt-[113px] flex flex-col items-center justify-center'>
      <div className='relative flex items-center justify-center'>
        <Hashtag
          className='h-[209px] w-[206px] md:h-[282px] md:w-[280px]'
          loading='lazy'
        />
        <NextImage
          className='absolute top-[73px] h-[93px] w-[102px] md:top-[99px] md:h-[126px] md:w-[138px]'
          src='/images/Big_Heart.webp'
          alt='Big Heart'
          width={138}
          height={126}
        />
      </div>
      <div className='bg-gradient3 md:[35px] bg-clip-text text-center text-[32px] font-[600] leading-[39px] text-transparent md:mt-[10px] md:leading-[57.2px] lg:text-[44px]'>
        Easily Embed Your <br className='md:hidden' /> Components{' '}
        <br className='md:hidden' /> Anywhere
      </div>
      <div className='mb-[60px] mt-[35px] flex gap-[13px] text-[14px] md:mt-[50px] md:gap-[17px] md:text-[16px]'>
        <div className='w-[99px] md:w-[134px]'>
          <Button
            title='Like'
            fixed={true}
            variant={selected === 'like' ? 'primary' : 'outline'}
            onClick={() => setStatus('like')}
          >
            <HeartSvg
              width={16}
              height={16}
              color={selected === 'like' ? '#AF46FF' : 'none'}
              stroke={selected === 'like' ? '#AF46FF' : 'white'}
            />
          </Button>
        </div>
        <div className='w-[99px] md:w-[134px]'>
          <Button
            title='Upvote'
            fixed={true}
            variant={selected === 'upvote' ? 'primary' : 'outline'}
            onClick={() => setStatus('upvote')}
          >
            <UpvoteSvg
              width={16}
              height={16}
              color={selected === 'upvote' ? '#AF46FF' : 'none'}
              stroke={selected === 'upvote' ? '#AF46FF' : 'white'}
            />
          </Button>
        </div>
        <div className='w-[99px] md:w-[134px]'>
          <Button
            title='Review'
            fixed={true}
            variant={selected === 'review' ? 'primary' : 'outline'}
            onClick={() => setStatus('review')}
          >
            <StarSvg
              width={16}
              height={16}
              color={selected === 'review' ? '#AF46FF' : 'none'}
              stroke={selected === 'review' ? '#AF46FF' : 'white'}
            />
          </Button>
        </div>
      </div>

      <Code />
    </div>
  );
}
