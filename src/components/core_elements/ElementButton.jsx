import { Button } from "@mui/material";
import muiStyles from "../../locales/muiStyles.json";

const ElementButton = ({
  onClick,
  activePalette,
  label = "",
  type = "primary",
}) => {
  const { COLOR_BUTTON, COLOR_BUTTON_TEXT, COLOR_ALERT, COLOR_ALERT_TEXT } =
    activePalette;

  const bgcolor = type === "primary" ? COLOR_BUTTON : COLOR_ALERT;
  const color = type === "primary" ? COLOR_BUTTON_TEXT : COLOR_ALERT_TEXT;

  return (
    <Button
      variant="contained"
      onClick={onClick}
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
      }}
    >
      {label}
    </Button>
  );
};

export default ElementButton;
