import "./styles.css"

export const ActionBtnRow = ({
  startBtnText,
  isResetDisabled,
  isStartBtnDisabled,
  onReset,
  onStartBtnStateToggle,
}: {
  startBtnText: string;
  isResetDisabled: boolean;
  isStartBtnDisabled: boolean;
  onReset: () => void;
  onStartBtnStateToggle: () => void;
}) => {
  return (
    <div className="action-btn-row">
      <button onClick={onStartBtnStateToggle} disabled={isStartBtnDisabled} className={isStartBtnDisabled? 'disabled-btn' : ''}>{startBtnText}</button>
      <button onClick={onReset} disabled={isResetDisabled} className={isResetDisabled? 'disabled-btn' : ''}>Reset</button>
    </div>
  );
};
