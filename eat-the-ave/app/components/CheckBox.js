import { MdOutlineCheckBox } from "react-icons/md";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

export default function({checked}) {
  return checked ? <MdOutlineCheckBox className="flex-shrink-0"/> : <MdOutlineCheckBoxOutlineBlank className="flex-shrink-0"/>;
}