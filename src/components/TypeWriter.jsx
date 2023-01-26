import React,{useEffect,useState} from 'react'
import Typewriter from "typewriter-effect";


export default function TypeWriter({text}) {
  const [control,setControl] = useState(true)
  useEffect(()=>{
    setControl(false)
    setTimeout(()=>{
      setControl(true)
    },50)
  },[text])
  return (
    <div >
     {control &&  <Typewriter

     options={{
      delay:33
     }}
  onInit={(typewriter)=> {
  typewriter
  .typeString(text)
  .start();
  }}
  />}
        {/* {text} */}
    </div>

  )
}
