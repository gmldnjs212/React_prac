// 이전에 학습했던 Action Creator와는 조금 차이가 있다.
// payload에 필요한 Action Creator에서는 함수를 선언할 때,
// 매개변수 자리에 payload를 넣어줘야한다.

// Action Value
const ADD_NUMBER = "ADD_NUMBER";

// Action Creator
export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    // payload: payload, -> key와 value가 같으면 축약가능
    payload,
  };
};

// Initial State
const initialState = {
  number: 0,
};

// Reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        // state.number (기존의 nubmer)에 action.paylaod(유저가 더하길 원하는 값)을 더한다.
        number: state.number + action.payload,
      };
    default:
      return state;
  }
};

// export default reducer
export default counter;
