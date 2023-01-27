import { Box, Container } from "@mui/material";
import muiStyles from "../../locales/muiStyles.json";
import { Link, useLocation } from "react-router-dom";
import ElementButton from "../core_elements/ElementButton";
import Text from "../../locales/en.json";
import { useMemo } from "react";
import "./SelectActiveComponent.css";

const { PADDING_MED, PADDING_SM } = muiStyles;
const {
  SelecActiveComponentTab_Average_Of_Array,
  SelecActiveComponentTab_BPM_Counter,
  SelecActiveComponentTab_Change_Color_Theme,
  SelecActiveComponentTab_Fetch_Img,
} = Text;

const SelectActiveComponent = () => {
  const location = useLocation();

  // Trigger rerender on changing url
  useMemo(() => {}, [location.pathname]);

  return (
    <Container sx={{ maxWidth: "80%" }}>
      <Box
        display={"flex"}
        py={PADDING_MED}
        gap={PADDING_SM}
        px="auto"
        sx={{ justifyContent: "space-around" }}
        className="header__a--remove_text_decoration"
      >
        <Link to="/arrayaverager">
          <ElementButton
            label={SelecActiveComponentTab_Average_Of_Array}
            disabled={
              location.pathname === "/arrayaverager" ||
              (location.pathname === "/" && true)
            }
          />
        </Link>
        <Link to="/bpmcounter">
          <ElementButton
            label={SelecActiveComponentTab_BPM_Counter}
            disabled={location.pathname === "/bpmcounter" && true}
          />
        </Link>
        <Link to="/themechanger">
          <ElementButton
            label={SelecActiveComponentTab_Change_Color_Theme}
            disabled={location.pathname === "/themechanger" && true}
          />
        </Link>
        <Link to="/imgfetcher">
          <ElementButton
            label={SelecActiveComponentTab_Fetch_Img}
            disabled={location.pathname === "/imgfetcher" && true}
          />
        </Link>
      </Box>
    </Container>
  );
};

export default SelectActiveComponent;
