const headerSales = {
  title: 'Sales: Header',
  name: 'HeaderSales',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}

export default headerSales
