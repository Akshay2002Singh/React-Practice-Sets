import { ShowStopWatchTime } from "./ShowStopWatchTime";

export const ShowStopWatchLaps = ({ timeLaps }: { timeLaps: number[] }) => {
  return (
    <div className="time-laps-list">
      {timeLaps.map((ele, index) => (
        <ShowStopWatchTime seconds={ele} key={index} />
      ))}
    </div>
  );
};
