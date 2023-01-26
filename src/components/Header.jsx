import React from 'react'
import { useContext } from 'react'
import AllContext from '../../store/Allcontext'

export default function Header({toggle}) {
  const {setisNew,onHomePage,setOnHomePage,setIsImageNew} = useContext(AllContext)
  const resetScreen = ()=>{
    if (onHomePage){
      setisNew(true)
    }
    else{
      setIsImageNew(true)
    }

  }
  return (
<div className='flex md:hidden w-full fixed top-0  justify-between cont py-1 items-center text-white bg-[#343541]  z-30'>
    <button className='py-1 px-3' onClick={()=>{toggle(true)}}>
    <span className='fa fa-bars text-3xl text-gray-300 hover:text-black '></span>
    </button>
    <button className='p-3 rounded-lg relative onhover overflow-hidden' onClick={()=>setOnHomePage((prev=>!prev))}>
      <span className='text-gray-300 text-based'>{onHomePage?"Ai Images":"chatGTP"}</span>
    </button>
    <button className='p-3 rounded-lg relative onhover overflow-hidden' onClick={resetScreen} >
      <span className='text-gray-300 text-based'>{onHomePage?"New Chat":"Home"}</span>
    </button>
    <button>
        <span className='fa fa-plus text-3xl text-gray-300 py-1 px-3'></span>
    </button>
</div>
  )
}
