import { ActorCard } from "../actor-card/actor-card";
import { Box } from "@mui/material";

const FIRST_ACTOR_INDEX = 0;
const LAST_ACTOR_INDEX = 5;

function ActorList(props) {
  const { cast } = props;
  const newCast = cast.slice(FIRST_ACTOR_INDEX, LAST_ACTOR_INDEX);

  return (
    <Box
      sx={{
        display: "flex",
        gap: "1rem",
        "@media(max-width: 50rem)": {
          flexDirection: "column",
        },
      }}
    >
      {newCast.map((item) => (
        <ActorCard key={item.id} item={item} />
      ))}
    </Box>
  );
}

export { ActorList };