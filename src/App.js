import './App.css';
import Countdown from 'react-countdown';
import {useRef} from 'react'
// import useSound from 'use-sound';
function App() {
  // const [play] = useSound(boopSfx);
  const countdown = useRef()

  let coundownAPI = null;
  
  const startCountdown = () => {
    console.log(coundownAPI)
    if (coundownAPI){
      coundownAPI.start()
    }
    
  }

  const stopCountdown = () => {
    console.log(coundownAPI)
    if (coundownAPI){
      coundownAPI.stop()
    }
    
  }

  const onMount = () => {
    console.log("On Mount")
    console.log(countdown)
    if (countdown.current)
      coundownAPI = countdown.current.getApi()
  }
  return (
    <div>
      <p className='counter'>
        <Countdown ref={countdown} date={Date.now() + 10000}  autoStart={false} onMount={onMount}/>
      </p>
      <button onClick={startCountdown}>Start</button>
      <button onClick={stopCountdown}>Stop</button>
      <p>
        2+2
      </p>
    </div>
  );
}

export default App;
