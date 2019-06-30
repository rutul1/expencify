import React from 'react'

const ListItem = ({ description, amout, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>Amount: {amout}</p>
  </div>
)
export default ListItem
