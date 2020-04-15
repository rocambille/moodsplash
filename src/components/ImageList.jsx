import React from 'react';

const ImageList = ({
  images,
}) => (
  images.map((image) => <img src={image} alt="" />)
);

export default ImageList;
