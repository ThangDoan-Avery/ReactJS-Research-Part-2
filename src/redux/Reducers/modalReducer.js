import React from 'react';

const stateDefault = {
  component: <p>Default com</p>,
  handleSubmit: () => {
    alert('Default submit');
  },
};

export const modalReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'OPEN_FORM': {
      state.component = action.component;
      state.handleSubmit = action.handleSubmit;
      return { ...state };
    }
    default:
      return state;
  }
};
