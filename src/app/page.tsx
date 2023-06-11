'use client'
import clsx from "clsx"
import Image from "next/image"
import useLoaded from "./components/hooks/useLoaded"
import { SiFacebook, SiGithub, SiInstagram, SiLinkedin, SiTiktok, SiTwitter, SiYoutube } from 'react-icons/si';
import Link from "next/link";
import { IconType } from "react-icons/lib";
import { useState } from "react";
import { HiOutlineClipboard } from 'react-icons/hi'
import useCopyToClipboard from "./components/hooks/useCopyToClipboard";
import Tooltip from "./components/tooltip/Tooltip";
import Accent from "./components/links/Accent";
import { trackEvent } from "./components/lib/analytics";
import UnstyledLink from "./components/links/UnstyledLink";

export default function Home() {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');
  const isLoaded = useLoaded();
  const [copy] = useCopyToClipboard()
  return (
    <main>
      <div className={clsx('flex flex-col items-center justify-between', isLoaded && 'fade-in-start')}>
        <Image data-fade='1' src='/img/logo.png' alt="logo" width={125} height={125} className="mt-4" />
        <h2 data-fade='2' className="dark:block dark:bg-gradient-to-r dark:from-primary-200 dark:to-primary-300 dark:bg-clip-text font-bold dark:text-transparent bg-gradient-to-r from-primary-200 to-primary-300 text-black transition-all">KKN Tuah Negeri</h2>

        <div className={clsx('layout mt-10', isLoaded && 'fade-in-start')} >
          {Sosials.map((sosial) => (
            <UnstyledLink
              key={sosial.id}
              href={sosial.href}
              onClick={() => {
                trackEvent(`Link: ${sosial.id}`, { type: 'link' })
              }}
              data-umami-event={sosial.id}
            >

              <div data-fade={sosial.dataFade} className="flex p-2 justify-between h-14 my-3 items-center layout bg-[#f9f6f0] dark:bg-[#374d86] shadow-md hover:scale-105 transition-all duration-75 rounded-sm flex-row"
              >
                <div className="p-1 ">
                  <sosial.icon className="w-8 h-8" />
                </div>
                <div>
                  <h4>{sosial.id}</h4>
                </div>
                <div onClick={e => e.preventDefault()} className="w-8">
                  <Tooltip
                    trigger="mouseenter"
                    hideOnClick={false}
                    interactive
                    html={
                      <div className='inline-block rounded-md border bg-white p-2 text-gray-600 shadow-md dark:border-gray-600 dark:bg-dark dark:text-gray-200'>
                        {copyStatus === 'idle'
                          ? 'Click the icon to copy '
                          : 'Copied to clipboard 🥳'}
                        <Accent className='inline-block font-medium'>
                          {sosial.id} Link
                        </Accent>
                      </div>
                    }
                  >
                    <button onClick={() => {
                      copy(sosial.href).then(() => {
                        setCopyStatus('copied')
                        setTimeout(() => setCopyStatus('idle'), 1500)
                      })
                    }}>
                      <HiOutlineClipboard className="w-7 h-7 hover:text-primary-300" />
                    </button>
                  </Tooltip>

                </div>
              </div>
            </UnstyledLink>
          ))}
        </div>
      </div>
    </main>
  )
}


type Sosial = {
  href: string;
  icon: IconType;
  id: string;
  dataFade: string;
}

const Sosials: Sosial[] = [
  {
    href: 'https://www.facebook.com/profile.php?id=100093380435031&mibextid=ZbWKwL',
    icon: SiFacebook,
    id: 'Facebook',
    dataFade: '3'
  },
  {
    href: 'https://instagram.com/kkn.tuahnegeri2023?igshid=MzNlNGNkZWQ4Mg==',
    icon: SiInstagram,
    id: 'Instagram',
    dataFade: '4'
  },
  {
    href: 'https://www.tiktok.com/@kkn.tuahnegri11?_t=8d3D6rJxDTG&_r=1',
    icon: SiTiktok,
    id: 'Tiktok',
    dataFade: '5'
  },
  {
    href: 'https://youtube.com/@kknsmarttuahnegri2023',
    icon: SiYoutube,
    id: 'Youtube',
    dataFade: '6'
  }
]