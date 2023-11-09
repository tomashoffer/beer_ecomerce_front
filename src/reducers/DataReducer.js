const initialState = {
  allProducts: [],
  product: {},
}




const DataReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SET_ALL_PRODUCTS":
      return {...state, data: action.payload};
    case "SET_PRODUCT":
      return {...state, urls: action.payload};
    default:
      return state;
  }
}

export default DataReducer;


