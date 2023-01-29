import { Box, Container } from "@mui/material";
import muiStyles from "../../locales/muiStyles.json";
import { Link, useLocation } from "react-router-dom";
import ElementButton from "../core_elements/ElementButton";
import { useState } from "react";
import "./SelectActiveComponent.css";
import { buttonsData } from "./buttonsData";
const { PADDING_MED, PADDING_SM } = muiStyles;

const SelectActiveComponent = () => {
  const currLocation = useLocation().pathname;
  const [disabledButton, setDisabledButton] = useState(
    currLocation === "/" ? "/arrayaverager" : currLocation
  );

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
        {buttonsData.map((button, key) => (
          <Link to={button.link} key={key}>
            <ElementButton
              label={button.label}
              disabled={disabledButton === button.link}
              onClick={() => setDisabledButton(button.link)}
            />
          </Link>
        ))}
      </Box>
    </Container>
  );
};

export default SelectActiveComponent;
