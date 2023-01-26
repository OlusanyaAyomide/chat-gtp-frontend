import React,{useContext} from 'react'
import AllContext from '../../store/Allcontext'
import Header from '../components/Header'
import Hero from './Hero'
import { Aiurls } from '../assets/constants'
import { ImageInfo } from '../assets/constants'
import Welcome from '../components/Welcome'
import Input from '../components/Input'
import ImageChat from '../components/ImageChat'
import Countdown from '../components/Countdown'
import Error from '../components/Error'
import { useEffect } from 'react'
import { fetchImage} from '../../store/FetchApi'

export default function ImgBody({toggle}) {
  const {isImageNew,imageInput,setImageInput,setIsImageNew,isImageCountingDown,imageTimer,setIsImageCountingDown,imageChatList,setImageChatList,isImageChatLoading,setIsImageChatloading,setImageTimer,setIsError,isError,setImageNavItems} = useContext(AllContext) 

  useEffect(()=>{
      if(!isImageChatLoading){return}
      const textstring = "Kindly wait for the time out"
      const errorString = "Error was encountered while fetching data,try again"
      const welcome = "Hi there,what can i do for you today"
      const fetchAiImages = async ()=>{
        setImageInput("")
        const data = await fetchImage(imageInput)
          if (data.status === 200){
            const newArray =[]
            imageChatList.map((item)=>{
                if(item.response !== "loading..." &&
                 item.response !== textstring &&
                 item.response !== welcome 
                 ){
                  newArray.push(item)
                }
            })
            newArray.push(data)
            setImageNavItems(data.texts)
            setImageChatList(newArray)
            setIsImageChatloading(false)
            }
            else if (data.status === 432){
              setImageTimer(data.time)
              setIsImageCountingDown(true)
              const newArray = []
              imageChatList.map((item)=>{
                if (item.response === "loading..."){
                  newArray.push({request:item.request,response:textstring})
                }
                else{newArray.push(item)}
              })
              setImageChatList(newArray)
              setIsImageChatloading(false)
            }
            else{
              setIsError(true)
              const newArray = []
              imageChatList.map((item)=>{
                if (item.response === "loading..."){
                  newArray.push({request:item.request,response:errorString})
                }
                else{newArray.push(item)}
              })
              setImageChatList(newArray)
              setIsImageChatloading(false)
            }
      }
      fetchAiImages()

  },[isImageChatLoading])


  return (
    <div className='pb-16'>
        <Header toggle={toggle}/>
        {isImageNew && <Hero ImageUrls={Aiurls}/>}
        {isImageCountingDown && <Countdown timer={imageTimer} setIsCountingDown={setIsImageCountingDown}/>}
        {isError && <Error setIsError={setIsError}/>}
        {isImageNew && <Welcome Allinfo={ImageInfo} setInputValue={setImageInput}/>}
        {!isImageNew && <ImageChat chatList={imageChatList}/>}
        {!isImageCountingDown && <Input inputValue={imageInput} setInputValue={setImageInput} setisNew={setIsImageNew} setlocallist={setImageChatList} setisloading={setIsImageChatloading}/>}
    </div>
  )
}
