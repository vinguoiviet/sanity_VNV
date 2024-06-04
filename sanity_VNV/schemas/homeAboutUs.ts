const homeAboutUs = {
  name: 'HomeAboutUs',
  title: 'Home: AboutUs',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title (optional)',
      type: 'string',
    },
    {
      name: 'content1',
      title: 'Content 1 (optional)',
      type: 'string',
    },
    {
      name: 'content2',
      title: 'Content 2 (optional)',
      type: 'string',
    },
    {
      name: 'content3',
      title: 'Content 3 (optional)',
      type: 'string',
    },
    {
      name: 'content4',
      title: 'Content 4 (optional)',
      type: 'string',
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
    {
      name: 'imageBelow',
      title: 'Image Below',
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

export default homeAboutUs
