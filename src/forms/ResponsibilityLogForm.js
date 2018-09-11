import React from 'react'
import { connect } from 'react-redux'
import { Modal, Form, Button, Icon } from 'semantic-ui-react'

import { logResponsibility } from '../adapters/ButlerAPI'

class ResponsibilityLogForm extends React.Component {

  state = {
    date: "",
    description: "",
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const {
      date,
      description,
    } = this.state

    const modalButton = <Button basic animated disabled={this.props.responsibility.id === 0 ? true : false}>
                          <Button.Content visible>Create Log</Button.Content>
                          <Button.Content hidden>
                            <Icon name="list ul" />
                          </Button.Content>
                        </Button>

    return (
      <Modal trigger={modalButton} centered={false}>
        <Modal.Header>New Log for {this.props.responsibility.title}</Modal.Header>
        <Modal.Content>
          <Form onSubmit={ (e) => {
            e.preventDefault()
            this.props.submit(this.props.responsibility.id, this.props.currentUserId, date, description)
          }}>
            <Form.Field>
              <label>Date</label>
              <input
                type="date" name="date"
                value={date}
                onChange={this.handleInputChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Notes</label>
              <input
                type="text" name="description"
                value={description}
                onChange={this.handleInputChange}
              />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUserId: state.currentUser.id,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    submit: (responsibilityId, userId, date, description) => {
      logResponsibility(responsibilityId, userId, date, description)
        .then( window.location.reload() )
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsibilityLogForm)
