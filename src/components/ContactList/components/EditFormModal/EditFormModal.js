import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap'
import classNames from 'classnames'

class EditFormModal extends Component {
  constructor () {
    super ()
    this.state = {
      id: '',
      firstName: '',
      middleName: '',
      lastName: '',
      mobileNumber: '',
      email: '',
      errors: {}
    }
    
    this.reset = this.state
    this.onOpened = this.onOpened.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectedContact.id !== this.props.selectedContact.id) {
      this.setState({
        ...this.props.selectedContact,
        errors: {}
      })
    }
  }

  onOpened () {
    this.setState({
      ...this.state,
      errors: {}
    })
  }

  onChange (e) {
    let { name, value } = e.target

    this.setState({
      [name]: value
    }, () => this.validateField(name))
  }

  onBlur (e) {
    let { name } = e.target

    this.validateField(name)
  }

  onSubmit (e) {
    let { errors, ...state } = this.state

    e.preventDefault()

    Object.keys(state).map((name) => {
      this.validateField(name)
    })
    
    if (Object.keys(errors).length === 0) {
      this.props.onEditContact(state)
    }
  }

  validateField (name) {
    let { errors, ...state } = this.state

    if (state[name] === "") {
      errors[name] = "This field is required"
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(state[name]) && name === "email") {
      errors[name] = "Please enter a valid email address"
    } else if (!/^(09|\+639)\d{9}$/.test(state[name]) && name === "mobileNumber") {
      errors[name] = "Must be a phone number"
    } else {
      delete errors[name]
    }

    this.setState({ errors })
  }

  render() {
  	const { modal } = this.props
    const {
      firstName,
      middleName,
      lastName,
      mobileNumber,
      email,
      errors
    } = this.state

    return (
      <Modal isOpen={modal === 'edit'} toggle={this.props.onToggleModal} onOpened={this.onOpened}>
        <ModalHeader toggle={this.props.onToggleModal}>Edit Contact</ModalHeader>
        <ModalBody>
          <Form autoComplete="off" onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                className={classNames({ 'is-invalid': errors.firstName })}
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Please enter your first name"
                value={firstName}
                onChange={this.onChange}
                onBlur={this.onBlur}
              />
              {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
            </FormGroup>
            <FormGroup>
              <Label for="middleName">Middle Name</Label>
              <Input
                className={classNames({ 'is-invalid': errors.middleName })}
                type="text"
                name="middleName"
                id="middleName"
                placeholder="Please enter your middle name"
                value={middleName}
                onChange={this.onChange}
                onBlur={this.onBlur}
              />
              {errors.middleName && <div className="invalid-feedback">{errors.middleName}</div>}
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                className={classNames({ 'is-invalid': errors.lastName })}
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Please enter your last name"
                value={lastName}
                onChange={this.onChange}
                onBlur={this.onBlur}
              />
              {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                className={classNames({ 'is-invalid': errors.email })}
                type="email"
                name="email"
                id="email"
                placeholder="Please enter your email address"
                value={email}
                onChange={this.onChange}
                onBlur={this.onBlur}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </FormGroup>
            <FormGroup>
              <Label for="mobileNumber">Mobile No.</Label>
              <Input
                className={classNames({ 'is-invalid': errors.mobileNumber })}
                type="number"
                name="mobileNumber"
                id="mobileNumber"
                placeholder="Please enter your mobile no."
                value={mobileNumber}
                onChange={this.onChange}
                onBlur={this.onBlur}
              />
              {errors.mobileNumber && <div className="invalid-feedback">{errors.mobileNumber}</div>}
            </FormGroup>
            <Button type="submit" color="primary">Submit</Button>
          </Form>
        </ModalBody>
      </Modal>
    );
  }
}

export default EditFormModal