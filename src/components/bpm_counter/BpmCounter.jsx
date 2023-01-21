import { Box, Container, Paper, Button, Typography } from "@mui/material";
import ElementTitle from "../core_elements/ElementTitle";
import ElementPaper from "../core_elements/ElementPaper";
import ElementButton from "../core_elements/ElementButton";
import jsonText from "../../locales/en.json";
import muiStyles from "../../locales/muiStyles.json";
import ElementShowCodeSinpIt from "../core_elements/showCodeSnipIt/ElementShowCodeSnipIt";
import { useState, useContext } from "react";
import { ThemeContext } from "../../App";
import imgs from "../../locales/img/imgIndex";
const { CodeSnipIt_BPM } = imgs;

const { PADDING_MED, PADDING_LG } = muiStyles;
const { BPMCounter_Title, BPMCounter_Btn_Tap, BPMCounter_Btn_Reset } = jsonText;

let clickCount = 0;
let firstClickTime = 0;

const BPMCounter = () => {
  const { COLOR_SECONDARY_CONTRAST } = useContext(ThemeContext);
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
    <ElementPaper>
      <ElementTitle title={BPMCounter_Title} />
      <Box sx={{ my: PADDING_MED }}>
        <ElementButton onClick={bpmClickHandler} label={BPMCounter_Btn_Tap} />
      </Box>
      <Box>
        <Typography sx={{ color: COLOR_SECONDARY_CONTRAST }}>
          {bpmText}
        </Typography>
      </Box>
      <Box sx={{ mt: PADDING_LG }}>
        <ElementButton
          onClick={resetHandler}
          label={BPMCounter_Btn_Reset}
          type={"alert"}
        />
      </Box>
      <ElementShowCodeSinpIt codeSnipIt={CodeSnipIt_BPM} />
    </ElementPaper>
  );
};

export default BPMCounter;
