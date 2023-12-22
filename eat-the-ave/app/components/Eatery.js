import Link from "next/link";
import TypeIcon from "./TypeIcon";
import { getStatusString } from "../utils/stringUtils";

export default function EateryCard({rest}) {
  const itemsHadString = (rest.itemsHad !== null) ? rest.itemsHad.length : 0;
  const itemsPlannedString = (rest.itemsPlanned !== null) ? rest.itemsPlanned.length : 0;

  return (
    <Link
      href={`/eatery/${rest.slug}`}
      className="grid grid-cols-3 sm:grid-cols-5 hover:opacity-75 transition-opacity border border-white p-4 rounded-md"
    >
      <div className="space-y-2 sm:col-span-2">
        <h2 className="text-lg font-semibold">{rest.name}</h2>
        <p className="text-sm text-primary-500">
            {rest.address}
        </p>
      </div>
      <div className="flex flex-col mx-3 justify-center space-y-1 sm:mx-auto">
        {rest.type.map((type) => (
          <div key={type.name} className="flex items-center line-clamp-1 text-sm text-primary-400"><TypeIcon type={type.name}/> <p className="ml-2 sm:hidden sm:w-0 sm:ml-0">{type.name}</p></div>
        ))}
      </div>
      <div className="flex flex-col space-y-2 text-end mr-2 sm:col-span-2">
        <h2 className="">Status: {getStatusString(rest.status)}</h2>
        <div className="space-y-2 text-primary-400">
          <p className="text-sm line-clamp-1">Items Had: {itemsHadString}</p>
          <p className="text-sm line-clamp-1">Items Planned: {itemsPlannedString}</p>
        </div>
      </div>
    </Link>
  )
}
