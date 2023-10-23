import { MainPage } from "./pages/main-page/main-page";
import "./styles/App.css";
import { FilmDetailsPage } from "./pages/film-details-page/film-details-page";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { ErrorPage } from "./pages/error-page/error-page";
import { SearchPage } from "./pages/search-page/search-page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainPage />} errorElement={<ErrorPage />}>
      <Route path="/" element={<SearchPage />}></Route>
      <Route path="/film/:film_id" element={<FilmDetailsPage />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;