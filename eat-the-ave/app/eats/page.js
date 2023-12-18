import { client } from "@/sanity/lib/client";
import Container from "../components/Container";
import ItemCard from "../components/ItemCard";

async function getMenuItems() {
  const query = `*[_type == "menuItem" && defined(type)] {
    tried,
    name,
    type,
    restaurant->,
    rating,
    explanation
  }`;

  const items = await client.fetch(query);
  return items;
}

export default async function Eats() {
  const items = await getMenuItems();
  return (
    <Container>
      <input type="checkbox"/>
      <label>Show planned eats</label>
      <div className="space-y-2">
        {items.map((item) => (
          <ItemCard key={item.name} item={item}/>
        ))}
      </div>
    </Container>
  )
}