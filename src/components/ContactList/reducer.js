import {
	EDIT_CONTACT,
	ADD_CONTACT,
	DELETE_CONTACT,
	SELECT_CONTACT,
	TOGGLE_MODAL
} from './constants'

const initialState = {
  contactList: [
    {
      id: 1,
      firstName: 'Archy',
      middleName: 'Trinidad',
      lastName: 'Villanueva',
      mobileNumber: '09774348908',
      email: 'archy.trinidad.villanueva@gmail.com'
    }
  ],
  selectedContact: {},
  modal: null
}

function contactReducer(state = initialState, action) {
	switch (action.type) {
		case EDIT_CONTACT:
			var contactList = state.contactList
			var contact = action.payload.contact
			var index = contactList.findIndex(o => o.id === contact.id)

			contactList.splice(index, 1, contact)

			return {
				...state,
				contactList: [ ...contactList ],
				modal: action.payload.modal
			}

		case ADD_CONTACT:
			var contactList = state.contactList
			var contact = { ...action.payload.contact, id: contactList.length + 1 }

			return {
				...state,
				contactList: [ ...state.contactList, contact ],
				modal: action.payload.modal
			}

		case DELETE_CONTACT:
			var contactList = state.contactList
			var index = contactList.findIndex(o => o.id === action.payload.id)

			contactList.splice(index, 1)

			return {
				...state,
				contactList: [ ...contactList ],
			}

		case SELECT_CONTACT:
			var contactList = state.contactList
			var index = contactList.findIndex(o => o.id === action.payload.id)

			return {
				...state,
				selectedContact: { ...contactList[index] },
				modal: 'edit'
			}

		case TOGGLE_MODAL:
			return {
				...state,
				selectedContact: {},
				modal: action.payload.modal
			}

		default:
			return state
	}
}

export default contactReducer