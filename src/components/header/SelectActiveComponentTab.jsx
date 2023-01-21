import { Box, Container } from "@mui/material";
import muiStyles from "../../locales/muiStyles.json";
import { Link, useLocation } from "react-router-dom";
import ElementButton from "../core_elements/ElementButton";
import Text from "../../locales/en.json";
import { useEffect } from "react";
import "./header.css";

const { PADDING_MED } = muiStyles;
const {
  SelecActiveComponentTab_Average_Of_Array,
  SelecActiveComponentTab_BPM_Counter,
  SelecActiveComponentTab_Change_Color_Theme,
  SelecActiveComponentTab_Fetch_Img,
} = Text;

const SelectActiveComponentTab = () => {
  const location = useLocation();

  useEffect(() => {
    //rerender
  }, [location.pathname]);

  return (
    <Container sx={{ maxWidth: "80%" }}>
      <Box
        display={"flex"}
        py={PADDING_MED}
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

export default SelectActiveComponentTab;
