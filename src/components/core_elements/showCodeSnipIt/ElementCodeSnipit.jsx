import { Card, CardMedia } from "@mui/material";

const ElementCodeSnipit = ({ img }) => {
  return (
    <Card elevation={3}>
      <CardMedia component="img" alt="Code Snip it" image={img} />
    </Card>
  );
};

export default ElementCodeSnipit;
