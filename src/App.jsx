import AverageOfArray from "./components/average_of_array/AverageOfArray";
import BPMCounter from "./components/bpm_counter/BpmCounter";
import Header from "./components/core_elements/Header";
import { Box } from "@mui/system";
import "./App.css";
import { useState } from "react";
import colorPalette from "./locales/colorPalette.json";
import usePalettes from "./locales/usePalettes";
import PaletteSelection from "./components/palette_selection/PaletteSelction";
import { formControlClasses } from "@mui/material";
import NewPhotos from "./components/new_photos/NewPhotos";

function App() {
  const [selectedColorPalette, setSelectedColorPalette] = useState("CLEAN");
  const activePalette = colorPalette[selectedColorPalette];
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
    <Box sx={{ bgcolor: COLOR_BG, minHeight: "100vh", textAlign: "center" }}>
      <Header activePalette={activePalette} />
      <AverageOfArray activePalette={activePalette} />
      <BPMCounter activePalette={activePalette} />
      <PaletteSelection
        activePalette={activePalette}
        setSelectedColorPalette={setSelectedColorPalette}
      />
      <NewPhotos activePalette={activePalette} />
    </Box>
  );
}

export default App;
