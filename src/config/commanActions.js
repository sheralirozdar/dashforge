export const setCurrentRoute = ( currentRoute ) => async (dispatch, getState ) => {
    dispatch({ type : "CURRENT_ROUTE" , payload: currentRoute  })
}

export const setDarkMode = () => async (dispatch, getState ) => {
    dispatch({ type : "DARK_MODE" , payload: null  })
}

export const setModel = (modelName, data = null) => async (dispatch, getState ) => {
    console.log(modelName , data , "action")
    dispatch({ type : "SET_MODEL" , payload: { data ,modelName} })
}

export const toggleBackButton = (status) => async (dispatch, getState ) => {
    dispatch({ type : "TOOGLE_BACK_BUTTON" , payload: status })
}