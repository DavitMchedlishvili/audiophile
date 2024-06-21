import classNames from "classnames";
import "./inputs.css";

type InputProps = {
  type: string;
  isError?: boolean;
  placeholder?: string;
  label?: null | string;
  id?: string;
  errorMsg?: string;
  name?: string;
};

const Input = ({
  type = "text",
  placeholder = "",
  label = null,
  id = "",
  isError = false,
  errorMsg = "",
  name = "",
}: InputProps) => {
  if (type === "radio") {
    return (
      <div
        className={classNames({
          "radio-input-wrapper": true,
          error: isError,
        })}
      >
        <input type="radio" name={name} id={id} className={classNames({})} />
        {label ? <label htmlFor={id}>{label}</label> : null}
      </div>
    );
  }

  return (
    <>
      
      <div
        className={classNames({
          "input-wrapper": true,
          error: isError,
        })}
      >
       
        {label ? <label htmlFor={id}>{label}</label> : null}
        {isError ? <p className="error-msg">{errorMsg}</p> : null}
        <input
          id={id}
          className={classNames({
            input: true,
            isError: true
          })}
          placeholder={` Insert your ${placeholder}`}
          type={type}
        />
      </div>
    </>
  );
};

export default Input;