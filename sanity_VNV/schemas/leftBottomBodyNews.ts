const leftBottomBodyNews = {
    title: 'News: Left Bottom Body Column',
    name: 'leftBottomBodyNews',
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
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [
          {
            type: 'image',
            options: {
              hotspot: true,
            },
          },
        ],
      },
      {
        name: 'url',
        title: 'URL',
        type: 'url',
      },
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
  
  }
  
  export default leftBottomBodyNews
  