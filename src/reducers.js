import { combineReducers } from 'redux'
import  contacts from './components/ContactList/reducer'

const rootReducer = combineReducers({
	contacts
})

export default rootReducer