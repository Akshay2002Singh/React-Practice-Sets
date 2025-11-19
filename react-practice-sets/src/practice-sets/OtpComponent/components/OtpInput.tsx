import { useRef, useState } from "react";
import { OtpInputBox } from "./OtpInputBox";

export const OtpInput = ({
  numberOfDigits = 4,
  onChange = () => {},
}: {
  numberOfDigits?: number;
  onChange?: (otp: string) => void;
}) => {
  const [otpValue, setOtpValue] = useState<string>("");
  const [isInputFocus, setIsInputFocus] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const renderInputBoxSet = () => {
    let tempItems = [];
    for (let i = 0; i < numberOfDigits; ++i) {
      tempItems.push(
        <OtpInputBox
          value={otpValue?.[i] ?? ""}
          isActive={
            isInputFocus &&
            (otpValue?.length === i ||
              (otpValue.length === numberOfDigits && i === numberOfDigits - 1))
          }
        />
      );
    }

    return tempItems;
  };

  const onInputChange = (value: string) => {
    onChange(value);
    setOtpValue(value);
  };

  const onOtpContainerClick = () => inputRef.current?.focus();

  return (
    <div className="otp-input-container" onClick={onOtpContainerClick}>
      <input
        maxLength={numberOfDigits}
        value={otpValue}
        onChange={(e) => onInputChange(e.target.value)}
        ref={inputRef}
        onFocus={() => setIsInputFocus(true)}
        onBlur={() => setIsInputFocus(false)}
        style={{
          position: "absolute",
          opacity: 0,
          width: "0px",
          height: "0px",
          pointerEvents: "none",
        }}
      />
      {renderInputBoxSet()}
    </div>
  );
};
