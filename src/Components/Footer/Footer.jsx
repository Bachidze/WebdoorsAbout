import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer className='w-[95%] m-[auto] max-w-[1920px]'>
        <section className='flex flex-col justify-center items-center pt-[100px]'>
            <img className='md:w-[252px]' src="/assets/Webdoors.svg" alt="MainImg" />
            <div className='flex gap-[18px] pt-[21.14px] pb-[5.35px] md:gap-10 md:pt-[64px] md:pb-10 medium3'>
                <img className='md:w-[70px]' src="/assets/BeWebdoors.svg" alt="Be" />
                <img className='md:w-[45.72px]' src="/assets/InstagramWebdoors.svg" alt="Instagram" />
                <img className='md:w-[45.8px]' src="/assets/TwitterWebdoors.svg" alt="Twitter" />
                <img className='md:w-[46.55px]' src="/assets/LinkdeinWebdoors.svg" alt="Linkdein" />
                <img className='md:w-[47px]' src="/assets/FacebookWebdoors.svg" alt="Facebook" />
                <img className='md:w-[60px]' src="/assets/YoutubeWebdoors.svg" alt="Youtube" />
                <img className='md:w-[45px]' src="/assets/BasketballWebdoors.svg" alt="Basketball" />
                <img className='md:w-[44.89px]' src="/assets/GithubWebdoors.svg" alt="GitHub" />
            </div>
            <div className='flex items-center relative left-[5px] md:left-[97px] medium4'>
                <div className='border-2 w-[10px] h-[10px] rounded-[50%]'></div>
                <div className='border w-[320px] md:w-[473px] medium4'></div>
                <div className='border h-[10px] w-[2px] bg-white'></div>
            </div>
        </section>
        <section className='flex flex-col  items-center md:flex-row md:items-center md:justify-center relative md:top-[60px] md:mb-[120px] md:gap-[175px] medium5'>
            <div className='flex items-center pt-[20.65px] gap-[20.9px] relative right-[55px] md:order-2 md:right-0' >
                <img className='md:w-[100px]' src="/assets/Dmca.comWebdoors.svg" alt="Dmca" />
                <img className='md:w-[91px]' src="/assets/EbaWebdoors.svg" alt="Eba" />
            </div>
            <div className='pt-[20.13px] pb-[15px] relative right-[10px] md:order-1 md:right-0 md:top-2'>
                <h2 className='text-[16px] leading-[18.75px] text-[gray]'>Copyright © 2018-2022 all rights reserved</h2>
            </div>
        </section>
    </footer>
  )
}

export default Footer