const rightBottomBodyNews = {
    title: 'News: Right Bottom Body Column',
    name: 'rightBottomBodyNews',
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
  
  export default rightBottomBodyNews
  