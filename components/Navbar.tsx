import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


import CustomButton from './CustomButton'

function Navbar() {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-5 py-5 '>
            <Link href="/" className='flex justify-center items-center '>
                <Image src="/logo.svg" alt="hero" width={118} height={18} className="object-contain" />
            </Link>
            <Link href='signin'>
              <CustomButton 
              title='Sign in'
              btnType="button"
              containerStyles='text-primary-blue rounded-full bg-white min-w-[130px'
              />
            </Link>
        </nav>
    </header>
  )
}

export default Navbar
