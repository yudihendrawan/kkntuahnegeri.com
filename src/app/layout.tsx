import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import { Providers } from './provider'
import './styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Linktree KKN Tuah Negeri 2023',
  description: 'Linktree KKN Tuah Negeri 2023! Jelajahi berbagai informasi menarik, kegiatan inspiratif, dan prestasi yang dicapai oleh peserta KKN Tuah Negeri tahun 2023',
  Image: ['/img/logo.png']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://umami.ystudio.dev/script.js" data-website-id="f0ebfd0c-4f10-4ec0-8f8a-b61f459e35a6"></script>
      </head>
      <body className='bg-[#EDE0CE] dark:bg-[#1F2C4C]'>
        <Providers>
          <div>
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>

    </html>
  )
}
