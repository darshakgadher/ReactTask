import FavouriteSpell from "../../pages/FavouriteSpell";
import SpellListing from "../../pages/SpellListing";

const routes = [
  {
    path: "/",
    Component: SpellListing,
  },
  {
    path: "/list",
    Component: SpellListing,
  },
  {
    path: "/favourite",
    Component: FavouriteSpell,
  },
];
export default routes;
