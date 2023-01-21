import { Button } from "@mui/material";
import { ThemeContext } from "../../App";
import { useContext } from "react";

const ElementButton = ({
  onClick,
  label = "",
  type = "primary",
  variant = "contained",
  disabled,
}) => {
  const { COLOR_BUTTON, COLOR_BUTTON_TEXT, COLOR_ALERT, COLOR_ALERT_TEXT } =
    useContext(ThemeContext);

  const bgcolor = type === "primary" ? COLOR_BUTTON : COLOR_ALERT;
  const color = type === "primary" ? COLOR_BUTTON_TEXT : COLOR_ALERT_TEXT;

  return (
    <Button
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      sx={{
        "&:hover": {
          opacity: 0.5,
          bgcolor: bgcolor,
          color: color,
        },
        bgcolor: bgcolor,
        color: color,
        minWidth: "6rem",
        border: "2px solid black",
        textDecorationLine: "none",
      }}
    >
      {label}
    </Button>
  );
};

export default ElementButton;
