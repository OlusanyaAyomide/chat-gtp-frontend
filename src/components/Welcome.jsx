import React,{useContext} from 'react'
import AllContext from '../../store/Allcontext'


export default function Welcome({ Allinfo,setInputValue }) {
  // const {setInputValue} =useContext(AllContext)

  const handleToggle=(value)=>{
    setInputValue(value)
  }

  const MappedList = Allinfo.map((item,key)=>{
  
    const sectionList = item.text.map((items,keys)=>{
      if (key === 0){
        return(
          <div className='my-4 px-2  mx-4 md:mx-0 bg-[#F7F7F8] rounded' key={keys}>
            <button className='-lg text-center leading-[20px] py-4 md:py-3 w-full ' onClick={()=>{handleToggle(items)}}
          key={keys}>{items}</button>
          </div>
   
        )
      }
      else{
        return(
          <div className='my-4 px-2 py-4 md:py-3 mx-4 md:mx-0 bg-[#F7F7F8] rounded-lg text-center leading-[20px]' key={keys}>{items}</div>
        )
      }
    })

    return(
      <div className='w-full mx-auto sm:w-6/12 md:w-4/12 px-2 my-2 md:my-0' key={key}>
        <div>
            <span className={`block mb-2 text-center text-2xl ${item.icon}`}></span>
            <span className="block mb-2 text-lg text-center">{item.header}</span>
        </div>
        <div>
            {sectionList}
        </div>
      </div>
    )
  })

  return (
    <div className='w-full cont my-2 flex flex-wrap lg:w-11/12 lg:mx-auto text-[#343541]'>
        {MappedList}
    </div>
  )
}
