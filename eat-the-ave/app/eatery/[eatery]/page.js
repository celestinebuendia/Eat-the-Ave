import TypeIcon from "@/app/components/TypeIcon";
import { getRatingString, getStatusString } from "@/app/utils/stringUtils";
import { client } from "@/sanity/lib/client";

async function getEatery(slug) {
  const query = `*[_type == "restaurant" && slug.current == $slug] {
    name,
    address,
    status,
    thoughts,
    type,
    itemsHad[]->,
    itemsPlanned[]->,
    "slug":slug.current
  }`;

  const eatery = await client.fetch(query, { slug });
  return eatery;
}

export default async function EateryPage({ params }) {
  const eatery = await getEatery(params.eatery);
  return (
    <div>
      <EateryHeader eatery={eatery[0]}/>
      <div className="border border-white p-5 rounded-md mx-16 my-6">
        {eatery[0].thoughts}
      </div>
      <div className="grid grid-cols-2 sm:block sm:space-y-6">
        <div className="mx-5 border border-white p-4 rounded-md">
          <p className="text-2xl mb-4 font-semibold text-center">Eats Eaten</p>
          {eatery[0].itemsHad !== null ?
            <div>
              {eatery[0].itemsHad.sort(compareItems).map((item) => (
                <EateryItemCard key={item.name} item={item} />
              ))}
            </div>
          : 
            <div className="border-y border-dashed py-4 border-white italic">
              No Results
            </div>
          }
        </div>
        <div className="mx-5 border border-white p-4 rounded-md">
          <p className="text-2xl mb-4 font-semibold text-center">Prospective Eats</p>
          {eatery[0].itemsPlanned !== null ?
            <div>
              {eatery[0].itemsPlanned.sort(compareItems).map((item) => (
                <EateryItemCard key={item.name} item={item} />
              ))}
            </div>
          : 
            <div className="border-y border-dashed py-4 border-white italic">
              No Results
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export function EateryHeader({eatery}) {
  const stringStatus = eatery.status > 3 ? "Visited" : "Unvisited";
  return (
    <div className="grid grid-cols-3 space-x-4 sm:grid-cols-5">
      <div className="border border-white p-4 rounded-md flex justify-between col-span-2 sm:flex-col sm:col-span-3">
        <div className="flex flex-col justify-center space-y-3">
          <h2 className="text-4xl font-semibold">{eatery.name}</h2>
          <p className="text-primary-400">{eatery.address}</p>
        </div>
        <div className="flex flex-col justify-center space-y-2 sm:flex-row sm:space-y-0 sm:justify-center sm:mt-2 sm:space-x-2">
          {eatery.type.map((type) => (
            <div key={type.name} className="flex items-center line-clamp-1 text-primary-300 justify-end">
              <p className="mr-2 line-clamp-1 sm:hidden sm:w-0">{type.name}</p> <TypeIcon type={type.name}/>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center border border-white p-4 rounded-md space-y-2 text-center sm:col-span-2">
        <p className="text-2xl font-semibold">Status: {stringStatus}</p>
        <p className="text-primary-400 text-lg">{getStatusString(eatery.status)}</p>
      </div>
    </div>
  );
}

export function EateryItemCard({item}) {
  return (
    <div className="grid grid-cols-2 border-y border-dashed py-2 border-white">
      <div className="space-y-2 mr-1">
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <div className="flex items-center text-primary-400">
          <TypeIcon type={item.type.name} />
          <p className="ml-2">{item.type.name}</p>
        </div>
      </div>
      <div className="space-y-2 ml-1">
        <p className="text-lg text-end">Rating: {getRatingString(item.rating, item.tried)}</p>
        <p className="text-sm w-auto text-end ml-auto text-primary-400">{item.explanation}</p>
      </div>
    </div>
  );
}

function compareItems(a, b) {
  return b.rating - a.rating;
}