import { useImperativeHandle, useRef } from "react"
import {createPortal} from 'react-dom'

export default function ResultModal({ref, result, targetTime,timeLeft,onReset}){
    const dialog = useRef();

    const score = Math.round((1-(timeLeft/(targetTime*1000)))*100)

    useImperativeHandle(ref,() => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })
    
    return createPortal(
        <dialog className="result-modal" ref= {dialog}>
            <h2>You{result == 'Win'? `r Score: ${score}` : 'Lost'}</h2>
            <p>
                The target time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                You stopped the timer with <strong>{timeLeft/1000}s left</strong>
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    )
}