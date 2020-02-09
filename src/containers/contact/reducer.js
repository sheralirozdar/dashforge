import producer from 'immer';

const initialState = {
    contactDetail : null,
    modelOpen : false,
    modelType : null
};

export default (state = initialState, action) => {

  return producer(state, draft => {
    switch (action.type) {
      case "CONTACT_DETAILS":
        draft.contactDetail = action.payload;
        break;
      default:
        break;
    }
  });
}