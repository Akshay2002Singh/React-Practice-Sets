import "./styles.css";

export const OtpInputBox = ({
  value = "",
  isActive = false,
}: {
  value?: string;
  isActive: boolean;
}) => {
  return (
    <span className={`otp-input-box ${isActive ? "otp-input-box-focus" : ""}`}>
      {value}
    </span>
  );
};
