import React from 'react'
import { connect } from 'react-redux'
import { Modal, Form, Button, Divider, Grid } from 'semantic-ui-react'

import { createHousehold, joinHousehold } from '../adapters/ButlerAPI'

class HouseholdForm extends React.Component {

  state = {
    key: "",
    newKey: "",
    name: "",
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const {
      key,
      newKey,
      name,
    } = this.state

    return (
      <Modal trigger={<Button>Choose/Create Household</Button>} centered={false}>
        <Modal.Header>Choose or Create Household</Modal.Header>
        <Modal.Content>

          <Grid columns={3}>
            <Grid.Column width={7}>
              <Form onSubmit={ (e) => {
                  e.preventDefault()
                  this.props.findHousehold(this.props.userId, key)
                }}>
                <Form.Field>
                  <label>Choose an Existing Household by Key</label>
                  <input
                    type="text" name="key"
                    value={key}
                    onChange={this.handleInputChange}
                    />
                </Form.Field>
                <Button type="submit">Submit</Button>
              </Form>
            </Grid.Column>

            <Grid.Column width={2}>
              <Divider vertical>OR</Divider>
            </Grid.Column>

            <Grid.Column width={7}>
              <Form onSubmit={ (e) => {
                  e.preventDefault()
                  this.props.history.push("/home")
                  this.props.newHousehold(name, this.props.userId, newKey)
                }}>
                <Form.Field>
                  <label>Create a New Household</label>
                  <input
                    type="text" name="name" placeholder="Household Name"
                    value={name}
                    onChange={this.handleInputChange}
                    />
                </Form.Field>
                <Form.Field>
                  <input
                    type="text" name="newKey" placeholder="Household Key"
                    value={newKey}
                    onChange={this.handleInputChange}
                    />
                </Form.Field>
                <Button type="submit">Submit</Button>
                <br/><br/><b>* key</b> will be used for other members to join your house
              </Form>
            </Grid.Column>
          </Grid>

        </Modal.Content>
      </Modal>
    )
  }
}

function mapStateToProps(state) {
  return {
    userId: state.currentUser.id,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    findHousehold: (householdId, userId) => {
      joinHousehold(householdId, userId)
        .then( window.location.reload() )
    },
    newHousehold: (householdName, userId) => {
      createHousehold(householdName, userId)
        .then( window.location.reload() )
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HouseholdForm)
