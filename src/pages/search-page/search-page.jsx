import { FilmList } from "../../components/film-list/film-list";
import { FiltersPanel } from "../../components/filters/filters-panel/filters-panel";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/reducers/user-reducer";
import { USER_STATUSES } from "../../store/action-creators/user-action-creator";

function SearchPage() {
  const user = useSelector(selectUser);
  const { userStatus } = user;

  return (
    userStatus === USER_STATUSES.AUTHTORIZED_USER && (
      <Box
        sx={{
          display: "flex",
          gap: "1.5rem",
          p: "5.5rem 1.5rem 1.5rem 1.5rem",
          width: "100%",
          "@media(max-width: 50rem)": {
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <FiltersPanel />
        <FilmList />
      </Box>
    )
  );
}

export { SearchPage };