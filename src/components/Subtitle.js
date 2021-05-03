import React from 'react'

const Subtitle = props => {
  const {
    color,
  } = props;
  const styles = {
    p: {
      fontFamily: "Cormorant Garamond, serif",
      fontWeight: '600',
      letterSpacing: '0px',
      fontStyle: 'normal',
      fontSize: '21px',
      marginTop: '20px',
      lineHeight: '27px',
      color: color && color,
    }
  }
  return (
    <p style={styles.p}>
      {props.children}
  </p>
  )
}

export default Subtitle
