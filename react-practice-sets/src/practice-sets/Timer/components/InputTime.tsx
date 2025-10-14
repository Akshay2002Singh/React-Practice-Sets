import "./styles.css";

export const InputTime = ({
  inputTime,
  onInputChangeCallback,
  isInputDiabled
}: {
  inputTime: string;
  onInputChangeCallback: (value: string) => void,
  isInputDiabled: boolean
}) => {

  return (
    <div className="input-row">
      <span>Enter time in seconds</span>
      <input
        type="number"
        value={inputTime}
        onChange={(e) => onInputChangeCallback(e.target.value)}
        disabled={isInputDiabled}
      />
    </div>
  );
};
