import React,{useContext} from 'react'
import AllContext from '../../store/Allcontext'
import BannerImage from '../components/BannerImage'

export default function Hero({ImageUrls}) {
  const { sliderIndex,setSliderIndex } = useContext(AllContext)



  const circleList = ImageUrls.map((item,key)=>{
    return <span key={key} className={`text-xs mx-2 ${key===sliderIndex?"text-[#202123]":""}`}> 
      <i className={`${key === sliderIndex?"fa-solid":"fa-regular"} fa-circle`}></i>
    </span>
  })
  const handleClick = (bool)=>{
    if (bool){
        if(sliderIndex === 4){setSliderIndex(0)}
        else{setSliderIndex((prev=>prev+1))}
    }
    else{
      if(sliderIndex === 0){setSliderIndex(4)}
      else(setSliderIndex(prev=>prev -1 ))
    }
  }
  return (
    <section className='cont w-full my-4 pb-8 overflow-hidden md:pt-10'>
      <div className='sm:-mt-8'>
      <BannerImage text={"OpenAI Images"}/>
      </div>
        <div style={{backgroundImage:`url(${ImageUrls[sliderIndex].url})`}}
        className='w-[250px] h-[300px] sm:w-[270px] mx-auto border lg:w-[300px] -mt-4 rounded-2xl overflow-hidden image-shadow relative bg-center bg-cover duration-500'>
            <button className='px-2 py-2'><span className='fa fa-angle-left left-2   top-[48%] text-white text-xl absolute' onClick={()=>handleClick(false)}></span></button>
            <button className='px-2 py-2'><span className='fa fa-angle-right right-2 top-[48%] text-white text-xl absolute' onClick={()=>{handleClick(true)}} ></span></button>
        </div>
        <div className='w-[250px] sm:w-[270px] mx-auto text-center'>
          {circleList}
        </div>
    </section>
  )
}
