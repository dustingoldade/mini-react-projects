import {
  InputBase,
  TextField,
  OutlinedInput,
  FilledInput,
  Typography,
  Box,
} from "@mui/material";
import { styled, createTheme } from "@mui/system";
import { ThemeContext } from "../../App";
import { useContext } from "react";

export const ElementTextField = ({
  showError,
  value,
  helperText,
  onChange,
}) => {
  const { COLOR_ALERT, COLOR_SECONDARY_CONTRAST } = useContext(ThemeContext);

  return (
    <Box display={"flex"} justifyContent="center">
      <Box display={"flex"} flexDirection={"column"} alignItems={"start"}>
        <InputBase
          onChange={onChange}
          value={value}
          label="sdfs"
          sx={{
            color: COLOR_SECONDARY_CONTRAST,
            borderBottom: `solid 1px ${COLOR_SECONDARY_CONTRAST}`,
            width: "100%",
          }}
        />

        <Typography
          variant="subtitle2"
          sx={{
            color: `${showError ? COLOR_ALERT : COLOR_SECONDARY_CONTRAST}`,
            textAlign: "start",
            fontSize: ".7rem",
          }}
        >
          {helperText}
        </Typography>
      </Box>
    </Box>
  );
};
