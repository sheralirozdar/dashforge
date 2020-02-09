export const setDrawer = ( contentNumber ) => async (dispatch ,getState ) => {
    dispatch({ type : "SET_DRAWER" , payload: { contentNumber } })
}