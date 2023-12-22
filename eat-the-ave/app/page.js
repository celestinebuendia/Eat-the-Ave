import { Rock_Salt } from 'next/font/google'
import { Kaushan_Script } from "next/font/google";
import { Square_Peg } from 'next/font/google';
import CheckBox from './components/CheckBox';
import { client } from "@/sanity/lib/client";
import Link from 'next/link';

const rocksalt = Rock_Salt({ subsets: ['latin'], weight: '400' })
const satisfy = Kaushan_Script({ subsets: ['latin'], weight: '400' })
const squarepeg = Square_Peg({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <div>
      <div className="text-7xl flex-col text-center space-y-2 my-16">
        <p className={satisfy.className}>Celestine</p>
        <p className={rocksalt.className}>Eats the Ave</p>
      </div>
      <p className="text-center mb-24">One person's quest to eat every food item on the Ave that matches their very specific tastes...</p>
      <div className={squarepeg.className}>
        <Checklist />
      </div>
    </div>
  );
}

async function getEateries() {
  const query = `*[_type == "restaurant"] | order(itemsHad == null, length(itemsHad) desc, itemsPlanned == null, length(itemsPlanned) desc, name) {
    name,
    status,
    itemsHad[]->,
    itemsPlanned[]->,
    "slug":slug.current
  }`;

  const eateries = await client.fetch(query);
  return eateries;
}

export async function Checklist() {
  const eateries = await getEateries();
  return (
    <div className="m-20 sm:mx-5">
      <div className="flex">
        <div className="border border-r-0 w-20 sm:w-16"/>
        <p className="border text-center pr-20 sm:pr-15 pt-4 text-5xl w-full">Checklist</p>     
      </div>
      <div className="flex">
        <div className="w-20 sm:w-16 border border-r-0 border-t-0" />
        <div className="border border-t-0 py-3 px-4 text-3xl w-full">
          {eateries.map((eatery) => (
            <div>
              <Link href={`/eatery/${eatery.slug}`} className="flex items-center hover:text-primary-400">
                <CheckBox checked={eatery.status > 3} />
                <p href={`/eatery/${eatery.slug}`} className="ml-2">{eatery.name}</p>
              </Link>
              <div className="ml-8">
                {eatery.itemsHad !== null &&
                  eatery.itemsHad.map((item) => (
                    <div className="flex items-center">
                      <CheckBox checked={true} />
                      <p className="ml-2">{item.name}</p>
                    </div>
                  )) 
                }
                {eatery.itemsPlanned !== null &&
                  eatery.itemsPlanned.map((item) => (
                    <div className="flex items-center">
                      <CheckBox checked={false} />
                      <p className="ml-2">{item.name}</p>
                    </div>
                  )) 
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}