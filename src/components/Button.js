import React from 'react'

const Button = props => {
  const { children } = props
  const defaultBack = '#c70234';
  const changedBack = '#f50240';
  const styles = {
    backgroundColor: defaultBack,
    borderRadius: 4,
    cursor: 'pointer',
    fontSize: '30px',
    lineHeight: '60px',
    padding: '0 40px',
    color: '#fff',
    fontWeight: 'bold',
    border: 'none'
  }

  const handleStyleOver = e => {
    e.target.style.backgroundColor = changedBack
  }
  const handleStyleLeave = e => {
    e.target.style.backgroundColor = defaultBack
  }

  return (
    <button {...props} style={styles}
      onMouseOver={handleStyleOver}
      onMouseLeave={handleStyleLeave}
    >
      {children}
    </button>
  )
}

export default Button
