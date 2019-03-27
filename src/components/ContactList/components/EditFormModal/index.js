import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { toggleModal, editContact } from './../../actions'
import { makeGetModal, makeGetSelectedContact } from './../../selectors'
import EditFormModal from './EditFormModal'

const mapDispatchToProps = (dispatch) => ({
	onToggleModal: () => dispatch(toggleModal(null)),
	onEditContact: (contact) => dispatch(editContact(contact))
})

const mapStateToProps = createStructuredSelector({
  modal: makeGetModal(),
  selectedContact: makeGetSelectedContact()
})

export default connect(mapStateToProps, mapDispatchToProps)(EditFormModal)