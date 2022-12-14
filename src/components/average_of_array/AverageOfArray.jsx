import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import ElementButton from "../core_elements/ElementButton";
import ElementPaper from "../core_elements/ElementPaper";
import ElementTitle from "../core_elements/ElementTitle";
import jsonText from "../../locales/en.json";
import muiStyles from "../../locales/muiStyles.json";
import useAverageOfArray from "./UseAverageOfArray";

const {
  AverageOfArry_Title,
  AverageOfArry_HelperText,
  AverageOfArry_TextFieldLabel,
} = jsonText;
const { PADDING_SM, PADDING_MED } = muiStyles;

const AverageOfArray = ({ activePalette }) => {
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
  const {
    numberToShow,
    inputValue,
    showErrorInput,
    showNumber,
    errorHelperText,
    inputValueHandler,
  } = useAverageOfArray();

  return (
    <ElementPaper activePalette={activePalette}>
      <ElementTitle title={AverageOfArry_Title} activePalette={activePalette} />
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
        <ElementButton
          onClick={showNumber}
          activePalette={activePalette}
          label={"Submit"}
        />
      </Box>
      <Box>
        <Typography sx={{ color: COLOR_SECONDARY_CONTRAST }}>
          {numberToShow}
        </Typography>
      </Box>
    </ElementPaper>
  );
};

export default AverageOfArray;
