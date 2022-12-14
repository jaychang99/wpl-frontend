import {
  Dispatch,
  EventHandler,
  FocusEventHandler,
  forwardRef,
  InputHTMLAttributes,
  SetStateAction,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { BoxLabel } from "components/common/Box";
import {
  InputAlertMessage,
  InputContainer,
  StyledInput,
} from "components/common/Input/styles";
import {
  ALPHANUMERIC_ONLY_REGEXT,
  VALID_EMAIL_REGEX,
  VALID_PASSWORD_REGEX,
} from "constants/regex";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  validationPipe?: "email" | "password" | "passwordConfirm" | "nickname"; // decide which type of input validation to perform
  originalPassword?: string; // for password confirm validation
  setOriginalPassword?: Dispatch<SetStateAction<string>>; // to update original password for password confirm validation
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      className,
      validationPipe,
      originalPassword,
      setOriginalPassword,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [warningMessage, setWarningMessage] = useState("");

    // to prevent validating even before inital input
    const beenFocused = useRef(false);

    const handleValidation = useCallback(
      (e: any) => {
        e.preventDefault();
        async function handleEvent(e: FocusEvent | KeyboardEvent) {
          if (setOriginalPassword) {
            setOriginalPassword(inputRef?.current?.value ?? "");
          }

          if (beenFocused.current) {
            // only if have been focused

            const inputValue = inputRef?.current?.value;

            // validate email
            if (validationPipe === "email") {
              if (!inputValue?.match(VALID_EMAIL_REGEX)) {
                setWarningMessage("please enter a valid email address");
              } else {
                setWarningMessage("");
              }
            }

            // validate password
            if (validationPipe === "password") {
              if (!inputValue?.match(VALID_PASSWORD_REGEX)) {
                setWarningMessage(
                  "Password needs to have at least 6 characters, one capital letter, one lowercase letter, at least one digit and one special character. "
                );
              } else {
                setWarningMessage("");
              }
            }

            // validate password confirm
            if (validationPipe === "passwordConfirm") {
              if (!(inputValue === originalPassword)) {
                setWarningMessage("passwords do not match");
              } else {
                setWarningMessage("");
              }
            }

            // validate nickname
            if (validationPipe === "nickname") {
              if (
                !inputValue?.match(ALPHANUMERIC_ONLY_REGEXT) ||
                inputValue.length > 11
              ) {
                setWarningMessage(
                  "Name should be at most 10 characters long, and must be alphanumeric. "
                );
              } else {
                setWarningMessage("");
              }
            }
          }
        }
        handleEvent(e);
      },
      [originalPassword, setOriginalPassword, validationPipe]
    );

    useImperativeHandle(ref, () => {
      return inputRef.current as HTMLInputElement;
    });

    return (
      <div>
        <InputContainer className={className}>
          {label && <BoxLabel>{label}</BoxLabel>}
          <StyledInput
            ref={inputRef}
            onBlur={(e) => {
              beenFocused.current = true; // onchange Validation now starts.
              handleValidation(e);
            }}
            onChange={handleValidation}
            {...props}
          />
          <InputAlertMessage>{warningMessage}</InputAlertMessage>
        </InputContainer>
      </div>
    );
  }
);

export default Input;
