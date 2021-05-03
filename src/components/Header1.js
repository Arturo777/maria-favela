import React from 'react'

const Header1 = props => {
  const {
    color,
  } = props;
  const styles = {
    h1: {
      fontSize: 33,
      lineHeight: '50px',
      fontFamily: "Oswald",
      color: color && color,
    },
  }
  return (
    <h1 style={styles.h1}>
      {props.children}
    </h1>
  )
}

export default Header1
