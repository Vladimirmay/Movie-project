import { Box, Typography } from "@mui/material";
import { ImageWithPlaceholder } from "../image-with-placeholder/image-with-placeholder";

function ActorCard(props) {
  const {
    item: { name, character, profile_path: image },
  } = props;

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <ImageWithPlaceholder
        mainImage={image}
        placeholderStyle={{
          width: "10rem",
          height: "10rem",
          objectFit: "cover",
          borderRadius: "50%",
        }}
        imageStyle={{
          width: "10rem",
          height: "10rem",
          objectFit: "cover",
          borderRadius: "50%",
        }}
      />
      <Typography variant="h6" sx={{textAlign: "center"}}>{name}</Typography>
      <Typography variant="body1" sx={{textAlign: "center"}}>{character}</Typography>
    </Box>
  );
}

export { ActorCard };