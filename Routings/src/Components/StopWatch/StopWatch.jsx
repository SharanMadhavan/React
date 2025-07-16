import React, { useRef, useState } from 'react'
import './stop.css'
function StopWatch() {
       let [timer,setTimer] = useState(0);
     // let [timerId,setTimerId ] = useState();
     let timerId = useRef();

        const StartTimer =()=>{
            timerId.current =  setInterval(()=>{
                setTimer((prevTime)=> prevTime + 1);
            },1000);

        }
        const StopTimer =()=>{
            clearInterval(timerId.current);
        }
        const ResetTime = ()=>{
            setTimer(timerId.current = 0)
        }
  return (
    <div className='items'>
       
        <h3 style={{textAlign:"center", color:'green'}}>Timer : {timer}</h3>
        <div className='stopwatch'>
            <button onClick={StartTimer}>Start</button>
            <button onClick={StopTimer}>Stop</button>
            <button onClick={ResetTime}>Reset</button>
        </div>
    </div>
  )
}

export default StopWatch