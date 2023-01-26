import React,{useContext,Fragment,useState} from 'react'
import NavBar from './components/NavBar'
import { imageConstants } from './assets/constants'
import AllContext from '../store/Allcontext'
import ImgBody from './imgcomp/ImgBody'

export default function ImageMain() {
  const [toggle,settoggle] = useState(false)
  const {setImageInput,setIsImageNew,setImageChatList,imageChatList,imageNavItems} = useContext(AllContext)
  return (
    <Fragment>
      <div className='flex relative'>
        <div className='hidden md:block w-full bg-[#202123] md:w-4/12 lg:w-3/12 '>
        <NavBar lists ={imageNavItems} toggle={settoggle} setInputValue = {setImageInput} setisNew ={setIsImageNew} chatList={imageChatList} setChatLists={setImageChatList}/>
        </div>
          <div className='w-full md:w-8/12 lg:w-9/12 relative z-10'><ImgBody toggle={settoggle}/>
          </div>
        </div>
        {toggle &&<div className='absolute md:hidden inset-0 w-full z-10'>
            <NavBar lists ={imageNavItems} toggle={settoggle} setInputValue = {setImageInput} setisNew ={setIsImageNew} chatList={imageChatList} setChatLists={setImageChatList}/>
        </div>}
   
    </Fragment>
)
}
