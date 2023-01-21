import "./NewPhotos.css";
import { Box, CircularProgress } from "@mui/material";
import ElementButton from "../core_elements/ElementButton";
import ElementPaper from "../core_elements/ElementPaper";
import ElementTitle from "../core_elements/ElementTitle";
import jsonText from "../../locales/en.json";
import muiStyles from "../../locales/muiStyles.json";
import { useState } from "react";
const { NewPhoto_Title, NewPhoto_Btn_Cat, NewPhoto_Btn_Dog } = jsonText;
const { PADDING_MED } = muiStyles;

const fetchData = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

const NewPhotos = () => {
  const [animalPhoto, setAnimalPhoto] = useState(null);
  const [isloading, setIsLoading] = useState(false);
  const [firstLoad, setIsFirstLoad] = useState(true);
  const [isFetchError, setIsFetchError] = useState(false);

  const dogPhotoHandler = async () => {
    // While Loop required to eliminate unwated file types pulled from fetch
    setIsFetchError(false);
    let unfullfilled = true;
    let photo = null;
    setIsLoading(true);
    while (unfullfilled) {
      photo = await fetchData("https://random.dog/woof.json");
      const urlType = String(photo.url).slice(-4);
      if (urlType !== ".mp4" && urlType !== "webm") {
        unfullfilled = false;
      }
    }
    setIsFirstLoad(false);
    setIsLoading(false);
    setAnimalPhoto(photo.url);
  };

  const catPhotoHandler = async () => {
    let photo;
    setIsFetchError(false);
    try {
      setIsLoading(true);
      photo = await fetchData("https://api.thecatapi.com/v1/images/search");
    } catch (error) {
      setIsFetchError(true);
    }
    setIsFirstLoad(false);
    setIsLoading(false);
    setAnimalPhoto(photo[0].url);
  };

  const firstLoadOffsetBox = () => {
    if (firstLoad && isloading) {
      return <Box sx={{ pt: PADDING_MED }} />;
    }
  };

  return (
    <ElementPaper>
      <ElementTitle title={NewPhoto_Title} />
      <Box
        sx={{
          my: PADDING_MED,
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <ElementButton onClick={catPhotoHandler} label={NewPhoto_Btn_Cat} />
        <ElementButton onClick={dogPhotoHandler} label={NewPhoto_Btn_Dog} />
      </Box>
      <Box className="box" sx={{ pt: PADDING_MED }}>
        {isFetchError && <p>Something went wrong, please try again</p>}
        {animalPhoto && (
          <img src={animalPhoto} alt="cat" className="paper__photo" />
        )}
        {isloading && (
          <CircularProgress
            color="inherit"
            className="paper__circular-progress--float"
          />
        )}
        {firstLoadOffsetBox()}
      </Box>
    </ElementPaper>
  );
};

export default NewPhotos;
