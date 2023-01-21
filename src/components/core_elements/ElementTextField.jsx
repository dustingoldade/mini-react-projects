import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const ElementTextField = ({ color }) => {
  const styling = {
    "& input": {
      color: "red",
    },
    "& label": {
      color: "red",
    },
    "& p": {
      color: "red",
    },
    "& .MuiInput-root:before": {
      borderBottom: "solid 5px red",
    },
    "& .Mui-focused:after": {
      borderBottom: "solid 1px yellow",
      color: "red",
    },
    "& label.Mui-focused": {
      color: "red",
    },
  };

  return (
    <TextField
      variant="standard"
      sx={styling}
      label={"Hello"}
      helperText={"mellow"}
      error
    />
  );
};

export default ElementTextField;
