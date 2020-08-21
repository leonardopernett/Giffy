export const initialState= {
  count:0,
  name:null
}

export const reducer = (state=initialState, actions)=>{
  switch (actions.type) {
    case "GET_COUNT":
      return {...state, count:state.count + 1 }

    case "GET_NAME":
      return { ...state,name:actions.payload }

    default:
     return state;
   }
}