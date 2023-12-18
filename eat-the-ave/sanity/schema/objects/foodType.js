export const FOODTYPES = [
  "Asian Noodle Soup", 
  "Cold Sweet Drink",
  "Meat Stuff", 
  "Sweet Treat",
  "Other Asian",
  "Other Other",
];

export default {
  name: "foodType",
  title: "Food Type",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      options: {list: FOODTYPES},
    },
  ]
}