import uniqid from "uniqid";
import { Box, Typography } from "@mui/material";

const MINS_IN_HOUR = 60;

function getTimeFromMins(mins) {
  let hours = Math.trunc(mins / MINS_IN_HOUR);
  let minutes = mins % MINS_IN_HOUR;
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}:${minutes}`;
}

function FilmDetailList(props) {
  const {
    details: {
      production_countries: countries,
      genres,
      budget,
      revenue,
      release_date,
      runtime,
    },
  } = props;

  const countriesFormat = countries.map((item) => item.name).join(" / ");
  const genresFormat = genres.map((item) => item.name).join(" / ");
  const releaseFormat = release_date.slice(0, 4);
  const budgetFormat = `${(budget / 1000000).toFixed(1)} млн $`;
  const revenueFormat = `${(revenue / 1000000).toFixed(1)} млн $`;
  const runtimeFormat = getTimeFromMins(runtime);

  const detailList = [
    { infoType: "Страна", info: countriesFormat },
    { infoType: "Год", info: releaseFormat },
    { infoType: "Жанр", info: genresFormat },
    { infoType: "Бюджет", info: budgetFormat },
    { infoType: "Сборы", info: revenueFormat },
    {
      infoType: "Время",
      info: `${runtime} мин / ${runtimeFormat}`,
    },
  ];

  return detailList.map((item) => (
    <Box
      key={uniqid()}
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <Typography variant="subtitle1" sx={{ width: "12.5rem" }}>
        {item.infoType}
      </Typography>
      <Typography variant="subtitle1" sx={{ ml: "0.5rem" }}>
        {item.info}
      </Typography>
    </Box>
  ));
}

export { FilmDetailList };