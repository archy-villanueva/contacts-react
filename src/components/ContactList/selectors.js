import { createSelector } from 'reselect'

const getContacts = (state) => state.contacts

const makeGetContactList = () => createSelector(
	getContacts,
	(contactState) => contactState.contactList
)

const makeGetSelectedContact = () => createSelector(
	getContacts,
	(contactState) => contactState.selectedContact
)

const makeGetModal = () => createSelector(
	getContacts,
	(contactState) => contactState.modal
)


export {
	makeGetContactList,
	makeGetSelectedContact,
	makeGetModal
}