import Container from "@/app/components/Container";
import EateryCard from "@/app/components/Eatery";
import { client } from "@/sanity/lib/client";

async function getEatery(slug) {
  const query = `*[_type == "restaurant" && slug.current == $slug] {
    name,
    address,
    status,
    type,
    "slug":slug.current
  }`;

  const eatery = await client.fetch(query, { slug });
  return eatery;
}

export default async function EateryPage({ params }) {
  const eatery = await getEatery(params.eatery);
  return (
    <Container>
      {eatery.map((eatery) => (
        <div key={eatery.slug}>
          <h2 className="text-lg font-semibold">{eatery.name}</h2>
          <p className="line-clamp-1 text-sm text-primary-500">
              {eatery.address}
          </p>
          {eatery.type.map((type) => (
            <p key={type.name} className="line-clamp-1 text-sm text-primary-500">
              {type.name}
            </p>
          ))}
        </div>
      ))}
    </Container>
  );
}