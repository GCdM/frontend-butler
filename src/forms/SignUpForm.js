import React from 'react'
import { Form, Checkbox, Button } from 'semantic-ui-react'

class SignUpForm extends React.Component {

  state = {
    username: "",
    displayName: "",
    password: "",
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  termsAndConditions = () => {
    alert("Terms and Conditions: Don't be a dick")
  }

  render() {
    const {
      username,
      displayName,
      password,
    } = this.state

    return (
      <React.Fragment>
        <h2>Sign Up</h2>
        <Form onSubmit={ (e) => {
          e.preventDefault()
          this.props.action(username, displayName, password)
        }}>
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
          <Form.Field>
            <Checkbox />
            <span>  I agree to the <a onClick={this.termsAndConditions}>Terms and Conditions</a></span>
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </React.Fragment>
    )
  }
}

export default SignUpForm
