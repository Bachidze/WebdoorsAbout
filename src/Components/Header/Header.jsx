import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
    <header className='w-[95%] pt-[17px] max-w-[1920px] m-[auto] md:w-[90%] md:pt-[35px] xl:w-[80%] xl:pt-[60px]'>
        <section className='flex items-center justify-between'>
            <img className='xl:hidden' src="/assets/MobileHeader1Webdoors.svg" alt="Logo" />
            <div className='hidden xl:flex gap-11'>
              <a className='text-[18px] leading-[22.5px] text-white' href="#">Services</a>
              <a className='text-[18px] leading-[22.5px] text-white' href="#">Projects</a>
              <a className='text-[18px] leading-[22.5px] text-white' href="#">About</a>
            </div>
            <div className='xl:relative right-[70px]'>
              <img className='md:w-[31px] xl:w-[39px]' src="/assets/MobileHeader2Webdoors.svg" alt="Main" />
            </div>
            <div className='xl:flex xl:gap-8'>
            <img className='hidden xl:flex' src="/assets/DesktopHeader.svg" alt="" />
            <img src="/assets/MobileHeader3Webdoors.svg" alt="Nav" />
            </div>
        </section>
    </header>
    </>
  )
}

export default Header