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
import MobilesComponents from './Components/MobilesComponent'
import A from './Components/ContectAPI/A'
import ContextHome from './Components/ContextAPI2/ContextHome'
import StopWatch from './Components/StopWatch/StopWatch'


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
       <Route path={'stopwatch'} element={<StopWatch />}></Route>
      </Route>
      <Route path={'/mobiles'} element={<MobilesComponents/>}></Route>
      <Route path={'/contextAPI'} element={<A />}></Route>
      <Route path={'/formContext'} element={<ContextHome/>}></Route>
    <Route path={'*'} element={<PageNotFound/>}></Route>
    </Routes>
   
    </>
  )
}

export default App
