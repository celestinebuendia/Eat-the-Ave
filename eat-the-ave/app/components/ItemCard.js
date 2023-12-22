import Link from "next/link";
import { getRatingString } from "../utils/stringUtils";
import TypeIcon from "./TypeIcon";

export default function ItemCard({item}) {
  return (
    <div className="flex flex-col justify-between border border-white p-4 rounded-md">
      <div className="grid grid-cols-2">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <Link href={`/eatery/${item.restaurant.slug}`} className="line-clamp-1 text-sm text-primary-400 md:hover:text-primary-500">
              {item.restaurant.name}
          </Link>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-end">
            <p className="mr-2">{item.type.name}</p> <TypeIcon type={item.type.name} />
          </div>
          <p className="text-sm text-primary-400 text-end">Rating: {getRatingString(item.rating, item.tried)}</p>
        </div>
      </div>
      <p className="py-3 mx-16 text-center text-sm italic">"{item.explanation}"</p>
    </div>
  );
}
