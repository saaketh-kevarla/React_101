import { useState,useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimeChallenge({title,targetTime}){
    const dialog = useRef();
    const timer = useRef();

    const [timeExpired,setTimeExpired] = useState(false);
    const [timerStarted,setTimerStarted] = useState(false);



    function handleStart(){
        // This timeout is being run in the browsers background , state updates doesnt effect it
        timer.current = setTimeout(() => {
            setTimeExpired(true);
            dialog.current.open();
        },targetTime * 1000);

        setTimerStarted(true);
    }

    function handleStop(){
        clearTimeout(timer.current);
    }

    return(
        <>
        <ResultModal ref = {dialog} targetTime={targetTime} result= 'lost'/> 
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
               {targetTime} second{targetTime > 1 ? 's' : ''} 
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Time is running..' : 'Timer Inactive'}
            </p>

        </section>
        </>
    )
}