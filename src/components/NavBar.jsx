import React from 'react'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import AllContext from '../../store/Allcontext'
import moment from 'moment'

const scroll ={
  initial:{x:-500},
  animate:{x:0,transition:{duration:0.32,type:"tween"}},
}

export default function NavBar({toggle,setInputValue,setisNew,lists,setChatLists,chatList}){
  const {onHomePage,setOnHomePage} = useContext(AllContext)
  const handleClick=(value)=>{
    toggle(false)
    setInputValue(value)
  }
  const resetScreen =()=>{
    setisNew(true)
    toggle(false)
  }

  const timeAgo=(value)=>{
    return(moment(value).fromNow())
  }

  const clearConversation=()=>{
      setChatLists([{request:"",response:"Hi there,what can i do for you today"}])
      toggle(false)
  }

  const searchList = lists.map((item,key)=>{
    return(
      <div className='md:my-1 rounded-lg overflow-hidden px-3 py-4 mx-1 items-center text-gray-300 pr-2 relative onhover fade cursor-pointer' key={key} onClick={()=>{handleClick(item.text)}}>
        <button className='flex w-full'>
        <span className='fa-regular fa-message mr-4 text-lg '></span>
        <span className='whitespace-nowrap'>{item.text}</span>
        </button>
        <span className='block text-gray-400 text-xs mr-2 text-end'>{timeAgo(item.time)}</span>
      </div>
    )
  },[])
  return (
    <section className='w-full bg-[#80828F] text-white'>
      <motion.div className='w-8/12 sm:w-6/12 md:w-full min-h-screen bg-[#202123] border border-[#202123] relative' variants={scroll} initial="initial" animate="animate">
        <div className='my-2 mx-1 p-3 border-[0.5px] border-gray-200/20 relative rounded-lg overflow-hidden onhover cursor-pointer' onClick={resetScreen}>
          <span className='text-xl mr-4'>+</span>
          <span>{onHomePage?"New Chat":"Home"}</span>
        </div>

        <div className='mt-4 h-[60vh] overflow-auto pb-2 border-b border-gray-200/20'>
        {lists.length > 0 && <div>
            {searchList}
          </div>}
          {lists.length === 0 && <div className='h-full w-full flex items-center justify-center'>
              <div className='h-[20px] w-[20px] border-[2px] border-dashed rounded-full animate animate-spin'></div>
            </div>}
        </div>
        <div>
          {/* ROUTER BUTTON */}
            <button className='w-full mt-4 px-4 relative onhover rounded-lg text-left' onClick={()=>setOnHomePage((prev=>!prev))}
            ><span className="mr-4 fa fa-image py-3 mb-2"></span><span>{onHomePage?"AI Images":"chatGTP"}</span></button>
            {chatList.length > 0 && <button className='w-full mt-4 px-4 relative onhover rounded-lg text-left' onClick={clearConversation}
            ><span className="mr-4 fa fa-trash text-lg py-3 mb-2"></span><span>Clear Conversations</span></button>}
        </div>
        <button className='absolute top-2 -right-16 py-2 px-3 rounded-lg hover:border border-white/70 md:hidden' onClick={()=>toggle(false)}>
          <span className='fa fa-window-close  text-5xl font-[100]'></span>
        </button>
 
      </motion.div>
    </section>
  )
}
