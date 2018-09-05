import React from 'react'
import { connect } from 'react-redux'
import { Modal, Form, Button } from 'semantic-ui-react'

import { createExpense } from '../adapters/ButlerAPI'

class ExpenseForm extends React.Component {

  state = {
    title: "",
    description: "",
    date: "",
    amount: 0,
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
      amount,
    } = this.state

    return (
      <Modal trigger={<Button>Expense</Button>} centered={false}>
        <Modal.Header>New Expense</Modal.Header>
        <Modal.Content>
          <Form onSubmit={ (e) => {
            e.preventDefault()
            this.props.submit(this.props.userId, title, description, date, amount)
          }}>
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
            <Form.Field>
              <label>Date</label>
              <input
                type="date" name="date"
                value={date}
                onChange={this.handleInputChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Amount</label>
              <input
                type="number" name="amount"
                value={amount}
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
