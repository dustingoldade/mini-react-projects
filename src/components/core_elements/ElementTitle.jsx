import { Typography } from "@mui/material";

const ElementTitle = ({ title, activePalette }) => {
  const {
    COLOR_BG,
    COLOR_HEADER,
    HEADER_ELEVATION,
    COLOR_HEADLINE,
    COLOR_SECONDARY,
    COLOR_SECONDARY_CONTRAST,
    COLOR_BUTTON,
    COLOR_BUTTON_TEXT,
    COLOR_ALERT,
    COLOR_ALERT_TEXT,
  } = activePalette;
  return (
    <Typography variant="h6" sx={{ color: COLOR_SECONDARY_CONTRAST }}>
      {title}
    </Typography>
  );
};

export default ElementTitle;
