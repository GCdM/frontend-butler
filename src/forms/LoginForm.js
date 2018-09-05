import React from 'react'
import { Form, Button } from 'semantic-ui-react'

class LoginForm extends React.Component {

  state = {
    username: "",
    password: "",
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const {
      username,
      password,
    } = this.state

    return (
      <React.Fragment>
        <h2>Log In</h2>
        <Form onSubmit={ (e) => {
          e.preventDefault()
          this.props.action(username, password)
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
            <label>Password</label>
            <input
              type="password" name="password"
              value={password}
              onChange={this.handleInputChange}
              />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </React.Fragment>
    )
  }
}

export default LoginForm
