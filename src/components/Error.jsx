import React from 'react'
import { useEffect } from 'react'

export default function Error({setIsError}) {


  useEffect(()=>{
      setTimeout(()=>{setIsError(false)},5000)
  },[])
  return (
    <div className=' w-full md:w-fit z-20 text-center md:text-end fixed top-16 md:top-1 right-2'>
    <span className='text-base z-20 text-red-500 font-semibold md:top-2'>Something went wrong,try again</span>
</div>
  )
}
