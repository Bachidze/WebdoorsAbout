import React from 'react'
import './Main.css'
import Avatars from '../LittleComponents/Avatars'
import { data, data2, data3, data4 } from '../../data'
import Getstarted from '../LittleComponents/Getstarted'
import MainParagraph from '../LittleComponents/MainParagraph'
import WeAreWebDoors from '../LittleComponents/WeAreWebDoors'
const Main = () => {
  return (
    <>
      <main className='w-[95%] pt-[50px] max-w-[1920px] m-[auto] md:w-[90%] md:mt-[61px]'>

          {data4.map(el4 => (
                <WeAreWebDoors 
                title4={el4.title4}
                desc4={el4.desc4}
                />
          ))}
            {data3.map(el3 => (
                <MainParagraph 
                maindesc={el3.maindesc}
                />
            ))}

        <section className='flex flex-wrap  justify-between m-auto max-w-[1200px] pt-[50px] gap-[40px]  md:mt-[60px] maingrid xl:w-[80%] xl:max-w-[1021px] xl:gap-[60px] xl:m-auto medium'>
            
            {data.map(el => (
            <div className={`${el.className}`}>
                <Avatars 
                Url={el.Url}
                name={el.name}
                desc={el.desc}
                className={el.className}
                id={el.id}
            />
            </div>
            ))}

        </section>

            {data2.map(el2 => (
                <Getstarted 
                title={el2.title}
                desc2={el2.desc2}
                buttontext={el2.buttontext}
                />
            ))}

    </main>

    </>
  )
}

export default Main