import { client } from "@/sanity/lib/client";
import EateryCard from "../components/Eatery";

async function getEateries() {
  const query = `*[_type == "restaurant" && defined(slug)] {
    name,
    address,
    status,
    type,
    "slug":slug.current
  }`;

  const eateries = await client.fetch(query);
  return eateries;
}

export default async function AllEateryCards() {
  const eateries = await getEateries();
  return (
    <div className="space-y-2">
      {eateries.map((eatery) => (
        <EateryCard key={eatery.slug} rest={eatery} />
      ))}
    </div>
  );
}