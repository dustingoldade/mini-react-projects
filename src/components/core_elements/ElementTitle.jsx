import { Typography } from "@mui/material";
import { ThemeContext } from "../../App";
import { useContext } from "react";

const ElementTitle = ({ title }) => {
  const { COLOR_SECONDARY_CONTRAST } = useContext(ThemeContext);
  return (
    <Typography variant="h6" sx={{ color: COLOR_SECONDARY_CONTRAST }}>
      {title}
    </Typography>
  );
};

export default ElementTitle;
