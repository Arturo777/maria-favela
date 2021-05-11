import React from 'react'
import { SizeContext } from './../App'

export const Input = props => {

  const size = React.useContext(SizeContext);

  const {
    margin,
    width,
    style
  } = props;
  const styles = {
    color: '#8A0020',
    backgroundColor: '#ede6fc',
    outline: 'none',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    lineHeight: '40px',
    padding: '0 10px',
    width: width ? (Number(size) >= 1000 && width) : '100%',
    margin: margin && (Number(size) >= 1000 && margin),
  }
  return (
    <input {...props} style={{...styles, ...style}} />

  )
}

export const Textarea = props => {
  const styles = {
    color: '#8A0020',
    backgroundColor: '#ede6fc',
    outline: 'none',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    padding: '10px'
  }
  return (
    <textarea {...props} style={styles}>{props.children}</textarea>

  )
}

export const Select = props => {
  const styles = {
    color: '#8A0020',
    backgroundColor: '#ede6fc',
    outline: 'none',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    height: '40px',
    width: '100%',
  }
  return (
    <select {...props} style={styles}>{props.children}</select>

  )
}