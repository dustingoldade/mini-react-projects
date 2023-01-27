import { Button } from "@mui/material";
import { ThemeContext } from "../../App";
import { useContext } from "react";
import { ElementButtonProps } from "../../locales/ts.models";

const ElementButton: React.FC<ElementButtonProps> = ({
  onClick,
  label = "",
  type = "primary",
  disabled = false,
}) => {
  const { COLOR_BUTTON, COLOR_BUTTON_TEXT, COLOR_ALERT, COLOR_ALERT_TEXT } =
    useContext(ThemeContext);

  const bgcolor = type === "primary" ? COLOR_BUTTON : COLOR_ALERT;
  const color = type === "primary" ? COLOR_BUTTON_TEXT : COLOR_ALERT_TEXT;

  return (
    <Button
      variant="contained"
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
