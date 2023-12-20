import { GiNoodles } from "react-icons/gi";
import { GiBoba } from "react-icons/gi";
import { GiMeat } from "react-icons/gi";
import { IoIceCreamSharp } from "react-icons/io5";
import { GiChopsticks } from "react-icons/gi";
import { FaStore } from "react-icons/fa";

export default function TypeIcon({type}) {
  if (type === "Asian Noodle Soup") {
    return <GiNoodles className="text-white"/>;
  } else if (type === "Cold Sweet Drink") {
    return <GiBoba className="text-white"/>;
  } else if (type === "Meat Stuff") {
    return <GiMeat className="text-white"/>;
  } else if (type === "Sweet Treat") {
    return <IoIceCreamSharp className="text-white"/>;
  } else if (type === "Other Asian") {
    return <GiChopsticks className="text-white"/>;
  } else {
    return <FaStore className="text-white"/>;
  }
}