import producer from 'immer';

const initialState = {
  currentRoute: null,
  darkMode: false,
  modelName: null,
  modelData: null,
  backButtonStatus: false
};

export default (state = initialState, action) => {
  console.log("reducer", action)
  return producer(state, draft => {
    switch (action.type) {
      case "CURRENT_ROUTE":
        draft.currentRoute = action.payload;
        break;
      case "DARK_MODE":
        draft.darkMode = !state.darkMode;
        break;
      case "SET_MODEL":
        draft.modelName = action.payload.modelName;
        draft.modelData = action.payload.data;
        break;
      case "TOOGLE_BACK_BUTTON":
          draft.backButtonStatus = action.payload;
          break;

    }
  });
}