import { InputBase, Typography, Box } from "@mui/material";
import { ThemeContext } from "../../App";
import { useContext } from "react";
import { ElementTextFieldProps } from "../../locales/ts.models";

export const ElementTextField: React.FC<ElementTextFieldProps> = ({
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
