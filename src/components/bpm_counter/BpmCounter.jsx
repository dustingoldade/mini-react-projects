import { Box, Container, Paper, Button, Typography } from "@mui/material";
import ElementTitle from "../core_elements/ElementTitle";
import ElementPaper from "../core_elements/ElementPaper";
import ElementButton from "../core_elements/ElementButton";
import jsonText from "../../locales/en.json";
import muiStyles from "../../locales/muiStyles.json";
import { useState } from "react";
import usePalettes from "../../locales/usePalettes";
import { MyLocation } from "@mui/icons-material";
const { PADDING_SM, PADDING_MED, PADDING_LG } = muiStyles;
const { BPMCounter_Title, BPMCounter_Tap_Btn, BPMCounter_Reset_Btn } = jsonText;

let clickCount = 0;
let firstClickTime = 0;

const BPMCounter = ({ activePalette }) => {
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
  const [bpmText, setBpmText] = useState("BPM: 0.0");

  const bpmClickHandler = (e) => {
    if (!firstClickTime) {
      firstClickTime = e.timeStamp;
      return;
    }
    clickCount++;
    const currentBPM = (
      (clickCount / ((e.timeStamp - firstClickTime) / 1000)) *
      60
    ).toFixed(1);
    setBpmText("BPM: " + currentBPM);
  };
  const resetHandler = () => {
    clickCount = 0;
    firstClickTime = 0;
    setBpmText("BPM: 0.0");
  };

  return (
    <ElementPaper activePalette={activePalette}>
      <ElementTitle title={BPMCounter_Title} activePalette={activePalette} />
      <Box sx={{ my: PADDING_MED }}>
        <ElementButton
          onClick={bpmClickHandler}
          activePalette={activePalette}
          label={BPMCounter_Tap_Btn}
        />
      </Box>
      <Box>
        <Typography sx={{ color: COLOR_SECONDARY_CONTRAST }}>
          {bpmText}
        </Typography>
      </Box>
      <Box sx={{ mt: PADDING_LG }}>
        <ElementButton
          onClick={resetHandler}
          activePalette={activePalette}
          label={BPMCounter_Reset_Btn}
          type={"alert"}
        />
      </Box>
    </ElementPaper>
  );
};

export default BPMCounter;
