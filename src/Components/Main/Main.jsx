import React from 'react'
import './Main.css'
const Main = () => {
  return (
    <>
      <main className='w-[95%] pt-[50px] max-w-[1920px] m-[auto]'>
        <section className='flex flex-col justify-center items-center'>
            <div className='flex  items-center pb-[7px]'>
                <div className='border h-[7px] w-[1px] bg-white'></div>
                <div className='border w-[67px]'></div>
                <div className='border w-[7px] h-[7px] rounded-[50%]'></div>
            </div>
            <div className='flex items-center gap-2'>
                <h2 className='text-[14px] text-white leading-[17.5px] font-normal'>Services</h2>
                <img className='pt-[3px]' src="/assets/MobilePurpleServicesWebdoors.svg" alt="PurpleServices" />
            </div>
        </section>
        <section className='pt-[37.65px]'>
            <p className='text-[16px] text-white leading-[20px]'>
                <span className='word'>Lorem ipsum dolor sit amet, consectetur</span> adipiscing Nisi,
                 condimentum scelerisque viverra vestibulum. <span className='word1'>Augue augue elem vitae cras </span> <span className='word2'> tempor,
                   tristique lorem cras porttitor  Ipsum</span> <span className='word3'>lectus pretium rho Lorem ipsum dolor sit</span> amet,
                    consectetur <span className='word4'>adipiscing Nisi, condimentum</span> scelerisque <span className='word5'>viverra vestibulum. Augue</span> augue
                     elem <span className='word6'>vitae cras tempor,  tristique lorem</span> cras porttitor  <span className='word7'>Ipsum lectus pretium
                      rhoLorem</span> ipsum dolor <span className='word8'>sit amet, consectetur adipiscing</span> Nisi, condimentum <span className='word9'>scelerisque
                       viverra</span> vestibulum. <span className='word10'>Augue augue elem vitae cras tempor,</span>  tristique lorem cras porttitor
                         Ipsum lectus pretium rho 
            </p>
        </section>
        <section className='flex flex-wrap justify-center pt-[50px] gap-[50px]'>


            <div className='flex flex-col items-center justify-center'>
                <img className='rounded-[50%]' src="/assets/IrakliWebdoors.svg" alt="irakli" />
                <h2 className='text-white text-[14px] font-bold leading-[17.5px] pt-[15.41px]'>Irakli Shalamberidze</h2>
                <p className='text-white text-[12px] font-bold leading-[15px] pt-[2.8px]'>Full-stack Dev</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img className='rounded-[50%]' src="/assets/Giorgi.svg" alt="giorgi" />
                <h2 className='text-white text-[14px] font-bold leading-[17.5px] pt-[15.41px]'>Giorgi Jalali</h2>
                <p className='text-white text-[12px] font-bold leading-[15px] pt-[2.8px]'>Front-end Developer</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img className='rounded-[50%]' src="/assets/Daviti.svg" alt="Daviti" />
                <h2 className='text-white text-[14px] font-bold leading-[17.5px] pt-[15.41px]'>Davit Gobronidze</h2>
                <p className='text-white text-[12px] font-bold leading-[15px] pt-[2.8px]'>Ux&Ui</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img className='rounded-[50%]' src="/assets/Bidzina.svg" alt="Bidzina" />
                <h2 className='text-white text-[14px] font-bold leading-[17.5px] pt-[15.41px]'>Bidzina Tabidze</h2>
                <p className='text-white text-[12px] font-bold leading-[15px] pt-[2.8px]'>Full-stack Dev</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img className='rounded-[50%]' src="/assets/Dachi.svg" alt="Dachi" />
                <h2 className='text-white text-[14px] font-bold leading-[17.5px] pt-[15.41px]'>Dachi Janelidze</h2>
                <p className='text-white text-[12px] font-bold leading-[15px] pt-[2.8px]'>Product Owner</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img className='rounded-[50%]' src="/assets/Ana.svg" alt="Ana" />
                <h2 className='text-white text-[14px] font-bold leading-[17.5px] pt-[15.41px]'>Ana Gergauli</h2>
                <p className='text-white text-[12px] font-bold leading-[15px] pt-[2.8px]'>Q/A Tester</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img className='rounded-[50%]' src="/assets/Sandro.svg" alt="Sandro" />
                <h2 className='text-white text-[14px] font-bold leading-[17.5px] pt-[15.41px]'>Sandro Suqnidze</h2>
                <p className='text-white text-[12px] font-bold leading-[15px] pt-[2.8px]'>Full-stack Dev</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img className='rounded-[50%]' src="/assets/Iza.svg" alt="Iza" />
                <h2 className='text-white text-[14px] font-bold leading-[17.5px] pt-[15.41px]'>Iza Tchutkerashvili</h2>
                <p className='text-white text-[12px] font-bold leading-[15px] pt-[2.8px]'>Accoutant</p>
            </div>
        </section>
        <section className='flex flex-col justify-center items-center pt-[100.29px]'>
            <h1 className='text-[22px] leading-[27.5px] font-normal text-white pb-[25px]'>Wish to join the team?</h1>
            <p className='text-[18px] leading-[22.5px]  text-white text-center pb-[50px]'>
                <span className='word12'>We’re looking for people who embrace </span> innovation, want
                to do <span className='word13'>excellent things, and enjoy bad puns.</span>
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