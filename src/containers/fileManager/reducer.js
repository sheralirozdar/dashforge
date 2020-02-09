import producer from 'immer';

const initialState = {
    modelData : null,
    modelName : null,
    toastData : null,
    toastName : null
};

export default (state = initialState, action) => {
  return producer(state, draft => {
    switch (action.type) {
      case "SET_MODEL":
        draft.modelData = action.payload.data;
        draft.modelName = action.payload.modelName
        break;
      default:
        break;
    }
  });
}