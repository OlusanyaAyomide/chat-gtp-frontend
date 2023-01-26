import React,{useContext,useEffect} from 'react'
import Header from './Header'
import AllContext from '../../store/Allcontext'
import Countdown from './Countdown'
import Welcome from './Welcome'
import Input from './Input'
import ChatBot from './ChatBot'
import Error from './Error'
import BannerImage from './BannerImage'
import { Allinfo } from '../assets/constants'
import { fetchText } from '../../store/FetchApi'



export default function Body({toggle}) {
    const {isNew,isCountingDown,inputValue,setInputValue,setisNew,chatList,setChatList,isChatloading,setIsChatloading,timer,setIsCountingDown,settimer,setIsError,isError,setTextNavItems} = useContext(AllContext)



  useEffect(()=>{
    const textstring = "Kindly wait for the time out"
    const errorString = "Error was encountered while fetching data,try again"
    const welcome = "Hi there,what can i do for you today"
    if(!isChatloading){return}
    async function fetchAIText(){
      setInputValue("")
      const data = await fetchText(inputValue)
        if (data.status === 200){
        const newArray =[]
        chatList.map((item)=>{
            if(item.response !== "loading..." && 
            item.response !== textstring && 
            item.response !== errorString &&
             item.response !== welcome){
              newArray.push(item)
            }
        })
        newArray.push(data)
        setChatList(newArray)
        setTextNavItems(data.texts)
        setIsChatloading(false)
        }
        else if (data.status === 432){
          settimer(data.time)
          setIsCountingDown(true)
          const newArray = []
          chatList.map((item)=>{
            if (item.response === "loading..."){
              newArray.push({request:item.request,response:textstring})
            }
            else{newArray.push(item)}
          })
          setChatList(newArray)
          setIsChatloading(false)
        }
        else{
          setIsError(true)
          const newArray = []
          chatList.map((item)=>{
            if (item.response === "loading..."){
              newArray.push({request:item.request,response:errorString})
            }
            else{newArray.push(item)}
          })
          setChatList(newArray)
          setIsChatloading(false)
        }
    
    }
    fetchAIText()
  },[isChatloading])


  return (
    <section>
        <Header toggle = {toggle}/>
        {isNew && <BannerImage text={"ChatGTP"}/>}
        {isCountingDown && <Countdown timer={timer} setIsCountingDown={setIsCountingDown}/>}
        {isError && <Error setIsError={setIsError}/>}
        {isNew && <Welcome Allinfo={Allinfo} setInputValue={setInputValue}/>}
        {!isNew && <ChatBot chatDemo={chatList}/>}
        {!isChatloading && !isCountingDown && <Input inputValue={inputValue} setInputValue={setInputValue} setisNew={setisNew} setlocallist={setChatList} setisloading={setIsChatloading}/>}
    </section>
  )
}
