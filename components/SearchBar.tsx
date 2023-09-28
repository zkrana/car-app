'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import { SearchManufacturer } from './'

function SearchBar() {

    const [manufacturer, setManuFacturer] = useState("");

    const handleSearch = () => {}

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
        {/* <SearchButton otherClasses='sm:hidden' /> */}
      </div>
      <div className='searchbar__item'>
        <Image
          src='/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='car model'
        />
        <input
          type='text'
          name='model'
          placeholder='Tiguan...'
          className='searchbar__input'
        />
        {/* <SearchButton otherClasses='sm:hidden' /> */}
      </div>
      {/* <SearchButton otherClasses='max-sm:hidden' /> */}
    </form>
  )
}

export default SearchBar
