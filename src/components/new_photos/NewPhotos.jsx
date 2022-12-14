import "./NewPhotos.css";
import { Box } from "@mui/material";
import ElementButton from "../core_elements/ElementButton";
import ElementPaper from "../core_elements/ElementPaper";
import ElementTitle from "../core_elements/ElementTitle";
import jsonText from "../../locales/en.json";
import muiStyles from "../../locales/muiStyles.json";
import { useState } from "react";
const { NewPhoto_Title, NewPhoto_Cat_Btn, NewPhoto_Dog_Btn } = jsonText;
const { PADDING_MED } = muiStyles;

const fetchData = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

const NewPhotos = ({ activePalette }) => {
  const [animalPhoto, setAnimalPhoto] = useState(null);

  const dogPhotoHandler = async () => {
    let unfullfilled = true;
    let photo = null;
    while (unfullfilled) {
      photo = await fetchData("https://random.dog/woof.json");
      const urlType = String(photo.url).slice(-4);
      if (urlType !== ".mp4" && urlType !== "webm") {
        unfullfilled = false;
      }
    }
    setAnimalPhoto(photo.url);
  };

  const catPhotoHandler = async () => {
    const photo = await fetchData("https://api.thecatapi.com/v1/images/search");
    console.log(photo);
    setAnimalPhoto(photo[0].url);
  };

  return (
    <ElementPaper activePalette={activePalette}>
      <ElementTitle title={NewPhoto_Title} activePalette={activePalette} />
      <Box sx={{ mt: PADDING_MED }}></Box>
      <Box
        sx={{
          my: PADDING_MED,
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <ElementButton
          onClick={catPhotoHandler}
          activePalette={activePalette}
          label={NewPhoto_Cat_Btn}
        />
        <ElementButton
          onClick={dogPhotoHandler}
          activePalette={activePalette}
          label={NewPhoto_Dog_Btn}
        />
      </Box>
      {animalPhoto && (
        <img src={animalPhoto} alt="cat" className="paper__photo" />
      )}
    </ElementPaper>
  );
};

export default NewPhotos;
