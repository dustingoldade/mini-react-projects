import { Box, Typography } from "@mui/material";
import muiStyles from "../../locales/muiStyles.json";
import { ThemeContext } from "../../App";
import { useContext } from "react";
import JsonText from "../../locales/en.json";
const { Website_Title } = JsonText;

const { PADDING_MED, PADDING_SM } = muiStyles;

const Header = () => {
  const { COLOR_HEADER, COLOR_HEADLINE } = useContext(ThemeContext);

  return (
    <Box borderBottom={2} sx={{ pb: PADDING_SM, bgcolor: COLOR_HEADER }}>
      <Typography
        variant="h5"
        sx={{ color: COLOR_HEADLINE, p: PADDING_MED }}
        align={"center"}
      >
        {Website_Title}
      </Typography>
    </Box>
  );
};

export default Header;
