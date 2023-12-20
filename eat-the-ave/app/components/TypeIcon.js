import { GiNoodles } from "react-icons/gi";
import { GiBoba } from "react-icons/gi";
import { GiMeat } from "react-icons/gi";
import { IoIceCreamSharp } from "react-icons/io5";
import { GiChopsticks } from "react-icons/gi";
import { FaStore } from "react-icons/fa";

export default function TypeIcon({type}) {
  if (type === "Asian Noodle Soup") {
    return <GiNoodles className="text-white text-lg"/>;
  } else if (type === "Cold Sweet Drink") {
    return <GiBoba className="text-white text-lg -mt-1"/>;
  } else if (type === "Meat Stuff") {
    return <GiMeat className="text-white text-lg"/>;
  } else if (type === "Sweet Treat") {
    return <IoIceCreamSharp className="text-white text-lg"/>;
  } else if (type === "Other Asian") {
    return <GiChopsticks className="text-white text-lg"/>;
  } else {
    return <FaStore className="text-white text-lg"/>;
  }
}