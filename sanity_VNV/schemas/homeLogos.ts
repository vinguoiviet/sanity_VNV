const homeLogos = {
  title: 'Home: Logos Banner',
  name: 'logoBannerss',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title (optional)',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload an image to represent the logo.', // Thêm mô tả
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}

export default homeLogos
