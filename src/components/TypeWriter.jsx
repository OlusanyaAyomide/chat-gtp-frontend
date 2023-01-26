import React,{useEffect,useState} from 'react'
import TypeWriterEffect from 'react-typewriter-effect'


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
     {control && <TypeWriterEffect
            textStyle={{lineHeight:"21px"}}
            startDelay={10}
            cursorColor="black"
            text={text}
            typeSpeed={50}
            // scrollArea={ref}
          />}

    </div>

  )
}
