import React,{useState,useEffect} from 'react'
import aiLogo from "../assets/ailogo.png"
import {saveAs} from "file-saver"
import TypeWriter from './TypeWriter'

export default function ImageChat({chatList}) {
  
  const [imageIndex,setImageIndex] = useState(0)

  useEffect(()=>{
    window.scrollTo(0,window.innerHeight)
  },[chatList])

  const Allchat = chatList.map((item,key)=>{
    let circleList;
    if (Array.isArray(item.response)){
      circleList = item.response.map((item,key)=>{
        return <span key={key} className={`text-xs mx-2 ${key===imageIndex?"text-[#202123]":""}`}> 
          <i className={`${key === imageIndex?"fa-solid":"fa-regular"} fa-circle`}></i>
        </span>
      })
    }


    const downloadImage = ()=>{
      console.log("heree")
       saveAs(item.response[imageIndex].url,`image-${Date.now()}.jpg`)
    }

    const handleClick = (bool)=>{
      if (bool){
          if(imageIndex === 1){setImageIndex(0)}
          else{setImageIndex((prev=>prev+1))}
      }
      else{
        if(imageIndex === 0){setImageIndex(1)}
        else(setImageIndex(prev=>prev -1 ))
      }
    }
    return(
        <div className={`${key > 0?"mt-4":""}`} key ={key}>
          {item.request !== "" && <div className='py-8 border-b flex items-center px-3 md:px-4 lg:px-32'>
            <div className='w-[53px] h-[50px] p-1'>
              <div className='flex items-center h-full justify-center bg-[#5436DA] rounded-sm'>
              <span className='fa-regular fa-user text-white'></span>
              </div>

            </div>
            <div className='w-full pl-4'>{item.request}</div>
          </div>}
          <div className='py-8 flex px-3 md:px-4 lg:px-32  bg-[#F7F7F8]'>
            <div className='w-[53px] h-[50px] p-2'>
              <div className='h-full w-full bg-[#10A37F] rounded-sm relative bottom-2'>
               <img src={aiLogo} alt="Ai" className='h-full w-full object-contain'/>
              </div>  
            </div>
            {Array.isArray(item.response) && <div className='w-full sm:py-4'>
                <div className='w-9/12 sm:w-[300px] md:w-[280px] lg:w-[350px] mx-auto h-[400px] relative bg-center bg-cover rounded-2xl duration-500' style={{backgroundImage:`url(${item.response[imageIndex].url})`}}>
                <button className='px-2 py-2'><span className='fa fa-angle-left left-2   top-[48%] text-white text-xl absolute' onClick={()=>handleClick(false)}></span></button>
                <button className='px-2 py-2'><span className='fa fa-angle-right right-2 top-[48%] text-white text-xl absolute' onClick={()=>{handleClick(true)}} ></span></button>     
                </div>
                <div className='text-center relative'>{ circleList}
                <button className='  pb-1 absolute  -right-1 sm:w-[300px] md:w-[280px] lg:w-[350px]' onClick={downloadImage}>
                <span className=' fa fa-eye mr-16 text-lg'></span>
                </button>
                </div>
            </div>}
            {!Array.isArray(item.response) && <TypeWriter text ={item.response}/>}
          </div>
        </div>
    )
  }) 


  return (
  <section className='w-full mx-auto text-[#343541] mb-12 mt-16 md:mt-0'>
    {Allchat}
 </section>
  )
}
