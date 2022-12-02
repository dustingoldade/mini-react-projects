import { Typography } from "@mui/material";

const ElementDescription = ({ description, activePalette }) => {
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
    <Typography variant="body2" align="left">
      {description}
    </Typography>
  );
};

export default ElementDescription;
