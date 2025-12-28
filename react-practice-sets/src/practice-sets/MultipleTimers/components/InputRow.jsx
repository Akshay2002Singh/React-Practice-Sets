import './styles.css';

export const InputRow = ({inputTimerValue, setInputTimerValue, addNewTimer}) => {
  return (
    <div id="multiple-timer-input-row">
      <input
        type="number"
        value={inputTimerValue}
        onChange={(e) => {setInputTimerValue(e.target.value)}}
        placeholder='Enter Time in seconds'
      />
      <button
        onClick={() => addNewTimer(inputTimerValue)}
        disabled={!!inputTimerValue === false}
        className={!!inputTimerValue === false ? 'disabled-btn' : ''}
      >
        Add New
      </button>
    </div>
  );
};
