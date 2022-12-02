import allPaletteThemesObj from "../../locales/colorPalette.json";
import { Box } from "@mui/material";

const PaletteDisplayBox = ({ element }) => {
  return (
    <Box
      sx={{
        bgcolor: allPaletteThemesObj[element]["COLOR_BG"],
        display: "inline-flex",
        p: 0.5,
        m: 1,
        borderRadius: "5px",
        border: "2px solid black",
      }}
    >
      <Box
        width={".5rem"}
        height={".5rem"}
        sx={{
          bgcolor: allPaletteThemesObj[element]["COLOR_BUTTON"],
          border: "2px solid black",
          p: 1,
          borderRadius: "100%",
        }}
      />
      <Box
        width={".5rem"}
        height={".5rem"}
        sx={{
          bgcolor: allPaletteThemesObj[element]["COLOR_SECONDARY"],
          border: "2px solid black",
          p: 1,
          mx: -1,
          borderRadius: "100%",
        }}
      />
      <Box
        width={".5rem"}
        height={".5rem"}
        sx={{
          bgcolor: allPaletteThemesObj[element]["COLOR_ALERT"],
          border: "2px solid black",
          p: 1,
          borderRadius: "100%",
        }}
      />
    </Box>
  );
};

export default PaletteDisplayBox;
