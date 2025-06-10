import { useState,useRef } from "react";

export default function TimeChallenge({title,targetTime}){
    let timer = useRef()

    const [timeExpired,setTimeExpired] = useState(false);
    const [timerStarted,setTimerStarted] = useState(false);



    function handleStart(){
        // This timeout is being run in the browsers background , state updates doesnt effect it
        timer.current = setTimeout(() => setTimeExpired(true),targetTime * 1000);

        setTimerStarted(true);
    }

    function handleStop(){
        clearTimeout(timer.current);
    }

    return(
        <section className="challenge">
            <h2>{title}</h2>
            {timeExpired && <p>you lost!</p>}
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
    )
}