import { Box, Typography, TextField } from "@mui/material";
import ElementButton from "../core_elements/ElementButton";
import ElementPaper from "../core_elements/ElementPaper";
import ElementTitle from "../core_elements/ElementTitle";
import jsonText from "../../locales/en.json";
import muiStyles from "../../locales/muiStyles.json";
import useAverageOfArray from "./UseAverageOfArray";
import imgs from "../../locales/img/imgIndex";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import ElementShowCodeSinpIt from "../core_elements/showCodeSnipIt/ElementShowCodeSnipIt";
const { CodeSnipIt_AverageOfArray } = imgs;

const {
  AverageOfArry_Title,
  AverageOfArry_HelperText,
  AverageOfArry_TextFieldLabel,
} = jsonText;
const { PADDING_MED } = muiStyles;

const AverageOfArray = () => {
  const { COLOR_SECONDARY_CONTRAST } = useContext(ThemeContext);
  const {
    numberToShow,
    inputValue,
    showErrorInput,
    showNumber,
    errorHelperText,
    inputValueHandler,
  } = useAverageOfArray();

  return (
    <ElementPaper>
      <ElementTitle title={AverageOfArry_Title} />
      <Box sx={{ mt: PADDING_MED }}>
        <TextField
          variant="standard"
          error={showErrorInput}
          id="filled-basic"
          label={AverageOfArry_TextFieldLabel}
          helperText={errorHelperText + AverageOfArry_HelperText}
          value={inputValue}
          onChange={inputValueHandler}
        />
      </Box>
      <Box sx={{ my: PADDING_MED }}>
        <ElementButton onClick={showNumber} label={"Submit"} />
      </Box>
      <Box>
        <Typography sx={{ color: COLOR_SECONDARY_CONTRAST }}>
          {numberToShow}
        </Typography>
      </Box>
      <ElementShowCodeSinpIt codeSnipIt={CodeSnipIt_AverageOfArray} />
    </ElementPaper>
  );
};

export default AverageOfArray;
