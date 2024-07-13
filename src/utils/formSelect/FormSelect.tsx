import { Box, MenuItem, Select, Typography } from "@mui/material";
import React, { ChangeEvent } from "react";
import styles from "./style.module.scss";

interface selectProps {
  icon?: React.ReactElement;
  onChange?: (e: any) => void;
  value?: number | string;
  className?: string;
  label?: string;
  options?: Array<{ value: number; label: string }>;
  defaultValue?: number;
  disabled?: boolean;
  variant?: "standard" | "outlined" | "filled";
  fullWidth?: boolean;
  size?: "small" | "medium" | "large";
  required?: boolean;
  inputProps?: Record<string, unknown>;
  sx?: React.CSSProperties;
  inputLabelProps?: Record<string, unknown>;
  SelectDisplayProps?: Record<string, unknown>;
  MenuProps?: Record<string, unknown>;
  PopoverProps?: Record<string, unknown>;
  renderValue?: (value: unknown) => React.ReactNode;
  renderOption?: (option: unknown) => React.ReactNode;
  data?: Array<any>;
}

export const FormSelect = (props: selectProps) => {
  const { icon, onChange, value, label, data } = props;

  return (
    <Box className={styles.SettingAllSide}>
      {icon}
      <Typography variant='h6' color={"#FFFFFF"}>
        {label}
      </Typography>
      <Select
        className={styles.Select}
        value={value}
        onChange={onChange}
        sx={{
          color: "#FFFFFF",
          "& .MuiSelect-select": {
            padding: "4px 12px",
            color: "#FFFFFF",
            fontSize: "20px",
            lineHeight: "24px",
            backgroundColor: " #30293A",
          },

          "& .MuiSvgIcon-root": {
            color: "#FFFFFF",
          },
          "&.MuiPaper-root": {
            ".MuiList-root .MuiMenuItem-root": {
              color: "#FFFFFF",
            },
          },
        }}>
        {data?.map(
          (
            item: { value: string | number; label: string | number },
            index: number,
          ) => (
            <MenuItem key={index} value={item.value}>
              {item.label}
            </MenuItem>
          ),
        )}
      </Select>
    </Box>
  );
};
