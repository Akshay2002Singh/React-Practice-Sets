import './styles.css';

export const ShowStopWatchTime = ({seconds}: {seconds: number}) => {
    const displaySec = seconds%60;
    const totalMin = Math.floor(seconds/60);
    const displayMin = totalMin%60;
    const displayHr = Math.floor(totalMin/60);
  return (
    <div className='time-output-container'>
        <span>{displayHr.toString().padStart(2, '0')}</span>
        <span>:</span>
        <span>{displayMin.toString().padStart(2,'0')}</span>
        <span>:</span>
        <span>{displaySec.toString().padStart(2, '0')}</span>
    </div>
  )
}
