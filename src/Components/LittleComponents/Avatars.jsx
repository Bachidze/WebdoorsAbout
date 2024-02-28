import React from 'react'

const Avatars = ({Url,name,desc,className}) => {
  return (
    <>
    <div className='flex flex-col items-center justify-center'>
                <img  className='rounded-[50%] w-[115.58px] h-[115.58px] object-cover xl:w-[187.69px] xl:h-[187.69px]' src={Url} alt="irakli" />
                <h2 className='text-white text-[13.1px] font-bold leading-[17.5px] pt-[15.41px] xl:text-[16px] xl:pb-[13.78px] xl:pt-[25.03px] xl:leading-[20px]'>{name}</h2>
                <p className='text-white text-[12px] font-bold leading-[15px] pt-[2.8px] xl:text-[14px] xl:leading-[17.5px]'>{desc}</p>
    </div>
    </>
  )
}

export default Avatars