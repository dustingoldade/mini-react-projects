import { Paper, Container } from "@mui/material";
import muiStyles from "../../locales/muiStyles.json";
import { ThemeContext } from "../../App";
import { useContext } from "react";

const { PADDING_MED } = muiStyles;

const ElementPaper = ({ children }) => {
  const { COLOR_SECONDARY } = useContext(ThemeContext);

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{
          mb: PADDING_MED,
          p: PADDING_MED,
          bgcolor: COLOR_SECONDARY,
          border: "2px solid black",
        }}
      >
        {children}
      </Paper>
    </Container>
  );
};

export default ElementPaper;
