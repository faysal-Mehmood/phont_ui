import * as React from "react";
import { FC } from "react";
import { styled } from "@mui/material/styles";
import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";

const PrimaryButton = styled(MuiButton)(({ theme }) => ({
  width: "max-content",
  padding: "10px 24px",
  height: "43px",
  borderRadius: "22px",
  fontSize: "20px",
  fontWeight: "400",
  lineHeight: "24px",
  textTransform: "capitalize",
  border: `1px solid ${theme.palette.background.default}`,
  color: theme.palette.background.default,
  transition: "background-color 0.3s ease, color 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.primary,
  },
  "&:active": {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
}));

const SecondaryButton = styled(MuiButton)(({ theme }) => ({
  width: "max-content",
  padding: "10px 24px",
  height: "43px",
  borderRadius: "22px",
  fontSize: "20px",
  fontWeight: "400",
  lineHeight: "24px",
  textTransform: "capitalize",
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.text.primary,
  "&:hover": {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
  "&:active": {
    border: `1px solid ${theme.palette.background.default}`,
    color: theme.palette.background.default,
  },
}));

const PrimaryIconButton = styled(MuiButton)(({ theme }) => ({
  width: "44px",
  height: "44px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: `1px solid ${theme.palette.background.default}`,
  color: theme.palette.background.default,
  borderRadius: "100%",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.primary,
  },
  "&:active": {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
}));

const SecondaryIconButton = styled(MuiButton)(({ theme }) => ({
  width: "44px",
  height: "44px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.text.primary,
  borderRadius: "100%",
  "&:hover": {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
  "&:active": {
    border: `1px solid ${theme.palette.background.default}`,
    color: theme.palette.background.default,
  },
}));

interface ButtonPropsTypes extends Omit<MuiButtonProps, "variant"> {
  variant?: "primary" | "secondary" | "primary-icon" | "secondary-icon";
}

export const Button: FC<ButtonPropsTypes> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  ...rest
}) => {
  const ButtonComponent =
    variant === "secondary"
      ? SecondaryButton
      : variant === "secondary-icon"
      ? SecondaryIconButton
      : variant === "primary-icon"
      ? PrimaryIconButton
      : PrimaryButton;

  return (
    <ButtonComponent
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...rest}>
      {children}
    </ButtonComponent>
  );
};
