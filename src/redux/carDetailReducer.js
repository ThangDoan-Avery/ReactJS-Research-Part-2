const defaultState = { name: 'Name default', img: 'https://picsum.photos/200' };

export const carDetailReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'XEM_CHI_TIET': {
      state = action.carDetail;
      return { ...state };
    }
    default:
      return state;
  }
};
