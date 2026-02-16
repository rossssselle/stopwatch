export default function ControlButtons(
    { isActive, handleStart, handleStop, handleReset, hasInitiatedTimer }: {
        isActive: boolean,
        handleStart: any,
        handleStop: any,
        handleReset: any,
        hasInitiatedTimer: boolean
    }
) {
    /* Wanted to simulate the controls from an iPhone */

    return (
        <div className="control-button-group">
            {hasInitiatedTimer && !isActive && <button className="reset" onClick={handleReset}>Reset</button>}
            {isActive ? (
                <button className="stop" onClick={handleStop}>Stop</button>
            ) : (
                <button className="start" onClick={handleStart}>Start</button>
            )}
        </div>
    )
}