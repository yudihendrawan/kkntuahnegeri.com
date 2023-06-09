'use client'
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import ThemeButton from '../button/ThemeButton';

type HeaderProps = {
 large?: boolean
}

export default function Header({ large = false }: HeaderProps) {

 const [onTop, setOnTop] = useState<boolean>(true);
 useEffect(() => {
  const handleScroll = () => {
   setOnTop(window.pageYOffset === 0);
  };
  window.addEventListener('scroll', handleScroll);
  return () => {
   window.removeEventListener('scroll', handleScroll);
  };
 }, []);

 return (
  <header className={clsx(
   'sticky top-0 z-50 transition-shadow layout py-4',
   !onTop && 'shadow-sm'
  )}>
   <div className='flex items-center justify-between px-3'>
    <div>
     <h5 className='dark:bg-red-600'>KKN Tuah Negeri 2023</h5>
    </div>
    <ThemeButton />
   </div>


  </header>
 )
}