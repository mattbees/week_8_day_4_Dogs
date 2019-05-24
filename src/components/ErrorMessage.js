import React from 'react';

const ErrorMessage = (props) => {
  console.log(props);

  if (props.status === true){
    return null
  }else{
    return (
      <div className = 'error-message'>
        <h3>Dog Not found</h3>
      </div>
    )
  }
}

export default ErrorMessage;
