"use client"
import { useState, useEffect } from "react"
import Timer from "./timer"
import ControlButtons from "./controlButtons"


export default function Stopwatch() {
    const [isActive, setIsActive] = useState(false)
    const [isStopped, setIsStopped] = useState(true)
    const [hasInitiatedTimer, setHasInitiatedTimer] = useState(false)
    const [reset, setReset] = useState(false)
    const [time, setTime] = useState(0)

    /* This effect starts an interval when active,
        and React automatically clears the previous one via the cleanup,
        whenever dependencies change or the component unmounts */

    useEffect(() => {
        if (!isActive || isStopped) return;

        const interval = setInterval(() => {
            // This avoids stale state.
            setTime(t => t + 10);
        }, 10);

        return () => clearInterval(interval);
    }, [isActive, isStopped]);

    const handleStart = () => {
        setIsActive(true)
        setIsStopped(false)
        setHasInitiatedTimer(true)
    }

    const handleStop = () => {
        setIsStopped(!isStopped)
        setIsActive(false)
    }

    const handleReset = () => {
        setIsActive(false)
        setTime(0)
        setHasInitiatedTimer(false)
    }

    return (
        <div className="stopwatch">
            <Timer time={time} />
            <ControlButtons
                isActive={isActive}
                handleStart={handleStart}
                handleStop={handleStop}
                hasInitiatedTimer={hasInitiatedTimer}
                handleReset={handleReset}
            />
        </div>
    )
}