import React from 'react';
import './Image.css';

const Image = (props) => {

  return (
      <img src={props.image} className='image' alt='Dog image' />
  )

}

export default Image;
