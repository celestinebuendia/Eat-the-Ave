export default function ItemCard({item}) {
  return (
    <div className="space-y-4 border border-white p-4 rounded-md block">
      <h2 className="text-lg font-semibold">{item.name}</h2>
      <p className="line-clamp-1 text-sm text-primary-500">
          {item.restaurant.name}
      </p>
      <p className="line-clamp-1 text-sm text-primary-500">
        {item.type.name}
      </p>
    </div>
  );
}