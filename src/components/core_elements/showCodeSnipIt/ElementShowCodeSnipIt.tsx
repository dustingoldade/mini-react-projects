import { Box, Button } from "@mui/material";
import { useState, useContext } from "react";
import ElementCodeSnipit from "./ElementCodeSnipit";
import muiStyles from "../../../locales/muiStyles.json";
import text from "../../../locales/en.json";
import { ElementShowCodeSnipItProps } from "../../../locales/ts.models";
import { ThemeContext } from "../../../App";
const { PADDING_MED } = muiStyles;
const { ElementShowCodeSinpIt_Show_Code, ElementShowCodeSinpIt_Hide_Code } =
  text;

const ElementShowCodeSnipIt: React.FC<ElementShowCodeSnipItProps> = ({
  codeSnipIt,
}) => {
  const [showCodeSnipIt, setShowCodeSnipIt] = useState(false);
  const { COLOR_SECONDARY_CONTRAST } = useContext(ThemeContext);
  const showCodeSnipItHandler = () => {
    setShowCodeSnipIt(!showCodeSnipIt);
  };

  return (
    <>
      <Box>
        <Button
          sx={{
            color: COLOR_SECONDARY_CONTRAST,
            size: "small",
            border: 1,
            mt: 2,
          }}
          onClick={showCodeSnipItHandler}
          variant="outlined"
        >
          {!showCodeSnipIt
            ? ElementShowCodeSinpIt_Show_Code
            : ElementShowCodeSinpIt_Hide_Code}
        </Button>
      </Box>
      {showCodeSnipIt && (
        <Box sx={{ my: PADDING_MED }}>
          <ElementCodeSnipit img={codeSnipIt} />
        </Box>
      )}
    </>
  );
};

export default ElementShowCodeSnipIt;
