import React from 'react'
import { Form, Checkbox, Button, Message } from 'semantic-ui-react'

class SignUpForm extends React.Component {

  state = {
    username: "",
    displayName: "",
    password: "",
    tc: false,
    errors: [],
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleTC = (e) => {
    this.setState({
      tc: !this.state.tc
    })
  }

  termsAndConditions = () => {
    alert("Terms & Conditions: Don't be a dick")
  }

  formSubmit = (e) => {
    e.preventDefault()

    if (this.validateSubmit()) {
      this.props.action(this.state.username, this.state.displayName, this.state.password)
    }
  }

  validateSubmit = () => {
    const errors = []

    if (this.state.username.length < 3) {
      errors.push("Username must have at least 3 characters")
    }
    if (this.state.displayName.length < 2) {
      errors.push("Display Name must have at least 2 characters")
    }
    if (this.state.password.length < 5) {
      errors.push("Password must have at least 5 characters")
    }
    if (!this.state.tc) {
      errors.push("You must agree to the Terms & Conditions")
    }

    if (errors.length > 0) {
      this.setState({ errors })
      return false
    } else {
      return true
    }
  }

  render() {
    const {
      username,
      displayName,
      password,
      tc,
      errors,
    } = this.state

    return (
      <React.Fragment>
        <h2>Sign Up</h2>
        <Form onSubmit={this.formSubmit}>
          <Form.Field>
            <label>Username</label>
            <input
              type="text" name="username"
              value={username}
              onChange={this.handleInputChange}
            />
        </Form.Field>
          <Form.Field>
            <label>Display Name</label>
            <input
              type="text" name="displayName" id="displayName"
              value={displayName}
              onChange={this.handleInputChange}
            />
        </Form.Field>
          <Form.Field>
            <label htmlFor="password">Password</label>
            <input
              type="password" name="password" id="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          {
            errors.length > 0
            ?
            <Message negative list={errors}></Message>
            :
            null
          }
          <Form.Field>
            <Checkbox checked={tc} onClick={this.handleTC}/>
            <span>  I agree to the <a onClick={this.termsAndConditions}>Terms & Conditions</a></span>
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </React.Fragment>
    )
  }
}

export default SignUpForm
