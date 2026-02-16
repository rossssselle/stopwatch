export default function Timer({ time }: { time: number }) {
    return (
        <div className="time">
            {("0" + (Math.floor((time / 60000) % 60))).slice(-2)}:
            {("0" + (Math.floor((time / 1000) % 60) % 60)).slice(-2)}:
            {("0" + ((time / 10) % 100)).slice(-2)}
        </div>
    )
}