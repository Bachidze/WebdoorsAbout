import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
    <header className='w-[95%] pt-[17px] max-w-[1920px] m-[auto] md:w-[90%] md:pt-[35px]'>
        <section className='flex items-center justify-between'>
            <img src="/assets/MobileHeader1Webdoors.svg" alt="Logo" />
            <img className='md:w-[31px]' src="/assets/MobileHeader2Webdoors.svg" alt="Main" />
            <img src="/assets/MobileHeader3Webdoors.svg" alt="Nav" />
        </section>
    </header>
    </>
  )
}

export default Header