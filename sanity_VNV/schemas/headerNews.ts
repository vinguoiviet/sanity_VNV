const headerNews = {
    title: 'News: Header',
    name: 'HeaderNews',
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
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        description: 'Upload an image to represent the logo.', 
      },
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
  }
  
  export default headerNews