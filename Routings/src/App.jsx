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
import ReducerHook from './Components/ReducerHook/ReducerHook'
import City from './ReduxComponents/Reduxcomp/City'
import FormPage from './ReduxComponents/Reduxcomp/FormPage'
import Image from './Components/LifeCycleOfComponent/Image'
import Text from './Components/LifeCycleOfComponent/Text'
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
      <Route path={'/reducer'} element={<ReducerHook/>}></Route>
      <Route path={'/city'} element={<City/>}></Route>
      <Route path={'/sform'} element={<FormPage/>}></Route>
    <Route path={'*'} element={<PageNotFound/>}></Route>
    <Route path={'/lifecycle'} element={<Image/>}> </Route>
    <Route path={'/text'} element={<Text/>}></Route>
    </Routes>
   
    </>
  )
}

export default App
