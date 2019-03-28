import React, { Component, Fragment } from 'react'
import { Table, ButtonGroup, Button } from 'reactstrap'
import AddFormModal from './components/AddFormModal'
import EditFormModal from './components/EditFormModal'
import './style.css'

class ContactList extends Component {
  render () {
    const { contactList } = this.props

    return (
      <Fragment>
        <Button type="submit" color="primary" onClick={() => this.props.onToggleModal()}>
          <i className="fa fa-plus"></i> Add Contact
        </Button>
        <Table bordered responsive className="mt-3">
          <thead>
            <tr>
              <th>Action</th>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Mobile Number</th>
              <th>Email Address</th>
            </tr>
          </thead>
          <tbody>
            {contactList.length === 0 ? <tr><td className="text-center" colSpan="6">No data available</td></tr> : (
              contactList.map(({
                id,
                firstName,
                middleName,
                lastName,
                mobileNumber,
                email
              }) => (
                <tr key={id}>
                  <td>
                    <ButtonGroup size="sm">
                      <Button type="button" color="success" onClick={() => this.props.onSelectContact(id)}>
                        <i className="fa fa-edit"></i>
                      </Button>
                      <Button type="button" color="danger" onClick={() => this.props.onDeleteContact(id)}>
                        <i className="fa fa-times"></i>
                      </Button>
                    </ButtonGroup>
                  </td>
                  <td>{firstName}</td>
                  <td>{middleName}</td>
                  <td>{lastName}</td>
                  <td>{mobileNumber}</td>
                  <td>{email}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
        <AddFormModal />
        <EditFormModal />
      </Fragment>
    )
  }
}

ContactList.defaultProps = {}

ContactList.propTypes = {}

export default ContactList