import React,{useState,useEffect} from 'react'
import aiLogo from "../assets/ailogo.png"
import TypeWriter from './TypeWriter'

export default function ChatBot({chatDemo}) {

  
  useEffect(()=>{
    window.scrollTo(0,window.innerHeight)
  },[chatDemo])
  const Allchat = chatDemo.map((item,key)=>{
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
               <img src={aiLogo} alt="Ai" className='h-full w-full objecnt-contain'/>
              </div>  
            </div>
            <div className='w-full'>
            {chatDemo.length === key + 1 && <TypeWriter text ={item.response}/>}
            {chatDemo.length !== key + 1 &&<div className='w-full pl-4 line-height'>{item.response}</div>}
            </div>
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
