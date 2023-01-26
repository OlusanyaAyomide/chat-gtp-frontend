import React,{Fragment,useState,useContext} from 'react'
import NavBar from './components/NavBar'
import Body from './components/Body'
import AllContext from '../store/Allcontext'

export default function HomePage() {
  const {setInputValue,setisNew,setChatList,chatList,textNavItems} = useContext(AllContext)
  const[toggle,settoggle] = useState(false)
  return (
        <Fragment>
          <div className='flex relative'>
            <div className='hidden md:block w-full bg-[#202123] md:w-4/12 lg:w-3/12 '>
            <NavBar lists ={textNavItems} toggle={settoggle} setInputValue = {setInputValue} setisNew ={setisNew} setChatLists={setChatList} chatList={chatList}/>
            </div>
              <div className='w-full md:w-8/12 lg:w-9/12 relative z-10'><Body toggle={settoggle}/>
              </div>
            </div>
            {toggle &&<div className='absolute md:hidden inset-0 w-full z-10'>
                <NavBar lists ={textNavItems}  toggle={settoggle} setInputValue = {setInputValue} setisNew ={setisNew} setChatLists={setChatList} chatList={chatList}/>
            </div>}
       
        </Fragment>
  )
}
