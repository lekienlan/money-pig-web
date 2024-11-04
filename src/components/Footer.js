'use client';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className='border-t border-neutral-200 mt-16 px-5 md:px-16 py-10 md:py-16'>
      <div className='flex flex-col md:flex-row items-center justify-between mx-auto'>
        <div className='flex-col justify-center items-center'>
          <Link href={'/'} className='text-3xl'>
            <Image
              src={'/logo_with_text.png'}
              width={0}
              height={0}
              style={{ width: 200 }}
              alt='core features'
              className='object-cover w-full md:w-[90%] xl:w-4/5'
            />
          </Link>
          <p className='max-w-xs mt-4 text-sm'>
            Hãy bắt đầu hành trình quản lý tài chính thông minh hơn cùng Money
            Pig!
          </p>
          <div className='flex mt-8 space-x-6'>
            <Link
              href='https://www.facebook.com/profile.php?id=61567211113727'
              target='_blank'
            >
              <FacebookOutlinedIcon />
            </Link>
            {/* <Link href='https://github.com/NaseemKhan005' target='_blank'>
              <GitHubIcon className='hover:text-rose-600 hover:-translate-y-1 transition-all' />
            </Link>
            <Link
              href='https://www.linkedin.com/in/naseem-khan-275275258/'
              target='_blank'
            >
              <LinkedInIcon className='hover:text-rose-600 hover:-translate-y-1 transition-all' />
            </Link>
            <Link href='https://twitter.com/NaseemK69128903' target='_blank'>
              <TwitterIcon className='hover:text-rose-600 hover:-translate-y-1 transition-all' />
            </Link> */}
            <Link
              href='https://www.instagram.com/moneypig.app?igsh=b21kbnZycng2cGw3'
              target='_blank'
            >
              <InstagramIcon  />
            </Link>
          </div>
        </div>

        {/* <div className="grid gap-8 lg:col-span-2 grid-cols-2 md:grid-cols-4">
            <div>
              <p className="font-medium">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  About
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Meet the Team
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  History
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Careers
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Services</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Coaching
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Company Review
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Accounts Review
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  HR Consulting
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  SEO Optimisation
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Helpful Links</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Contact
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  FAQs
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Live Chat
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Terms &amp; Conditions
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Returns Policy
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Accessibility
                </Link>
              </nav>
            </div>
          </div> */}

        <p className='mt-8 text-xs'>
          © 2024 Ha Dong Phuong Do - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
