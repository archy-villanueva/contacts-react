import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { toggleModal, addContact } from './../../actions'
import { makeGetModal, makeGetSelectedContact } from './../../selectors'
import AddFormModal from './AddFormModal'

const mapDispatchToProps = (dispatch) => ({
	onToggleModal: () => dispatch(toggleModal(null)),
	onAddContact: (contact) => dispatch(addContact(contact))
})

const mapStateToProps = createStructuredSelector({
  modal: makeGetModal(),
  selectedContact: makeGetSelectedContact()
})

export default connect(mapStateToProps, mapDispatchToProps)(AddFormModal)