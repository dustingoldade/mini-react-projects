import { useState } from "react";
import colorPalette from "./colorPalette.json";

const usePalettes = () => {
  const [paletteSelection, setPaletteSelection] = useState("CLEAN");
  const setDark = () => {
    console.log("fired");
    setPaletteSelection("DARK");
  };
  console.log(paletteSelection);

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
  } = colorPalette[paletteSelection];

  return {
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
    setPaletteSelection,
    setDark,
  };
};

export default usePalettes;

// https://www.happyhues.co/palettes/4
