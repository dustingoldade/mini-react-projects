import { Paper, Container } from "@mui/material";
import muiStyles from "../../locales/muiStyles.json";
const { PADDING_MED } = muiStyles;

const ElementPaper = ({ activePalette, children }) => {
  const { COLOR_SECONDARY } = activePalette;

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{
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
