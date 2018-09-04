import React from 'react'
import moment from 'moment'
import { List, Image, Accordion, Icon } from 'semantic-ui-react'

import logo from '../../logo.svg'

class ExpenseCard extends React.Component {

  state = {
    active: false,
  }

  handleDropdown = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    const {
      user_id,
      title,
      description,
      amount,
      date,
    } = this.props.expense

    return (
      <React.Fragment>
        <Accordion styled className="expense-accordion">
          <Accordion.Title active={this.state.active} onClick={this.handleDropdown}>
            <Image size="mini" src={logo} floated="left" />
            {user_id} ---------------
            {moment(date).format('L')}
            <br/><br/>
            {title} for £{amount}
            <Icon name="dropdown" />
          </Accordion.Title>
          <Accordion.Content active={this.state.active}>
            <p>{description}</p>
            PLACEHOLDER FOR PAYMENTS
          </Accordion.Content>
        </Accordion>
      </React.Fragment>
    )
  }
}

export default ExpenseCard
