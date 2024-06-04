const homeHero = {
  name: 'homeHero',
  title: 'Home: Hero',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title (optional)',
      type: 'string',
    },{
      name: 'titleHighlight',
      title: 'Title Highlight (optional)',
      type: 'string',
    },
    {
      name: 'subTitle',
      title: 'Sub Title (optional)',
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
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}

export default homeHero
