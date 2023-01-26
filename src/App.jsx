import React, { Fragment,useEffect } from 'react'
import { useContext } from 'react'
import AllContext from '../store/Allcontext'
import HomePage from './Home'
import ImageMain from './ImageMain'
import { fetchNavItems } from '../store/FetchApi'


function App() {
  const {onHomePage,setTextNavItems,setImageNavItems} = useContext(AllContext)

  useEffect(()=>{
    async function fetchData(){
          const data = await fetchNavItems()
          setTextNavItems(data.texts)
          setImageNavItems(data.images)

    }
    fetchData()

  },[]) 

  return (
    <Fragment>
        {onHomePage && <HomePage/>}
        {!onHomePage && <ImageMain/> }
    </Fragment>
  )
}

export default App
