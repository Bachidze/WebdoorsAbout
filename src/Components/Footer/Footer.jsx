import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer className='w-[95%] m-[auto] max-w-[1920px]'>
        <section className='flex flex-col justify-center items-center pt-[100px]'>
            <img src="/assets/Webdoors.svg" alt="" />
            <div className='flex gap-[18px] pt-[21.14px] pb-[5.35px]'>
                <img src="/assets/BeWebdoors.svg" alt="Be" />
                <img src="/assets/InstagramWebdoors.svg" alt="Instagram" />
                <img src="/assets/TwitterWebdoors.svg" alt="Twitter" />
                <img src="/assets/LinkdeinWebdoors.svg" alt="Linkdein" />
                <img src="/assets/FacebookWebdoors.svg" alt="Facebook" />
                <img src="/assets/YoutubeWebdoors.svg" alt="Youtube" />
                <img src="/assets/BasketballWebdoors.svg" alt="Basketball" />
                <img src="/assets/GithubWebdoors.svg" alt="GitHub" />
            </div>
            <div className='flex items-center relative left-[5px]'>
                <div className='border-2 w-[10px] h-[10px] rounded-[50%]'></div>
                <div className='border w-[320px]'></div>
                <div className='border h-[10px] w-[2px] bg-white'></div>
            </div>
        </section>
        <section className='flex flex-col  items-center'>
            <div className='flex items-center pt-[20.65px] gap-[20.9px] relative right-[55px]'>
                <img src="/assets/Dmca.comWebdoors.svg" alt="Dmca" />
                <img src="/assets/EbaWebdoors.svg" alt="Eba" />
            </div>
            <div className='pt-[20.13px] pb-[15px] relative right-[10px]'>
                <h2 className='text-[16px] leading-[18.75px] text-[gray]'>Copyright © 2018-2022 all rights reserved</h2>
            </div>
        </section>
    </footer>
  )
}

export default Footer