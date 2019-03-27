import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { deleteContact, selectContact, toggleModal } from './actions'
import { makeGetContactList } from './selectors'
import ContactList from './ContactList'

const mapDispatchToProps = (dispatch) => ({
	onDeleteContact: (id) => dispatch(deleteContact(id)),
	onSelectContact: (id) => dispatch(selectContact(id)),
	onToggleModal: () => dispatch(toggleModal('add'))
})

const mapStateToProps = createStructuredSelector({
  contactList: makeGetContactList()
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)