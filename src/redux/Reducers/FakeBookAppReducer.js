const stateDefault = {
  arrContent: [
    { name: 'Trường', content: 'hello guy !' },
    { name: 'Khải', content: 'xin chào bạn !' },
    { name: 'Yến', content: 'Hi mọi người !' },
  ],
};

export const FakeBookAppReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'COMMENT': {
      state.arrContent = [...state.arrContent, action.userComment];
      return { ...state };
    }
    default:
      return state;
  }
};
