import {
	EDIT_CONTACT,
	ADD_CONTACT,
	DELETE_CONTACT,
	SELECT_CONTACT,
	TOGGLE_MODAL
} from './constants'

export function editContact(contact) {
	return {
		type: EDIT_CONTACT,
		payload: { contact }
	}
}

export function addContact(contact) {
	return {
		type: ADD_CONTACT,
		payload: { contact }
	}
}

export function deleteContact(id) {
	return {
		type: DELETE_CONTACT,
		payload: { id }
	}
}

export function selectContact(id) {
	return {
		type: SELECT_CONTACT,
		payload: { id }
	}
}

export function toggleModal(modal) {
	return {
		type: TOGGLE_MODAL,
		payload: { modal }
	}
}