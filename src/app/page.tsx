'use client'
import clsx from "clsx"
import Image from "next/image"
import useLoaded from "./components/hooks/useLoaded"

export default function Home() {
  const isLoaded = useLoaded();
  return (
    <main className={clsx('flex flex-col items-center justify-between', isLoaded && 'fade-in-start')}>
      <Image data-fade='1' src='/img/logo.png' alt="logo" width={100} height={100} />
      <h1 data-fade='2'>KKN Tuah Negeri 2023</h1>
      {/* <h1 >KKN Tuah Negeri 2023</h1>
      <h1>KKN Tuah Negeri 2023</h1>
      <h1>KKN Tuah Negeri 2023</h1>
      <h1>KKN Tuah Negeri 2023</h1>
      <h1>KKN Tuah Negeri 2023</h1> */}
    </main>
  )
}
