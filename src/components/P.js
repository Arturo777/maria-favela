import React from 'react'

const P = props => {
  const {
    color,
    fontweight,
    lineheight
  } = props;
  const styles = {
    marginBottom: '20px',
    color: color ? color : '#545454',
    fontSize: '17px',
    lineHeight: lineheight ? lineheight : '22px',
    fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
    fontWeight: fontweight && fontweight,
  }
  return (
    <p style={styles}>
      {props.children}
    </p>
  )
}

export default P
