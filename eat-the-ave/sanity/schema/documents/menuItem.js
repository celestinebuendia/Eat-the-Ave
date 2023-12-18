export const FOODRATINGS = [
  {title: "MAJOR EAT AWARD/Devlish temptation", value: 3}, 
  {title: "GOOD YUM/Try before die", value: 2}, 
  {title: "satisfactory/Looks good", value: 1}, 
  {title: "eh", value: 0}
];

export default {
  name: "menuItem",
  title: "Menu Item",
  type: "document",
  fields: [
    {
      name: "tried",
      title: "Tried",
      type: "boolean",
    },
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "type",
      title: "Food Type",
      type: "foodType"
    },
    {
      name: "restaurant",
      title: "Restaurant",
      type: "reference",
      weak: true,
      to: [{type: "restaurant"}],
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      options: {list: FOODRATINGS}
    },
    {
      name: "explanation",
      title: "Explanation",
      type: "text"
    }
  ]
}