import Link from "next/link";

export default function EateryCard({rest}) {
  return (
    <Link
      href={`/eatery/${rest.slug}`}
      className="space-y-4 md:hover:opacity-75 transition-opacity border border-white p-4 rounded-md block"
    >
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">{rest.name}</h2>
        <p className="line-clamp-1 text-sm text-primary-500">
            {rest.address}
        </p>
        {rest.type.map((type) => (
          <p key={type.name} className="line-clamp-1 text-sm text-primary-500">
            {type.name}
          </p>
        ))}
      </div>
    </Link>
  )
}