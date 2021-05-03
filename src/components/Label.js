import React from 'react'

export const Label = props => {
  const {
    textAlign,
    children,
    htmlFor,
    marginleft,
    margintop,
  } = props;
  const styles = {
    color: '#8A80F9',
    fontWeight: '600',
    fontSize: 14,
    textAlign: textAlign ? textAlign : 'start',
    marginLeft: marginleft && marginleft,
    marginTop: margintop && margintop,
  }
  return (
    <label htmlFor={htmlFor} style={styles}>
      {children}
    </label>
  )
}


