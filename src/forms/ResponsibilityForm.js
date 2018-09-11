import React from 'react'
import { connect } from 'react-redux'
import { Modal, Form, Button, Icon } from 'semantic-ui-react'

import { createResponsibility } from '../adapters/ButlerAPI'

class ResponsibilityForm extends React.Component {

  state = {
    title: "",
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const {
      title,
    } = this.state

    const modalButton = <Button basic animated>
                          <Button.Content visible>Responsibility</Button.Content>
                          <Button.Content hidden>
                            <Icon name="clipboard list" />
                          </Button.Content>
                        </Button>

    return (
      <Modal trigger={modalButton} centered={false}>
        <Modal.Header>New Responsibility</Modal.Header>
        <Modal.Content>
          <Form onSubmit={ (e) => {
            e.preventDefault()
            this.props.submit(this.props.householdId, title)
          }}>
            <Form.Field>
              <label>Title</label>
              <input
                type="text" name="title"
                value={title}
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
    submit: (householdId, title) => {
      createResponsibility(householdId, title)
        .then( window.location.reload() )
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsibilityForm)
