import AverageOfArray from "./components/average_of_array/AverageOfArray";
import BPMCounter from "./components/bpm_counter/BpmCounter";
import Header from "./components/header/Header";
import { Box } from "@mui/system";
import "./App.css";
import React, { useState } from "react";
import colorPalette from "./locales/colorPalette.json";
import { Route, Routes } from "react-router-dom";
import PaletteSelection from "./components/palette_selection/PaletteSelction";

import NewPhotos from "./components/new_photos/NewPhotos";
import SelectActiveComponentTab from "./components/header/SelectActiveComponentTab";

export const ThemeContext = React.createContext();

function App() {
  const [selectedColorPalette, setSelectedColorPalette] = useState("CLEAN");
  const activePalette = colorPalette[selectedColorPalette];
  const { COLOR_BG } = activePalette;

  return (
    <ThemeContext.Provider value={activePalette}>
      <Box
        sx={{
          bgcolor: COLOR_BG,
          minHeight: "100vh",
          textAlign: "center",
          pb: 2,
        }}
      >
        <Header />
        <SelectActiveComponentTab />
        <Routes>
          <Route path="/" element={<AverageOfArray />} />
          <Route path="/arrayaverager" element={<AverageOfArray />} />

          <Route path="/bpmcounter" element={<BPMCounter />} />
          <Route path="/imgfetcher" element={<NewPhotos />} />
          <Route
            path="/themechanger"
            element={
              <PaletteSelection
                setSelectedColorPalette={setSelectedColorPalette}
              />
            }
          />
        </Routes>
      </Box>
    </ThemeContext.Provider>
  );
}

export default App;
