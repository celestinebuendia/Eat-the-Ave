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

export default async function BlogPost({ params }) {
  const eatery = await getEatery(params.eatery);
  return (
    <Container>
      {eatery.map((eatery) => (
        <EateryCard key={eatery.slug} rest={eatery}/>
      ))}
    </Container>
  );
}