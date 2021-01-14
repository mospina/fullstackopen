import React from 'react'

const Filter = ({value, handler}) => (
  <div>
    filter shown with: <input onChange={handler} value={value}/>
  </div>
)

export default Filter
