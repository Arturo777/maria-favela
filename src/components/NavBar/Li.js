import React, { useState, useEffect } from 'react'

const Li = props => {
  const {
    functions,
    submenu,
    style,
    children,
  } = props;
  const { alignitems, position } = props
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    // console.log('useEffect');
    window.addEventListener('resize', checkSize);
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };
  }, []);
  const [liStyle, setLiStyle] = useState({
    color: '#292929',
    borderTop: '3px solid white',
    
  })
  const [subLicolor, setSubLicolor] = useState("#f2efef")
  const styles = {
    position: position && (Number(size) < 1000 && position),
    display: 'flex',
    justifyContent: 'center',
    alignItems: alignitems ? (Number(size) < 1000 && alignitems) : 'center',
    width: Number(size) > 1000 && '140px',
    backgroundColor: "subli" in props ? subLicolor : (Number(size) > 1000 ? 'white' : subLicolor),
    maxWidth: Number(size) > 1000 && '200px',
    borderTop: Number(size) > 1000 && ("subli" in props ? 'none' : liStyle.borderTop),
    borderBottom:  Number(size) > 1000 ? ("subli" in props ? 'none' : '3px solid white') : '1px solid #DADADA',
    fontFamily: 'Raleway',
    fontWeight: '400',
    fontStyle: 'normal',
    color: liStyle.color,
    textAlign: 'center',
    cursor: 'pointer',
    boxShadow:  "subli" in props && '1px 1px 30px rgb(0 0 0 / 6%)',
    transition: 'opacity, background .4s ease-in',
  }
  const handleStyleOver = () => {
    setLiStyle({
      ...style, 
      color: '#c70234', 
      borderTop: '3px solid #c70234',
    })
    setSubLicolor('white')
  }
  const handleStyleLeave = () => {
    
      setLiStyle({
        ...style, 
        color: '#292929',
        borderTop: '3px solid white',
        // backgroundColor: "subli" in props && '#f2efef'
      })
      setSubLicolor('#f2efef')
    
  }
  return (
    <li
      {...props}
      style={{ ...styles, ...style }} 

      onMouseOver={ () => {
        if (Number(size) > 1000) {
          handleStyleOver(); 
          'functions' in props && functions.showSubMenu(submenu);
        }
      }}

      onMouseLeave={ () => { 
        if (Number(size) > 1000) {
          handleStyleLeave(); 
          'functions' in props && functions.hideSubMenu(submenu);
        }
      }}
    >
      {children}
    </li>
    
  )
}



export default Li
