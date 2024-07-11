import { Slider } from "@mui/material";
import React from "react";

interface slierProps {
  value: number;
  setValue: (value: number) => void;
  className?: string;
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  marks?: { [key: number]: string };
  defaultValue?: number;
  marksLabelDisplay?: "on" | "off";
  onChange?: (event: React.ChangeEvent<unknown>, newValue: number) => void;
  valueLabelFormat?: (value: number) => string;
  valueLabelDisplay?: "auto" | "on" | "off";
  getAriaLabel?: (value: number) => string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  marksProps?: React.HTMLAttributes<HTMLDivElement>;
  trackProps?: React.HTMLAttributes<HTMLDivElement>;
  railProps?: React.HTMLAttributes<HTMLDivElement>;
  thumbProps?: React.HTMLAttributes<HTMLDivElement>;
}

export const RangeSlider = (props: slierProps) => {
  const { value, className } = props;

  return (
    <Slider
      aria-label='Volume'
      value={value}
      className={className}
      sx={{
        marginLeft: "8px",
        color: " #ffffff",
        "& .MuiSlider-thumb": {
          width: "24px",
          height: "24px",
          backgroundColor: "#000000 !important",
          border: "3px solid #ffffff",
        },
      }}
    />
  );
};
