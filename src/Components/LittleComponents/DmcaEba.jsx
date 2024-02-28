import React from 'react'

const DmcaEba = ({Dmca2,Eba2,Paragraph}) => {
  return (
    <>
    <section className='flex flex-col  items-center md:flex-row md:items-center md:justify-center relative md:top-[60px] md:mb-[120px] md:gap-[175px] medium5 xl:hidden'>
            <div className='flex items-center pt-[20.65px] gap-[20.9px] relative right-[55px] md:order-2 md:right-0' >
                <img className='md:w-[100px]' src={Dmca2} alt="Dmca" />
                <img className='md:w-[91px]' src={Eba2} alt="Eba" />
            </div>
            <div className='pt-[20.13px] pb-[15px] relative right-[10px] md:order-1 md:right-0 md:top-2 xl:hidden'>
                <h2 className='text-[16px] leading-[18.75px] text-[gray]'>{Paragraph}</h2>
            </div>
        </section>
    </>
  )
}

export default DmcaEba