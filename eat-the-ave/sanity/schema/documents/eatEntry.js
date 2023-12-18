export default {
  name: "eatEntry",
  title: "Eat Entry",
  type: "document",
  fields: [
    {
      name: "itemsHad",
      title: "Items Had",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{type: "menuItem"}]
        }
      ],
    },
    {
      name: "review",
      title: "Review",
      type: "text"
    },
    {
      name: "date",
      title: "Date",
      type: "date"
    }
  ]
}