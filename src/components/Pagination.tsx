import usePagination from '@lucasmogari/react-pagination';
import cn from 'classnames';
import React, { memo, PropsWithChildren } from 'react';

import ArrowLeft from '~/svg/ArrowLeft.svg';
import ArrowRight from '~/svg/ArrowRight.svg';

type Props = {
  page: number;
  itemCount: number;
  perPage: number;
  className?: string;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  page,
  itemCount,
  perPage,
  className,
  onPageChange: handlePageChange,
}: Props) => {
  const { getPageItem, totalPages } = usePagination({
    totalItems: itemCount,
    page: page,
    itemsPerPage: perPage,
    maxPageItems: 7,
  });

  const firstPage = 1;
  const nextPage = Math.min(page + 1, totalPages);
  const prevPage = Math.max(page - 1, firstPage);
  let count = totalPages + 2;
  while (count--) {
    const { page } = getPageItem(count);
    if (page === 'next' || count === 0) {
      break;
    }
  }
  const arr = new Array(count - 1)
    .fill(0)
    .map((_, i) => getPageItem(i + 1).page);

  const isVisibleOnMobile = (v: number | string): boolean => {
    const index = arr.findIndex((vv) => vv === v);
    const curIndex = arr.findIndex((vv) => vv === page);
    const from = Math.min(index, curIndex);
    const to = Math.max(index, curIndex);
    for (let i = from + 1; i < to; i++) if (arr[i] === 'gap') return false;
    return true;
  };

  const fn = (i: number) => {
    const { page, disabled, current } = getPageItem(i);
    if (page === 'previous') {
      return (
        <PaginationLink
          disabled={disabled}
          key={page}
          onPageChange={() => handlePageChange(prevPage)}
          className='!w-fit gap-[12px]'
        >
          <div className='h-5 w-5 p-1'>
            <ArrowLeft />
          </div>
          <span className='hidden md:block'>Previous</span>
        </PaginationLink>
      );
    }

    if (page === 'gap') {
      return (
        <span
          key={`${page}-${i}`}
          className='flex h-10 w-8 cursor-default items-end justify-center px-[2px] py-[8px] text-[#A7A7A7]'
        >
          ...
        </span>
      );
    }

    if (page === 'next') {
      return (
        <PaginationLink
          disabled={disabled}
          key={page}
          onPageChange={() => handlePageChange(nextPage)}
          className='!w-fit gap-2'
        >
          <span className='hidden md:block'>Next</span>
          <div className='h-5 w-5 p-1'>
            <ArrowRight />
          </div>
        </PaginationLink>
      );
    }
    if (!page) return;
    return (
      <PaginationLink
        active={current}
        key={page}
        onPageChange={() => handlePageChange(page)}
        className={isVisibleOnMobile(page) ? '' : 'hidden md:flex'}
      >
        {page}
      </PaginationLink>
    );
  };

  return (
    <div className={`flex items-center justify-between ${className}`}>
      {fn(0)}
      <div className='flex'>{arr.map((_, i) => fn(i + 1))}</div>
      {fn(count)}
    </div>
  );
};

type PaginationLinkProps = {
  active?: boolean;
  disabled?: boolean;
  className?: string;
  onPageChange: () => void;
} & PropsWithChildren;

function PaginationLink({
  children,
  onPageChange: handlePageChange,
  ...props
}: PaginationLinkProps) {
  return (
    <div
      className={`${cn({
        'flex h-10 w-10 cursor-pointer items-center justify-center p-[2px] transition-all':
          true,
        'rounded-[8px] bg-[#AF46FF] text-white': props.active,
        'text-[#A7A7A7] hover:text-[#00D5FF]': !props.active,
        'pointer-events-none cursor-not-allowed text-gray-500': props.disabled,
      })} ${props.className}`}
      onClick={handlePageChange}
    >
      {children}
    </div>
  );
}

export default memo(Pagination);
