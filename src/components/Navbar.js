'use client';

import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const navbar = useRef();

  useEffect(() => {
    window.onscroll = () => {
      setMounted(true);
      if (window.pageYOffset >= 200) {
        navbar.current.classList.add('shadow');
      } else {
        navbar.current.classList.remove('shadow');
      }
    };
  }, []);

  return (
    <div
      ref={navbar}
      className={`${
        theme === 'dark' ? 'bg-[#121212]' : 'bg-white text-black'
      } w-full z-50 fixed top-0 left-0 py-4 mb-10`}
    >
      <div className='container px-5 md:px-16 flex items-center justify-between mx-auto'>
        <Link href={'/'}>
          <Image
            src={'/logo.png'}
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '56px', height: 'auto', borderRadius: 16 }}
            alt='hero Image'
            className='object-contain mx-auto'
          />
        </Link>

        <div>
          <ul
            className={`text-black flex items-center gap-5  `}
          >
       
            <li
              key={'home'}
              className={
                'capitalize py-4 md:border-none md:py-0 hover:text-[#FF79A7]'
              }
            >
              <Link href={`/`}>Trang chủ</Link>
            </li>
            <li
              key={'dieu-khoan'}
              className={
                'capitalize py-4 md:border-none md:py-0 hover:text-[#FF79A7]'
              }
            >
              <Link href={'/dieu-khoan'}>Điều khoản</Link>
            </li>
            {/* {['home', 'dieu-khoan'].map((link) => (
              <li
                key={link}
                className={`${
                  selectedItem === link ? 'text-rose-600' : ''
                } capitalize py-4 md:border-none md:py-0 hover:text-rose-600`}
                onClick={() => setSelectedItem(link)}
              >
                <Link href={`#${link}`}>{link}</Link>
              </li>
            ))} */}
            {/* <div className='md:hidden mx-auto absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-3'>
              <Link
                href='https://www.facebook.com/profile.php?id=100017192357822&sk'
                target='_blank'
              >
                <FacebookOutlinedIcon className='cursor-pointer hover:text-rose-600 text-xl' />
              </Link>
              <Link
                target='_blank'
                href={'https://www.linkedin.com/in/naseem-khan-275275258/'}
              >
                <LinkedInIcon className='cursor-pointer hover:text-rose-600 text-xl' />
              </Link>
              <Link target='_blank' href={'https://github.com/NaseemKhan005/'}>
                <GitHubIcon className='cursor-pointer hover:text-rose-600 text-xl' />
              </Link>
              <Link
                target='_blank'
                href={'https://www.instagram.com/naseem_khan005/'}
              >
                <InstagramIcon className='cursor-pointer hover:text-rose-600 text-xl' />
              </Link>
            </div> */}
          </ul>
        </div>

        {/* <div className='flex items-center gap-2 sm:gap-4 md:gap-2 lg:gap-4'>
          <button className='capitalize text-sm sm:text-base border-2 hover:border-2 font-semibold sm:py-3 py-2 px-3 sm:px-6 text-rose-600 border-rose-600 hover:border-rose-600 hover:bg-rose-600 hover:text-white rounded-full'>
            <Link href={'#pricing'}>Get Started</Link>
          </button>
          <button>
            {theme === 'dark' ? (
              <LightModeRoundedIcon
                onClick={() => setTheme('light')}
                className='text-white'
              />
            ) : (
              <DarkModeOutlinedIcon onClick={() => setTheme('dark')} />
            )}
          </button>
          <button
            aria-label='menu'
            className={`${
              theme === 'dark' ? 'text-white' : 'text-black'
            } md:hidden`}
            onClick={() => setToggleMenu(true)}
          >
            <MenuIcon />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
