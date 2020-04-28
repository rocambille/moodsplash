import React from 'react';

const ImageList = ({
  images,
  filteredTags,
}) => (
  images.filter((image) => image.tags.findIndex((tag) => filteredTags.includes(tag.title)) !== -1).map((image) => <img src={image.urls.regular} alt={image.alt_description} />)
);

export default ImageList;
