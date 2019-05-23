const dogsReducer = (state = [], action) =>{
  switch(action.type){
    case 'ADD_IMAGE':
      return [...state, action.image]
    case 'NO_IMAGE':
      return
    default:
      return state
  }
};

export default dogsReducer;
