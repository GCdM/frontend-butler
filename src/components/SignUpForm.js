import React from 'react'

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

  render() {
    const {
      action,
    } = this.props

    return (
      <React.Fragment>
        <h2>Sign Up</h2>
        <form onSubmit={ e => {
          e.preventDefault()
          action(this.state.username, this.state.displayName, this.state.password)
        }}>
          <label htmlFor="username">Username</label><br/>
          <input
            type="text" name="username" id="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <br/><br/>
          <label htmlFor="displayName">Display Name</label><br/>
          <input
            type="text" name="displayName" id="displayName"
            value={this.state.displayName}
            onChange={this.handleInputChange}
          />
          <br/><br/>
          <label htmlFor="password">Password</label><br/>
          <input
            type="password" name="password" id="password"
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

export default SignUpForm
