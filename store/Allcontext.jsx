import { createContext, useState } from "react";

const AllContext = createContext({
  isCountingDown: false,
  timer: 0,
  settimer: function () {},
  setIsCountingDown: function () {},
  inputValue:"",
  setInputValue:function(){},
  isNew:true,
  setisNew:function(){},
  onHomePage:"",
  setOnHomePage:function(){},
  imageInput:"",
  setImageInput:function(){},
  isImageNew:false,
  setIsImageNew:function(){},
  setSliderIndex:function(){},
  sliderIndex:"",
  chatList:"",
  setChatList:function(){},
  isChatloading:"",
  setIsChatloading:function(){},
  isImageCountingDown:false,
  imageTimer:0,
  setImageTimer:function(){},
  setIsImageCountingDown:function(){},
  imageChatList:[],
  setImageChatList:function(){},
  isImageChatLoading:"",
  setIsImageChatloading:function(){},
  isError:"",
  setIsError:function(){},
  textNavItems:[],
  setTextNavItems:function(){},
  imageNavItems:[],
  setImageNavItems:function(){}
});

export function AllContextProvider(props) {
  const [isCountingDown, setIsCountingDownF] = useState(false);
  const [timer, settimer] = useState(0);
  const [inputValue,setInputValue] = useState("")
  const [isNew,setisNew] = useState(true)
  const [onHomePage,setOnHomePage] = useState(true)
  const [imageInput,setImageInput] = useState("")
  const [isImageNew,setIsImageNew] = useState(true)
  const [sliderIndex,setSliderIndex] = useState(0)
  const [chatList,setChatList] = useState([])
  const [isChatloading,setIsChatloading] = useState(false)
  const [isImageCountingDown,setIsImageCountingDownF] = useState(false) 
  const [imageTimer,setImageTimer] = useState(0)
  const [imageChatList,setImageChatList] = useState([])
  const [isImageChatLoading,setIsImageChatloading] = useState(false)
  const [isError,setIsError] = useState(false)
  const [textNavItems,setTextNavItems] = useState([])
  const [imageNavItems,setImageNavItems] = useState([])

  function setIsCountingDown(bool){
    setIsCountingDownF(bool)
    if (!bool){settimer(0)}
  }
  function setIsImageCountingDown(bool){
    setIsImageCountingDownF(bool)
    if (!bool){setImageTimer(0)}
  }

  const context = { 
    isCountingDown,
    timer, 
    setIsCountingDown, 
    settimer,
    inputValue,
    setInputValue,
    isNew,
    setisNew,
    onHomePage,
    setOnHomePage,
    imageInput,
    setImageInput,
    isImageNew,
    setIsImageNew,
    sliderIndex,
    setSliderIndex,
    chatList,
    setChatList,
    isChatloading,
    setIsChatloading,
    isImageCountingDown,
    imageTimer,
    setImageTimer,
    setIsImageCountingDown,
    isImageChatLoading,
    setIsImageChatloading,
    imageChatList,
    setImageChatList,
    isError,
    setIsError,
    textNavItems,
    setTextNavItems,
    imageNavItems,
    setImageNavItems
  };
  return (
    <AllContext.Provider value={context}>{props.children}</AllContext.Provider>
  );
}

export default AllContext;
