import * as React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";

const SwitchButton = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName='.Mui-focusVisible' disableRipple {...props} />
))(({ theme }) => ({
  width: 38,
  height: 18,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 3.5,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(18px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        boxShadow: "inset 0px 2px 2px #0000005F",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 11,
    height: 11,
    background: "#000000 0% 0% no-repeat padding-box",
    boxShadow: "inset 0px 2px 2px #00000029, 0px 2px 2px #00000084",
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    background: "#30293A 0% 0% no-repeat padding-box",
    boxShadow: "inset 0px 2px 2px #0000005F",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

interface SwitchDataProps {
  label: string;
  defaultChecked?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    isChecked: boolean,
  ) => void;
  color?: string;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  renderIcon?: (checked: boolean) => React.ReactElement;
  value?: any;
  inputRef?: React.Ref<HTMLInputElement>;
  name?: string;
  required?: boolean;
  type?: "checkbox" | "radio";
  readOnly?: boolean;
  tabIndex?: number;
  inputPropsIn?: React.InputHTMLAttributes<HTMLInputElement>;
  inputPropsOut?: React.InputHTMLAttributes<HTMLInputElement>;
  classes?: { root: string; label: string };
  variant?: "standard" | "outlined" | "filled";
  colorScheme?: "primary" | "secondary";
}

export default function CustomizedSwitches(props: SwitchDataProps) {
  const { label } = props;

  return (
    <FormGroup>
      <FormControlLabel
        control={<SwitchButton defaultChecked />}
        label={label}
        sx={{
          fontSize: "20px",
          lineHeight: "24px",

          "& .MuiFormControlLabel-label": {
            marginLeft: "34px",
          },
        }}
      />
    </FormGroup>
  );
}
