import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './index.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CreateBook from './pages/CreateBook.jsx'
import DeleteBook from './pages/DeleteBook.jsx'
import EditBook from './pages/EditBook.jsx' 
import ShowBook from './pages/ShowBook.jsx'  

const App = () => {   

  // useEffect(()=>{
  //    axios.get('http://localhost:1010/getbook').then(
  //     response => console.log(response)
  //    )
  // }, [])     
  return (   
   <>
      <Routes> 

        <Route path='/' element= {<Home/>} />
        <Route path='/books/create' element= {<CreateBook/>} />
        <Route path='/books/details/:id' element= {<ShowBook/>} />
        <Route path='/books/edit/:id' element= {<EditBook/>} />
        <Route path='/books/delete/:id' element= {<DeleteBook/>} />
      
      </Routes> 


   </>
  )
}

export default App 
