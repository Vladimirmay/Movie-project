import { Box, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Typography variant="h4">Упс! Произошла ошибка</Typography>
      <Typography variant="h5" sx={{ mt: "1rem" }}>
        {`${error.status}: ${error.statusText}` || error.message}
      </Typography>
    </Box>
  );
}

export { ErrorPage };