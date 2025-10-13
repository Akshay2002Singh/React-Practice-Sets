import "./styles.css";
import { LIGHT_NAMES, type LightName } from "../constant";

const LightBloc = ({ light }: { light?: LightName | null }) => {
  let ledColorClass = '';
  switch (light) {
    case LIGHT_NAMES.RED:
      ledColorClass = 'red-led';
      break;
    case LIGHT_NAMES.YELLOW:
      ledColorClass = 'yellow-led';
      break;
    case LIGHT_NAMES.GREEN:
      ledColorClass = 'green-led';
      break;
  }

  return (
    <div className="light-bloc-container">
      <div className={`light-bloc-led ${ledColorClass}`}></div>
    </div>
  );
};

export default LightBloc;
