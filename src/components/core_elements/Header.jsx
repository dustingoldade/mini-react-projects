import { Box, AppBar, Typography } from "@mui/material";
import muiStyles from "../../locales/muiStyles.json";
import usePalettes from "../../locales/usePalettes";
const { PADDING_SM } = muiStyles;

const Header = ({ activePalette }) => {
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
    <Box sx={{ flexGrow: 1, pb: PADDING_SM }}>
      <AppBar
        position="static"
        sx={{ bgcolor: COLOR_HEADER }}
        elevation={HEADER_ELEVATION}
      >
        <Typography
          sx={{ color: COLOR_HEADLINE, p: PADDING_SM }}
          align={"left"}
        >
          DG Web-Dev
        </Typography>
      </AppBar>
    </Box>
  );
};

export default Header;
