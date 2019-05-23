import React from 'react';
import Image from './Image';
import './ImageList.css'; 

const ImageList = (props) => {

  const imageList = props.images.map((image, index) => {
    return <Image
      image={ image.message }
      key={ index }
      />
  });

  return (
    <div className='image-list'>
      { imageList }
    </div>
  );
}

export default ImageList;
