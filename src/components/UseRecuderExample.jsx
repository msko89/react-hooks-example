import { useReducer } from 'react';

// reducer => state를 변경하는 로직이 담겨 있는 함수
// state: 이전 state 값
// action: 객체이고 필수 프로퍼티로 type을 가진다.
const reducer = (state, action) => {
  if (action.type === 'PLUS') {
    return {
      count: state.count + 1,
    };
  }

  return state;
};

export default function UseRecuderExample() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const click = () => {
    // dispatch => action 객체를 넣어서 실행
    dispatch({ type: 'PLUS' });
  };

  return (
    <div>
      <p>You clicked {state.count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );
}
