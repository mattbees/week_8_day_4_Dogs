const dogsReducer = (state, action) =>{
  switch(action.type){
    case 'ADD_IMAGE':
      return {
        images:[...state.images,action.image],
        success: true
      }
    case 'NO_IMAGE':
      return {
        images: state.images,
        success: false
      }

    default:
      return state
  }
};

export default dogsReducer;
