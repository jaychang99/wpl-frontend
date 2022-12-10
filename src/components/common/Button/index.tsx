import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "components/common/Button/styles";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "seccondary";
  filled?: boolean;
  size?: "large" | "small";
}

function Button({
  children,
  variant = "primary",
  filled = true,
  size = "large",
  ...props
}: Props) {
  return (
    <StyledButton variant={variant} filled={filled} size={size} {...props}>
      {children}
    </StyledButton>
  );
}

export default Button;
