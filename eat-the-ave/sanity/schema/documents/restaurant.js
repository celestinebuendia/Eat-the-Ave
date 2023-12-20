export const RESTSTATUS = [
  {title: "I Live Here", value: 6},
  {title: "My Secret Hangout", value: 5},
  {title: "Tried", value: 4},
  {title: "Want To", value: 3}, 
  {title: "Maybe", value: 2}, 
  {title: "Meh", value: 1}
];

export default {
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "address",
      title: "Address",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "status",
      title: "Visit Status",
      type: "number",
      options: {list: RESTSTATUS},
      validation: (Rule) => Rule.required(),
    },
    {
      name: "type",
      title: "Food Type",
      type: "array",
      of: [{type: "foodType"}],
    },
    {
      name: "thoughts",
      title: "Thoughts",
      type: "text"
    },
    {
      name: "itemsHad",
      title: "Items Had",
      type: "array",
      of: [
        {
          type: "reference",
          weak: true,
          to: [{type: "menuItem"}]
        }
      ],
    },
    {
      name: "itemsPlanned",
      title: "Items to Try",
      type: "array",
      of: [
        {
          type: "reference",
          weak: true,
          to: [{type: "menuItem"}]
        }
      ],
    },
    {
      name: "location",
      title: "Location",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
}