import producer from 'immer';

const initialState = {
    contentNumber : null
};

export default (state = initialState, action) => {
  return producer(state, draft => {
    switch (action.type) {
      case "SET_DRAWER":
        draft.contentNumber = action.payload.contentNumber;
        break;
      default:
        break;
    }
  });
}