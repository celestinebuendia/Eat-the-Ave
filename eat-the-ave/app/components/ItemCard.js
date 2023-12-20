import { getRatingString } from "../utils/stringUtils";
import TypeIcon from "./TypeIcon";

export default function ItemCard({item}) {
  return (
    <div className=" border border-white p-4 rounded-md">
      <div className="flex justify-between">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <p className="line-clamp-1 text-sm text-primary-400">
              {item.restaurant.name}
          </p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center line-clamp-1 justify-end">
            <p className="mr-2">{item.type.name}</p> <TypeIcon type={item.type.name} />
          </div>
          <p className="text-sm text-primary-400 text-end">Rating: {getRatingString(item.rating, item.tried)}</p>
        </div>
      </div>
      <p className="py-3 ml-12 text-sm italic">"{item.explanation}"</p>
    </div>
  );
}
