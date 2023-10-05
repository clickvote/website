'use client';

import Link from 'next/link';
import React from 'react';

import GithubBtn from '@/components/GithubBtn';
import LikeBtn from '@/components/LikeBtn';
import Logo from '@/components/Logo';

import Close from '~/svg/Close.svg';
import Menu from '~/svg/Menu.svg';

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
    path: '/',
  },
];

const Navbar = () => {
  const toggleMenu = (force = false) => {
    const navLinks = document.getElementById('navLinks');
    navLinks?.classList.toggle('hidden', force);
  };

  return (
    <>
      <nav className='relative z-50 flex max-w-full items-center justify-between p-[18px] md:px-[25px] md:py-[30px] lg:p-[50px]'>
        <div className='flex items-center gap-[20px] lg:gap-[30px]'>
          <Link href='/'>
            <Logo />
          </Link>
          <LikeBtn className='hidden md:flex' />
        </div>
        <div className='flex items-center'>
          <div
            id='navLinks'
            className='fixed inset-0 z-[99] hidden list-none  items-center bg-black text-gray-700 md:relative md:flex md:bg-transparent'
          >
            <div className='m-[18px] flex items-center justify-between md:hidden'>
              <Logo />
              <div className='flex h-6 w-6 items-center justify-center'>
                <Close
                  className='h-[12px] w-[12px]'
                  onClick={() => toggleMenu(true)}
                  loading='lazy'
                />
              </div>
            </div>
            <ul className='mx-[20px] mt-[3px] flex flex-col justify-center md:mx-[0px] md:mt-[0px] md:flex-row md:items-center'>
              {menu &&
                menu.map((item, index) => (
                  <Link href={item?.path} key={index}>
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
                <LikeBtn className='md:hidden' />
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
