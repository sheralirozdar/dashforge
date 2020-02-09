import { combineReducers } from 'redux';
import fileCardReducer from '../containers/fileManager/reducer'
import contactReducer from '../containers/contact/reducer'
import DrawerReducer  from '../containers/rightSideBar/reducer'
import CalendarReducer from '../containers/calendar/reducer'
import CommonReducer from './commanReducer'

const rootReducer = combineReducers({
    file: fileCardReducer,
    contact: contactReducer,
    drawers : DrawerReducer,
    calendar : CalendarReducer,
    commonReducer : CommonReducer
});

export default rootReducer;

