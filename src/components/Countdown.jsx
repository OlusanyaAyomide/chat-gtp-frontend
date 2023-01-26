import React,{useEffect,useState,useContext} from 'react'

export default function Countdown({timer,setIsCountingDown}) {
  const [time,setTime] = useState(timer)
  useEffect(()=>{
    if(time ===0){
      setIsCountingDown(false)
    }
    setTimeout(()=>{
      setTime((prev=>prev-1))
    },1000)

  },[time])
  return (
    <div className='md:w-fit py-2 bg-white  z-30 text-center md:text-end fixed top-16 md:top-1 right-2'>
        <span className='text-base z-20 text-[#343541] font-semibold md:top-2'>To many requests,kindly wait for {time} seconds</span>
    </div>

  )
}
