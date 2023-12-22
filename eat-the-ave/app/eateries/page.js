"use client";

import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import DropDown from "../components/Dropdown";
import EateryCard from "../components/Eatery";
import Loader from "../components/Loader";

async function getEateries({filterString, sortString}) {
  if (sortString === "items") {
    sortString = "itemsHad == null, length(itemsHad) desc";
  }

  const query1 = `*[_type == "restaurant" && status > 3${filterString}] | order(${sortString}) {
    name,
    address,
    status,
    type[] {
      name
    },
    itemsHad,
    itemsPlanned,
    "slug":slug.current
  }`;
  const pastEateries = await client.fetch(query1);

  if (sortString === "itemsHad == null, length(itemsHad) desc") {
    sortString = "itemsPlanned == null, length(itemsPlanned) desc";
  }

  const query2 = `*[_type == "restaurant" && status < 4${filterString}] | order(${sortString}) {
    name,
    address,
    status,
    type[] {
      name
    },
    itemsHad,
    itemsPlanned,
    "slug":slug.current
  }`;
  const futureEateries = await client.fetch(query2);

  return [pastEateries, futureEateries];
}

export default function Eats() {
  const [sort, setSort] = useState("Name");
  const [filter, setFilter] = useState("None");
  const [eateries, setEateries] = useState([[],[]]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const filterString = (filter === "None") ? "" : ` && "${filter}" in type[].name`;
    let sortString;
    if (sort === "Name") {
      sortString = "name asc";
    } else if (sort === "Status") {
      sortString = "status desc";
    } else {
      sortString = "items"
    }

    async function fetchData() {
      const content = await getEateries({filterString, sortString});
      setEateries(content);
      setLoading(false);
    }
    fetchData();
  }, [sort, filter]);

  return (
    <div className="space-y-2">
      <div className="flex space-x-5 py-4 justify-end sm:flex-col sm:space-y-4">
        <div className="flex justify-end">
          <p className="black px-2 py-1.5 line-clamp-1">Sort by</p>
          <DropDown options={["Name", "Status", "Menu Items"]} setOption={setSort} selected={sort} />
        </div>
        <div className="flex justify-end">
          <p className="black px-2 py-1.5 line-clamp-1">Filter</p>
          <DropDown 
            options={["None", "Asian Noodle Soup", "Cold Sweet Drink", "Meat Stuff", "Sweet Treat", "Other Asian", "Other Other"]} 
            setOption={setFilter}
            selected={filter}
          />
        </div>
      </div>
      <div className="py-4 space-y-4">
        <p className="py-1 text-xl font-semibold">Places I've Eaten</p>
        {loading &&
          <div className="p-24">
            <Loader />
          </div>
        }
        {eateries[0].length == 0 && !loading &&
            <div className="border border-dashed border-white p-4 rounded-md italic">No Results</div>
        }
        {eateries[0].map((eatery) => (
          <EateryCard key={eatery.slug} rest={eatery} />
        ))}
      </div>
      <div className="py-4 space-y-4">
        <p className="py-1 text-xl font-semibold">Future Eateries</p>
        {loading &&
          <div className="p-24">
            <Loader />
          </div>
        }
        {eateries[1].length == 0 && !loading &&
            <div className="border border-dashed border-white p-4 rounded-md italic">No Results</div>
        }
        {eateries[1].map((eatery) => (
          <EateryCard key={eatery.slug} rest={eatery} />
        ))}
      </div>
    </div>
  );
}

