import { useTheme } from "next-themes";
import { FiMoon, FiSun } from 'react-icons/fi';
import clsx from 'clsx';
import { ComponentPropsWithoutRef, useEffect, useState } from "react";

type ThemeButtonProps = ComponentPropsWithoutRef<'button'>;

export default function ThemeButton({ className, ...rest }: ThemeButtonProps) {
 const { theme, setTheme } = useTheme();
 const [mounted, setMounted] = useState(false);

 useEffect(() => setMounted(true), []);

 return (
  <button
   className={clsx(
    'rounded-md p-2 focus:outline-none md:p-2.5',
    'border dark:border-gray-600',
    'hover:border-primary-300 hover:text-primary-300 dark:hover:border-primary-300 dark:hover:text-primary-300',
    'focus-visible:border-primary-300 focus-visible:text-primary-300 dark:focus-visible:border-primary-300 dark:focus-visible:text-primary-300',
    'text-lg md:text-xl',
    className
   )}
   {...rest}
   onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
  >
   {mounted ? <>{theme === 'light' ? <FiMoon /> : <FiSun />}</> : <FiSun />}
  </button>
 );
}
