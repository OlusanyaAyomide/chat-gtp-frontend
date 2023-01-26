import React,{useState,useContext} from 'react'


export default function Input({inputValue,setInputValue,setisNew,setlocallist,setisloading}) {
  const handleSubmit = (event)=>{
    if (inputValue === ""){return}
    if(event.key === "Enter" || event === "click"){
      setlocallist((prev)=>{
        return[...prev,{request:inputValue,response:"loading..."}]
      })
      setisNew(false)
      setisloading(true)
    }

    }
  

  return (
    <div className='fixed bottom-0 w-full bg-white md:right-0 px-2 py-3 md:w-8/12 lg:w-9/12 text-[#343541] '>
        <div className='relative w-full'>
         <input type="text" className='w-full px-2 rounded-lg py-3  pl-2 pr-4 input-shadow border outline-none border-[#E5E5E5]' value={inputValue} onChange={(event)=>{
          setInputValue(event.target.value)
         }}
         onKeyDown={handleSubmit}
         />
         <button className="absolute right-0  px-6 py-2" onClick={()=>{handleSubmit("click")}}>
         <span className='fa fa-paper-plane text-xl'></span>
         </button>
   
        </div>
   
    </div>
  )
}
