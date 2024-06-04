const contact = {
  title: 'Contact: Body',
  name: 'contact',
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
      title: 'Side Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload an image to represent the icon.', // Thêm mô tả
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}

export default contact
