import { Box } from "@mui/material";
import ElementPaper from "../core_elements/ElementPaper";
import ElementButton from "../core_elements/ElementButton";
import ElementTitle from "../core_elements/ElementTitle";
import ElementTextField from "../core_elements/ElementTextField";
import jsonText from "../../locales/en.json";
import muiStyles from "../../locales/muiStyles.json";
import allPaletteThemesObj from "../../locales/colorPalette.json";
import PaletteDisplayBox from "./PaletteDisplayBox";

const { PADDING_MED } = muiStyles;
const { PaletteSelection_Title } = jsonText;

const allPaletteThemesArray = Object.keys(allPaletteThemesObj);
const paletteButtons = (passThroughFunction) => {
  return allPaletteThemesArray.map((element) => (
    <Box
      key={`box_${element}`}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <ElementButton
        onClick={() => {
          passThroughFunction(element);
        }}
        label={allPaletteThemesObj[element]["NAME"]}
        activePalette={allPaletteThemesObj[element]}
      />
      <PaletteDisplayBox element={element} />
    </Box>
  ));
};

const PaletteSelection = ({ setSelectedColorPalette, activePalette }) => {
  return (
    <ElementPaper activePalette={activePalette}>
      <ElementTitle
        title={PaletteSelection_Title}
        activePalette={activePalette}
      />
      <Box sx={{ mt: PADDING_MED }}>
        {paletteButtons(setSelectedColorPalette)}
      </Box>
      <ElementTextField color={"green"} />
    </ElementPaper>
  );
};

export default PaletteSelection;
