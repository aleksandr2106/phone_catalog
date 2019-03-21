const initialState = {
  counter: 0,
  data: [],
  activePage: 'asdasdadasd',
};

export default function(state = initialState, action) {
  console.log('State:', state);
  console.log('Action:', action);

  switch (action.type) {
    case 'ADD_COUNTER':
      return {
        ...state,
        counter: state.counter + action.value,
      };

    default:
      return state;
  }
}
