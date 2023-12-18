import restaurant from "./documents/restaurant";
import foodType from "./objects/foodType";
import menuItem from "./documents/menuItem";
import eatEntry from "./documents/eatEntry";

export const schema = {
  types: [restaurant, foodType, menuItem, eatEntry],
}
