import React from 'react'
import { connect } from 'react-redux'
import { Modal, Form, Button } from 'semantic-ui-react'

import { createEvent } from '../adapters/ButlerAPI'

class EventForm extends React.Component {

  state = {
    date: "",
    title: "",
    description: "",
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const {
      title,
      description,
      date,
    } = this.state

    return (
      <Modal trigger={<Button>Event</Button>} centered={false}>
        <Modal.Header>New Event</Modal.Header>
        <Modal.Content>
          <Form onSubmit={ (e) => {
            e.preventDefault()
            this.props.submit(this.props.householdId, date, title, description)
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
              <label>Title</label>
              <input
                type="text" name="title"
                value={title}
                onChange={this.handleInputChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
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
    householdId: state.household.id,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    submit: (householdId, date, title, description) => {
      createEvent(householdId, date, title, description)
        .then( window.location.reload() )
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventForm)
