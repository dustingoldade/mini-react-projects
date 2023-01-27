import { Box } from "@mui/material";
import ElementPaper from "../core_elements/ElementPaper";
import ElementButton from "../core_elements/ElementButton";
import ElementTitle from "../core_elements/ElementTitle";
import jsonText from "../../locales/en.json";
import muiStyles from "../../locales/muiStyles.json";
import allPaletteThemesObj from "../../locales/colorPalette.json";
import PaletteDisplayBox from "./PaletteDisplayBox";
import { PaletteSelectionProps } from "../../locales/ts.models";
const { PADDING_MED } = muiStyles;
const { PaletteSelection_Title } = jsonText;
const allPaletteThemesArray = Object.keys(
  allPaletteThemesObj
) as (keyof typeof allPaletteThemesObj)[];

const paletteButtons = (passThroughFunction: (key: string) => void) => {
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
      />
      <PaletteDisplayBox element={element} />
    </Box>
  ));
};

const PaletteSelection: React.FC<PaletteSelectionProps> = ({
  setSelectedColorPalette,
}) => {
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
