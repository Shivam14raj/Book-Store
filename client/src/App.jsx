import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './index.css'

const App = () => {   

  // useEffect(()=>{
  //    axios.get('http://localhost:1010/getbook').then(
  //     response => console.log(response)
  //    )
  // }, [])   

  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Hi this is a book store</h1>
    </div>
  )
}

export default App 
