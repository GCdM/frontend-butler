import React from 'react'
import { connect } from 'react-redux'
import { Modal, Form, Button, Divider, Grid } from 'semantic-ui-react'

import { createExpense } from '../adapters/ButlerAPI'

class ExpenseForm extends React.Component {

  state = {
    id: 0,
    name: "",
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const {
      id,
      name,
    } = this.state

    return (
      <Modal trigger={<Button>Choose/Create Household</Button>} centered={false}>
        <Modal.Header>Choose or Create Household</Modal.Header>
        <Modal.Content>

          <Grid columns={3}>
            <Grid.Column>
              <Form onSubmit={ (e) => {
                  e.preventDefault()
                }}>
                <Form.Field>
                  <label>Choose an Existing Household by ID</label>
                  <input
                    type="number" name="id"
                    value={id}
                    onChange={this.handleInputChange}
                    />
                </Form.Field>
                <Button type="submit">Submit</Button>
              </Form>
            </Grid.Column>

            <Grid.Column>
              <Divider vertical>OR</Divider>
            </Grid.Column>

            <Grid.Column>
              <Form onSubmit={ (e) => {
                  e.preventDefault()
                }}>
                <Form.Field>
                  <label>Create a New Household</label>
                  <input
                    type="text" name="name" placeholder="Household Name"
                    value={name}
                    onChange={this.handleInputChange}
                    />
                </Form.Field>
                <Button type="submit">Submit</Button>
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
    submit: (userId, title, description, date, amount) => {
      createExpense(userId, title, description, date, amount)
        .then( window.location.reload() )
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm)
