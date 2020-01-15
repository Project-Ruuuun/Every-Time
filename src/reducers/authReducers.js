import {createAction,handleActions} from 'redux-actions';


// Default State
const initialState = {
    logined: false
};

// Actions
const AUTHORIZED = "Authorized";
export const setAuth = createAction(AUTHORIZED);


export default handleActions({
    [AUTHORIZED]: (state,action) =>{
        let newState = {
          ...state,
          logined: action.payload.logined,
        }
        return newState;
    }
},initialState);

// // Action Functions
// export function authorized(){
//   return {
//     type: AUTHORIZED
//   };
// }
// export function unauthorized(){
//   return {
//     type: UNAUTHORIZED
//   };
// }

// // Reducer
// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case AUTHORIZED: 
//       return {
//         logined: 'true'
//       }
//     case UNAUTHORIZED: 
//       return {
//         logined: 'false'
//       }
//   }
//   return state;
// }

// Exports Default
//export default reducer;