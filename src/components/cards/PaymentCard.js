import React from 'react'

import logo from '../../logo.svg'

const PaymentCard = (props) => {
  return (
    <div className="event">
      <div className="label">
        <img src={logo} />
      </div>
      <div className="content">
        <div className="summary">
          <a className="user">
            Gabriel Miranda
          </a> did something
          <div className="date">
            01/01/18
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentCard

// <div class="event">
//   <div class="label">
//     <img src="/images/avatar/small/elliot.jpg">
//   </div>
//   <div class="content">
//     <div class="summary">
//       <a class="user">
//         Elliot Fu
//       </a> added you as a friend
//       <div class="date">
//         1 Hour Ago
//       </div>
//     </div>
//     <div class="meta">
//       <a class="like">
//         <i class="like icon"></i> 4 Likes
//       </a>
//     </div>
//   </div>
// </div>
