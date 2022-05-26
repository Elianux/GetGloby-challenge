import Head from 'next/head'
import Router from 'next/router'
import { useRouter } from 'next/router'

import { ReactNode } from 'react'
import Header from './Header'
import SearchBar from './SearchBar'

interface LayoutProps {
  children: ReactNode
  title?: string
}

// APPLICATION-WIDE LAYOUT
export default function Layout({ children }: LayoutProps) {
  const router = useRouter()
  const showSearchbar = router.pathname.split('/')[1] === 'movie'

  return (
    <div className='bg-[#202020]'>
      <Head>
        <title>Challenge</title>
      </Head>
      <div className='text-center sm:mx-20 md:mx-auto w-10/12 min-h-screen'>
        <div className='mb-10'>
          <Header />
          {!showSearchbar && <SearchBar />}
        </div>
        <main>{children}</main>
      </div>
    </div>
  )
}
