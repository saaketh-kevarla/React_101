import { useState,useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimeChallenge({title,targetTime}){
    const dialog = useRef();
    const timer = useRef();

   const [timeRemaining,setTimeRemaining] = useState(targetTime*1000);

   

   const timerIsActive = timeRemaining>0 && timeRemaining < targetTime * 1000


    if(timeRemaining<=0){
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleStart(){
        // This timeout is being run in the browsers background , state updates doesnt effect it
        timer.current = setInterval(() => {
            setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
        },10);
        
    }

    function handleStop(){
        clearInterval(timer.current);
        dialog.current.open();
        
    }

    function timeReset(){
        setTimeRemaining(targetTime*1000)
    }

    return(
        <>
        <ResultModal ref = {dialog} targetTime={targetTime} result={timeRemaining > 0 ? 'Win' : 'Lost'} timeLeft={timeRemaining} onReset={timeReset}/> 
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
               {targetTime} second{targetTime > 1 ? 's' : ''} 
            </p>
            <p>
                <button onClick={timerIsActive ? handleStop : handleStart}>
                    {timerIsActive ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerIsActive ? 'active' : undefined}>
                {timerIsActive ? 'Time is running..' : 'Timer Inactive'}
            </p>

        </section>
        </>
    )
}