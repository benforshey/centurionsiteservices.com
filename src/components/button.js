import React from 'react'
import PropTypes from 'prop-types'
import { navigateTo } from 'gatsby-link'
import styles from  './button.module.css'

function handleClick () {
  return navigateTo(this)
}

const Button = ({ text, path, ...rest }) => {
  if (path && path.length > 0) {
    return <button className={styles.button} onClick={handleClick.bind(path)}>{text}</button>
  }
  return <button className={styles.button} {...rest}>{text}</button>
}

Button.PropTypes = {
  text: PropTypes.string.isRequired
}

export default Button
