import { Card, CardMedia } from "@mui/material";
import { ElementCodeSnipitProps } from "../../../locales/ts.models";

const ElementCodeSnipit: React.FC<ElementCodeSnipitProps> = ({ img }) => {
  return (
    <Card elevation={3}>
      <CardMedia component="img" alt="Code Snip it" image={img} />
    </Card>
  );
};

export default ElementCodeSnipit;
