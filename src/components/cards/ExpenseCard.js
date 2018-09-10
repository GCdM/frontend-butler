import React from 'react'
import moment from 'moment'
import { Image, Accordion, Icon } from 'semantic-ui-react'

import PaymentSummary from '../PaymentSummary'

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
      userName,
      userImg,
      title,
      description,
      amount,
      date,
      payments,
    } = this.props.expense

    const paymentSummaries = payments.map( payment => <PaymentSummary payment={payment} /> )

    return (
      <React.Fragment>
        <Accordion styled className="expense-accordion">
          <Accordion.Title active={this.state.active} onClick={this.handleDropdown}>
            <Image size="mini" src={userImg} floated="left" rounded/>
            <span className="float-left">{userName}</span>
            <span className="float-right">{moment(date).format('L')}</span>
            <br/><br/>
            {title} for {amount}
            <Icon name="dropdown" />
          </Accordion.Title>
          <Accordion.Content active={this.state.active}>
            <p>{description}</p>
            <br/>
            {paymentSummaries}
            <br/><br/>
            <p className="instruction">Click on a member above to mark payment as received</p>
          </Accordion.Content>
        </Accordion>
      </React.Fragment>
    )
  }
}



export default ExpenseCard
