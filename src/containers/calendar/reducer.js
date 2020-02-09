import producer from 'immer';

const initialState = {
    modelOpen : false,
    modelType: null,
    date: null,
    eventdescription: null
};

export default (state = initialState, action) => {

  return producer(state, draft => {
    switch (action.type) {
        // case "SET_MODEL_EVENT":
        //   draft.modelOpen = !state.modelOpen;
        //   draft.modelType = action.payload.type;
        //   draft.date = action.payload.date;
        //   draft.eventdescription = action.payload.eventdescription;
        //   break;
      default:
        break;
    }
  });
}