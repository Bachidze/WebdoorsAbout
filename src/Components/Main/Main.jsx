import React from 'react'
import './Main.css'
const Main = () => {
  return (
    <>
      <main className='w-[95%] pt-[50px] max-w-[1920px] m-[auto] md:w-[90%] md:pt-[61px]'>
        <section className='flex flex-col justify-center items-center'>
            <div className='flex  items-center pb-[7px] pl-[69px]'>
                <div className='border h-[7px] w-[1px] bg-white md:border-[#8F8CEF] md:h-[9px]'></div>
                <div className='border  w-[67px] md:w-[77px] md:border-[#8F8CEF]'></div>
                <div className='border w-[7px] h-[7px] rounded-[50%] md:border-[#8F8CEF] md:w-[9px] md:h-[9px]'></div>
            </div>
            <div className='flex items-center gap-2'>
                <h2 className='text-[14px] text-white leading-[17.5px] font-normal md:hidden'>Services</h2>
                <h2 className='text-[18px] text-white leading-[22.5px] font-normal pt-[9.69px]'>We are Webdoors</h2>
                <img className='pt-[3px] md:hidden' src="/assets/MobilePurpleServicesWebdoors.svg" alt="PurpleServices" />
            </div>
        </section>
        <section className='pt-[37.65px] break-all word'>
            <p className='text-[16px] text-white leading-[20px] md:text-[18px] md:leading-[22.5px] md:max-w-[768px] md:m-auto'>
                Lorem ipsum dolor sit amet, consectetur adipiscing Nisi,
                 condimentum scelerisque viverra vestibulum.Augue augue elem vitae cras  tempor,
                   tristique lorem cras porttitor  Ipsum lectus pretium rho Lorem ipsum dolor sit amet,
                    consectetur adipiscing Nisi, condimentum scelerisque viverra vestibulum. Augue augue
                     elem vitae cras tempor,  tristique lorem cras porttitor Ipsum lectus pretium
                      rhoLorem ipsum dolor sit amet, consectetur adipiscing Nisi, condimentum scelerisque
                       viverra vestibulum. Augue augue elem vitae cras tempor, tristique lorem cras porttitor
                         Ipsum lectus pretium rho 
            </p>
        </section>
        <section className='flex flex-wrap justify-center pt-[50px] gap-[60px] md:gap-[70px] md:pt-[100px] maingrid xl:gap-[80px] medium'>


            <div className='flex flex-col items-center justify-center irakli'>
                <img className='rounded-[50%]' src="/assets/IrakliWebdoors.svg" alt="irakli" />
                <h2 className='text-white text-[13.1px] font-bold leading-[17.5px] pt-[15.41px]'>Irakli Shalamberidze</h2>
                <p className='text-white text-[12px] font-bold leading-[15px] pt-[2.8px]'>Full-stack Dev</p>
            </div>
            <div className='flex flex-col items-center justify-center giorgi'>
                <img className='rounded-[50%]' src="/assets/Giorgi.svg" alt="giorgi" />
                <h2 className='text-white text-[13.1px] font-bold leading-[17.5px] pt-[15.41px]'>Giorgi Jalali</h2>
                <p className='text-white text-[12px] font-bold leading-[15px] pt-[2.8px] text-center'>Front-end Developer</p>
            </div>
            <div className='flex flex-col items-center justify-center daviti'>
                <img className='rounded-[50%]' src="/assets/Daviti.svg" alt="Daviti" />
                <h2 className='text-white text-[13.1px] font-bold leading-[17.5px] pt-[15.41px]'>Davit Gobronidze</h2>
                <p className='text-white text-[12px] font-bold leading-[15px] pt-[2.8px]'>Ux&Ui</p>
            </div>
            <div className='flex flex-col items-center justify-center bidzina'>
                <img className='rounded-[50%]' src="/assets/Bidzina.svg" alt="Bidzina" />
                <h2 className='text-white text-[13.1px] font-bold leading-[17.5px] pt-[15.41px]'>Bidzina Tabidze</h2>
                <p className='text-white text-[12px] font-bold leading-[15px] pt-[2.8px]'>Full-stack Dev</p>
            </div>
            <div className='flex flex-col items-center justify-center dachi'>
                <img className='rounded-[50%]' src="/assets/Dachi.svg" alt="Dachi" />
                <h2 className='text-white text-[13.1px] font-bold leading-[17.5px] pt-[15.41px]'>Dachi Janelidze</h2>
                <p className='text-white text-[12px] font-bold leading-[15px] pt-[2.8px]'>Product Owner</p>
            </div>
            <div className='flex flex-col items-center justify-center ana'>
                <img className='rounded-[50%]' src="/assets/Ana.svg" alt="Ana" />
                <h2 className='text-white text-[13.1px] font-bold leading-[17.5px] pt-[15.41px]'>Ana Gergauli</h2>
                <p className='text-white text-[12px] font-bold leading-[15px] pt-[2.8px]'>Q/A Tester</p>
            </div>
            <div className='flex flex-col items-center justify-center sandro'>
                <img className='rounded-[50%]' src="/assets/Sandro.svg" alt="Sandro" />
                <h2 className='text-white text-[13.1px] font-bold leading-[17.5px] pt-[15.41px] text-center'>Sandro Suqnidze</h2>
                <p className='text-white text-[12px] font-bold leading-[15px] pt-[2.8px]'>Full-stack Dev</p>
            </div>
            <div className='flex flex-col items-center justify-center iza'>
                <img className='rounded-[50%]' src="/assets/Iza.svg" alt="Iza" />
                <h2 className='text-white text-[13.1px] font-bold leading-[17.5px] pt-[15.41px]'>Iza Tchutkerashvili</h2>
                <p className='text-white text-[12px] font-bold leading-[15px] pt-[2.8px]'>Accoutant</p>
            </div>
        </section>
        <section className='flex flex-col justify-center items-center pt-[100.29px] md:pb-[130px] md:pt-[120px]'>
            <h1 className='text-[22px] leading-[27.5px] font-normal text-white pb-[25px]'>Wish to join the team?</h1>
            <p className='text-[18px] leading-[22.5px]  text-white text-center pb-[50px] break-all word medium2'>
                We’re looking for people who embrace innovation, want
                to do excellent things, and enjoy bad puns.
            </p>
            <div className='pl-[81px] pr-[81px] pt-[15px] pb-[15px] w-[250px] rounded-[15px] bg-gradient-to-r from-custom-blue-90 to-custom-blue-33'>
                <a className='text-[15px] text-white font-bold leading-[20px]' href="#">Get Started</a>
            </div>
        </section>

    </main>

    </>
  )
}

export default Main