import dynamic from 'next/dynamic'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import GithubBtn from '@/components/GithubBtn';
import Logo from '@/components/Logo';

import { extraUrls } from '@/constant/config';

import Close from '~/svg/Close.svg';
import Menu from '~/svg/Menu.svg';

const LikeButton = dynamic(() => import('@/components/common/like.button'), {
  ssr: false,
})

const menu = [
  {
    title: 'Blog',
    path: '/blog',
  },
  {
    title: 'Pricing',
    path: '/pricing',
  },
  {
    title: 'Documentation',
    path: extraUrls.doc,
    target: '_blank',
  },
];

const Navbar = () => {
  const pathName = usePathname();

  const toggleMenu = (force = false) => {
    const navLinks = document.getElementById('navLinks');
    navLinks?.classList.toggle('opacity-0', force);
    navLinks?.classList.toggle('pointer-events-none', force);
    // navLinks?.classList.toggle('hidden', force);
  };
  React.useEffect(() => {
    toggleMenu(true);
  }, [pathName]);

  return (
    <>
      <nav className='relative z-50 flex max-w-full items-center justify-between p-[18px] md:px-[25px] md:py-[30px] lg:p-[50px]'>
        <div className='flex items-center gap-[20px] lg:gap-[30px]'>
          <Logo />
          <LikeButton />
        </div>
        <div className='flex items-center'>
          <div
            id='navLinks'
            className='pointer-events-none fixed inset-0 z-[99] list-none items-center bg-black text-gray-700 opacity-0 transition-opacity duration-200 md:pointer-events-auto md:relative md:flex md:bg-transparent md:opacity-100'
          >
            <div className='m-[18px] flex items-center justify-between md:hidden'>
              <Link href='/' onClick={() => toggleMenu(true)}>
                <Logo navigate={false} />
              </Link>
              <div className='flex h-6 w-6 items-center justify-center'>
                <Close
                  className='h-[16px] w-[16px]'
                  onClick={() => toggleMenu(true)}
                  loading='lazy'
                />
              </div>
            </div>
            <ul className='mx-[20px] mt-[3px] flex flex-col justify-center md:mx-[0px] md:mt-[0px] md:flex-row md:items-center'>
              {menu &&
                menu.map((item, index) => (
                  <Link
                    href={item?.path}
                    key={index}
                    onClick={() => toggleMenu(true)}
                    target={item?.target || '_self'}
                  >
                    <li
                      className={`cursor-pointer border-b-[${
                        index < menu.length - 1 ? 1 : 0
                      }px] border-[#FFFFFF33] px-[5px] py-[30px] text-[15px] text-white transition duration-300 ease-in hover:text-[#00D5FF] md:border-none md:py-3 lg:px-[20px]`}
                    >
                      {item?.title}
                    </li>
                  </Link>
                ))}
              <div className='mt-[23px] flex justify-between md:mt-[0px]'>
                <GithubBtn />
                <LikeButton className='md:hidden' />
              </div>
            </ul>
          </div>
          <button className='md:hidden' onClick={() => toggleMenu()}>
            <Menu className='h-[14px] w-[22px]' loading='lazy' />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
