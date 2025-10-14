export const TimeOutput = ({remainingSec}: {remainingSec: number}) => {
    const sec = remainingSec%60;
    const toalMin = Math.floor(remainingSec/60);
    const min = toalMin%60;
    const hr = Math.floor(toalMin/60);
    
    return(
        <div>
            <span>{hr.toString().padStart(2,'0')}</span>
            <span>:</span>
            <span>{min.toString().padStart(2,'0')}</span>
            <span>:</span>
            <span>{sec.toString().padStart(2,'0')}</span>
        </div>
    )
}