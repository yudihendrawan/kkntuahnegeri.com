'use client'
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import ThemeButton from '../button/ThemeButton';
import Image from 'next/image';

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
   <div className='flex items-center justify-between px-2'>
    <div className='flex items-center space-x-3'>
     {Logos.map((logo)=>(
      <Image key={logo.src} src={logo.src} alt={logo.name} width={logo.width} height={logo.height} />
     ))}
    </div>
    <ThemeButton />
   </div>


  </header>
 )
}

const Logos = [
 {
  src:'/img/logo.png',
  name:'logo kkn tuah negeri',
  width:50,
  height:50,
 },
 {
  src:'/img/logo-umri.png',
  name:'logo umri',
  width:40,
  height:40,
 },
 {
  src:'/img/logo-kampus-merdeka.png',
  name:'logo kampus merdeka',
  width:55,
  height:55,
 },
]