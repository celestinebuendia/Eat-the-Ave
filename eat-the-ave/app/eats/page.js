"use client";

import { client } from "@/sanity/lib/client";
import ItemCard from "../components/ItemCard";
import { useEffect, useState } from "react";
import DropDown from "../components/Dropdown";
import Loader from "../components/Loader";

async function getMenuItems({filterString, sortString}) {
  const query1 = `*[_type == "menuItem" && tried == true${filterString}] | order(${sortString}) {
    tried,
    name,
    type,
    restaurant-> {
      name,
      "slug":slug.current
    },
    rating,
    explanation
  }`;

  const itemsHad = await client.fetch(query1);

  const query2 = `*[_type == "menuItem" && tried == false${filterString}] | order(${sortString}) {
    tried,
    name,
    type,
    restaurant-> {
      name,
      "slug":slug.current
    },
    rating,
    explanation
  }`;

  const itemsFuture = await client.fetch(query2);

  return [itemsHad, itemsFuture];
}

export default function Eats() {
  const [sort, setSort] = useState("Name");
  const [filter, setFilter] = useState("None");
  const [items, setItems] = useState([[],[]]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const filterString = (filter === "None") ? "" : ` && type.name == "${filter}"`;
    let sortString;
    if (sort === "Name") {
      sortString = "name asc";
    } else if (sort === "Rating") {
      sortString = "rating desc";
    } else {
      sortString = "restaurant->name asc";
    }

    async function fetchData() {
      const content = await getMenuItems({filterString, sortString});
      setItems(content);
      setLoading(false);
    }
    fetchData();
  }, [sort, filter]);

  return (
    <div>
      <div className="space-y-2">
        <div className="flex space-x-5 py-4 justify-end sm:flex-col sm:space-y-4">
          <div className="flex justify-end">
            <p className="black px-2 py-1.5 line-clamp-1">Sort by</p>
            <DropDown options={["Name", "Rating", "Restaurant"]} setOption={setSort} selected={sort} />
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
        <p className="py-4 text-xl font-semibold text-center">Eats Eaten</p>
        {loading &&
          <div className="p-24">
            <Loader />
          </div>
        }
        {items[0].length == 0 && !loading &&
          <div className="border border-dashed border-white p-4 rounded-md italic">No Results</div>
        }
        <div className="pb-4 grid grid-cols-2 gap-6 sm:block sm:space-y-4">
          {items[0].map((item) => (
            <ItemCard key={item.name} item={item}/>
          ))}
        </div>
        <p className="py-4 text-xl font-semibold text-center">Eats to be Eaten</p>
        {loading &&
          <div className="p-24">
            <Loader />
          </div>
        }
        {items[1].length == 0 && !loading &&
          <div className="border border-dashed border-white p-4 rounded-md italic">No Results</div>
        }
        <div className="pb-4 grid grid-cols-2 gap-6 sm:block sm:space-y-4">
          {items[1].map((item) => (
            <ItemCard key={item.name} item={item}/>
          ))}
        </div>
      </div>
    </div>
  )
}