// Code Keypad Component Here
import React from 'react'
import PropTypes from 'prop-types'

class Keypad extends React.Component {
  pw = () => {
   console.log('Entering password...');
 }

  render() {
    return (
      <input onKeyUp={this.pw} type="password" />
    )
  }
}

Keypad.PropTypes = {
  password: PropTypes.string
}

export default Keypad;
