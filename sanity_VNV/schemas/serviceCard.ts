const serviceCard = {
  name: 'serviceCard',
  title: 'Services: Card',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Enter the title for the feature here.', // Thêm mô tả
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
      description: 'Upload an image to represent the feature.', // Thêm mô tả
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}

export default serviceCard
