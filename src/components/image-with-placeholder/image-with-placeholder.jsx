import { useState } from "react";
import { IMG_URL } from "../../js/global-constants";
import { Box } from "@mui/material";

const IS_LOADING_DEFAULT = true;

function ImageWithPlaceholder(props) {
  const { mainImage, secondaryImage, placeholderStyle, imageStyle } = props;

  const [isLoading, setIsLoading] = useState(IS_LOADING_DEFAULT);

  const image = `${IMG_URL}${mainImage || secondaryImage}`;

  return (
    <>
      {isLoading ? (
        <Box
          component="img"
          sx={placeholderStyle}
          src={"../src/public/no-image-placeholder.png"}
        />
      ) : null}
      <Box
        component="img"
        sx={isLoading ? { display: "none" } : imageStyle}
        src={image}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}

export { ImageWithPlaceholder };