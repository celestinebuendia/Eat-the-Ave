import { MdOutlineCheckBox } from "react-icons/md";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

export default function({checked}) {
  return checked ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />;
}