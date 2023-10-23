import { SORT_BY_LIST } from "../../components/filters/sort-by-filter/sort-by-list";

function createSearchLink(sortBy, yearsRange, genres) {
  const sortByUrl =
    sortBy === SORT_BY_LIST[0].name ? "popularity.desc" : "vote_count.desc";

  const genreUrl =
    genres.length === 0 ? "" : genres.map((item) => item.id).join(",");

  const sortParametersUrl = new URLSearchParams({
    "release_date.gte": `${yearsRange[0]}-01-01`,
    "release_date.lte": `${yearsRange[1]}-01-01`,
    sort_by: sortByUrl,
    with_genres: genreUrl,
  });

  return sortParametersUrl.toString();
}

export { createSearchLink };