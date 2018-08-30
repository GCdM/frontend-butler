import React from 'react'

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
      action,
    } = this.props

    return (
      <React.Fragment>
        <h2>Log In</h2>
        <form onSubmit={ e => {
          e.preventDefault()
          action(this.state.username, this.state.password)
        }}>
          <input
            type="text" name="username" placeholder="Username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <br/><br/>
          <input
            type="password" name="password" placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <br/><br/>
          <input type="submit" />
        </form>
      </React.Fragment>
    )
  }
}

export default LoginForm
