import React from 'react'

const MainParagraph = ({maindesc}) => {
  return (
    <>
    <section className='pt-[37.65px] break-all word'>
            <p className='text-[16px] text-white leading-[20px] md:text-[18px] md:leading-[22.5px] md:max-w-[1200px] md:m-auto xl:text-[20px] xl:leading-[25px] xl:text-center xl:max-w-[1021px] xl:mb-[90px]'>
                {maindesc}
            </p>
        </section>
    </>
  )
}

export default MainParagraph