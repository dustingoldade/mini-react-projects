import { Box } from "@mui/material";
import ElementPaper from "../core_elements/ElementPaper";
import ElementButton from "../core_elements/ElementButton";
import ElementTitle from "../core_elements/ElementTitle";
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

const PaletteSelection = ({ setSelectedColorPalette }) => {
  return (
    <ElementPaper>
      <ElementTitle title={PaletteSelection_Title} />
      <Box sx={{ mt: PADDING_MED }}>
        {paletteButtons(setSelectedColorPalette)}
      </Box>
    </ElementPaper>
  );
};

export default PaletteSelection;
