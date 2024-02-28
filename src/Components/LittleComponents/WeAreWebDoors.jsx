import React from 'react'

const WeAreWebDoors = ({title4,desc4}) => {
  return (
    <>
     <section className='flex flex-col justify-center items-center xl:mt-[100px] xl:mb-[40px]'>
            <div className='flex  items-center pb-[7px] md:pl-[69px] xl:pl-[110px]'>
                <div className='border h-[7px] w-[1px] bg-white md:border-[#8F8CEF] md:h-[9px]'></div>
                <div className='border  w-[67px] md:w-[77px] md:border-[#8F8CEF] xl:w-[147px]'></div>
                <div className='border w-[7px] h-[7px] rounded-[50%] md:border-[#8F8CEF] md:w-[9px] md:h-[9px] xl:w-[10px] xl:h-[10px] xl:border-2'></div>
            </div>
            <div className='flex items-center gap-2'>
                <h2 className='text-[14px] text-white leading-[17.5px] font-normal md:hidden'>{title4}</h2>
                <h2 className='hidden md:flex text-[18px] text-white leading-[22.5px] font-normal pt-[9.69px] xl:text-[32px] xl:leading-[40px] xl:mt-[14px]'>{desc4}</h2>
                <img className='pt-[3px] md:hidden' src="/assets/MobilePurpleServicesWebdoors.svg" alt="PurpleServices" />
            </div>
        </section>
    </>
  )
}

export default WeAreWebDoors