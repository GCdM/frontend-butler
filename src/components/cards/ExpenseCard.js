import React from 'react'
import moment from 'moment'
import { Image, Accordion, Icon } from 'semantic-ui-react'

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
    } = this.props.expense

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
            PLACEHOLDER FOR PAYMENTS
          </Accordion.Content>
        </Accordion>
      </React.Fragment>
    )
  }
}



export default ExpenseCard
