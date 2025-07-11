import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from './Components/HeaderComponent'
import { Route, Routes } from 'react-router-dom'
import HomeComponent from './Components/HomeComponent'
import ContactUs from './Components/ContactUs'
import Photo from './Components/contentTypes/photo'
import Video from './Components/contentTypes/video'
import Audio from './Components/contentTypes/audio'
import PageNotFound from './Components/PageNotfound/PageNotFound'


function App() {
  return (
    <>
     <HeaderComponent/>
    <Routes>
      <Route path={'/home'} element={<HomeComponent/>}></Route>
      <Route path={'/contentype'} element={<ContactUs/>}>
       <Route path={'photo'} element={<Photo/>} />
       <Route path={'video'} element={<Video/>}></Route>
       <Route path={'audio'} element={<Audio/>}></Route>
      </Route>
    <Route path={'/help'} element={<PageNotFound/>}></Route>
    </Routes>
   
    </>
  )
}

export default App
