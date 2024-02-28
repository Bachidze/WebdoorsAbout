import React from 'react'

const Getstarted = ({title,desc2,buttontext}) => {
  return (
    <>
     <section className='flex flex-col justify-center items-center pt-[100.29px] md:pb-[130px] md:pt-[120px] xl:pt-[130px]'>
            <h1 className='text-[22px] leading-[27.5px] font-normal text-white pb-[25px] '>{title}</h1>
            <p className='text-[18px] leading-[22.5px]  text-white text-center pb-[50px] break-all word medium2 xl:text-[19px] xl:w-[510px]'>
                {desc2}
            </p>
            <div className='pl-[81px] pr-[81px] pt-[15px] pb-[15px] w-[250px] rounded-[15px] bg-gradient-to-r from-custom-blue-90 to-custom-blue-33'>
                <a className='text-[15px] text-white font-bold leading-[20px]' href="#">{buttontext}</a>
            </div>
        </section>
    </>
  )
}

export default Getstarted