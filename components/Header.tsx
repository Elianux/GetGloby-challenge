import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <>
      <div className='flex md:mx-auto pt-5 pb-5'>
        <Image src='/tv.svg' alt='logo' width={50} height={50} />
        <span className='font-bold text-white text-2xl align-text-bottom mt-2 ml-5'>
          MovieBox
        </span>
      </div>
    </>
  )
}
