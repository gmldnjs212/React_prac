// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서
const counter = (state = initialState, action) => {
  switch (action.type) {
    // 받은 액션객체의 type이 PLUS_ONE인 경우를 추가함
    case "PLUS_ONE":
      return {
        // 기존 state에 있던 number에 +1을 수행
        number: state.number + 1,
      };
    case "MINUS_ONE":
      return {
        // 기존 state에 있던 number에 -1을 수행
        number: state.number - 1,
      };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;
