import React, { useState, useContext } from 'react'
import Li from './Li'
import { NavLink } from 'react-router-dom'
import { SizeContext } from './../../App'
const logo = `${process.env.PUBLIC_URL}/images/logoMariaFavela.png`


const NavBar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const [subMenuToShow, setSubMenuToShow] = useState('')
  const size = useContext(SizeContext)
  
  const styles = {
    nav: {
      display: 'flex',
      padding: Number(size) >= 1000 && '0 50px',
      flexDirection: Number(size) < 1000 ? 'column' : 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    header:{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    burger: {
      width: '75px',
      padding: '25px',
      display: Number(size) > 1000 && 'none',
    },
    ul: {
      // border: '1px solid blue',
      // display: isMenuVisible ? 'flex' : (Number(size) < 1000 && 'none'),
      display: Number(size) <= 1000 ? (isMenuVisible ? 'flex' : 'none') : 'flex',
      // display: Number(size) <= 1000 ? 'none' : 'flex',
      listStyleType: 'none',
      height: Number(size) >= 1000 && 100,
      // padding: Number(size) >= 1000 && '0 100px',
      flexDirection:  Number(size) < 1000 ? 'column' : 'row',
      alignItems: Number(size) < 1000 && 'stretch',
    },
    logo: {
      fontSize: 40,
      margin: '0 25px',
    },
    a: {
      textTransform: 'uppercase',
      textDecoration: 'none',
      // border: '1px solid purple',
      flexGrow: '1',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 12,
      fontWeight: '500',
      color: 'inherit',
      padding: '20px 0'
    },
    aSub: {
      color: '#292929',
      padding: Number(size) >= 1000 ? '15px 0' : '20px 0',
    },
    img: {
      width: 142,
    },
    button: {
      display: Number(size) >= 1000 && 'none',
      position: 'absolute',
      right: '0px',
      top: '0px',
      width: '53px',
      padding: '19px',
    }
  }
  const functions = {
    showSubMenu: (submenu) => {
      setSubMenuToShow(submenu);
    },
    hideSubMenu : () => {
      setSubMenuToShow('');
      },
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.header}>
        <NavLink to="/" style={styles.logo}>
          <img style={styles.img} src={logo} alt="Maria Favela Logo"/>
        </NavLink>
        <img 
          style={styles.burger} 
          onClick={() => setIsMenuVisible(!isMenuVisible)}
          src={`${process.env.PUBLIC_URL}/images/burger.png`}
          alt="burger-icon"
        />
      </div>

      <ul style={styles.ul}>

        <Li key="2" style={{marginLeft: Number(size) >= 1000 && 'auto'}}>
          <NavLink style={styles.a} to="/">Home</NavLink>
        </Li>




        <Li key="3" submenu='terapias' functions={functions} alignitems='flex-start' position='relative'>
          <div style={{display: 'flex', flexDirection: 'column', flexGrow: '1',}}>
            <NavLink style={styles.a} to="/terapias-y-servicios">Terapias y Servicios</NavLink>
            <Ul size={size}  submenu='terapias' submenutoshow={subMenuToShow} >
              <Li key="1" subli={"true"}>
                <NavLink style={{...styles.a, ...styles.aSub}} to="/terapias-y-servicios/salud-cuantica">Salud Cuantica</NavLink>
                
              </Li>
              <Li key="2" subli={"true"}>
                <NavLink style={{...styles.a, ...styles.aSub}} to="/terapias-y-servicios/metodo-yuen">Método Yuen</NavLink>
              </Li>
              <Li key="3" subli={"true"}>
                <NavLink style={{...styles.a, ...styles.aSub}} to="/terapias-y-servicios/constelaciones-familiares">Constelaciones Familiares</NavLink>
              </Li>
              <Li key="4" subli={"true"}>
                <NavLink style={{...styles.a, ...styles.aSub}} to="/terapias-y-servicios/access-consciousness">Access Consciousness</NavLink>
              </Li>
              <Li key="5" subli={"true"} style={{borderBottom: 0}}>
                <NavLink style={{...styles.a, ...styles.aSub}} to="/terapias-y-servicios/coaching">Coaching</NavLink>
              </Li>
            </Ul>
          </div>
          
          <img src={`${process.env.PUBLIC_URL}/images/arrow.png`} alt="desplegar" style={styles.button}
            onClick={ () => subMenuToShow === 'terapias' ? setSubMenuToShow('') : setSubMenuToShow('terapias') } 
          />

        </Li>




        <Li key="4" submenu='cursos' functions={functions} alignitems='flex-start' position='relative'>
          <div style={{display: 'flex', flexDirection: 'column', flexGrow: '1',}}>
            <NavLink style={styles.a} to="/cursos/cursos-metodo-yuen">Cursos</NavLink>
            <Ul size={size}  submenu='cursos' submenutoshow={subMenuToShow} >
              <Li key="1" subli={"true"}>
                <NavLink style={{...styles.a, ...styles.aSub}} to="/cursos/cursos-metodo-yuen">Cursos de Método Yuen</NavLink>
              </Li>
              <Li key="2" subli={"true"}>
                <NavLink style={{...styles.a, ...styles.aSub}} to="/cursos/cursos-access-consciousness">Cursos de Access Consciousness</NavLink>
              </Li>
            </Ul>
          </div>

          <img src={`${process.env.PUBLIC_URL}/images/arrow.png`} alt="desplegar" style={styles.button}
            onClick={ () => subMenuToShow === 'cursos' ? setSubMenuToShow('') : setSubMenuToShow('cursos') }
          />

        </Li>







        <Li key="5">
          <NavLink style={styles.a} to="/contacto">Contacto</NavLink>
        </Li>

        <Li key="6">
          <NavLink style={styles.a} to="/preguntas-frecuentes">Preguntas Frecuentes</NavLink>
        </Li>
        

        

      </ul>
    </nav>
  )
}

const Ul = props => {
  const {children, size, submenutoshow, submenu} = props;
  const defualtStyle = Number(size) >= 1000 ?
    {
      position: Number(size) >= 1000 && 'absolute',
      left: Number(size) >= 1000 && '0',
      visibility: Number(size) >= 1000 && 'hidden',
      opacity: Number(size) >= 1000 && '0',
      zIndex: Number(size) >= 1000 && '1',
      transition: Number(size) >= 1000 && 'opacity .2s ease-in',
      borderTop: Number(size) >= 1000 ? '3px solid #c70234' : 'none',
    } 
    : 
    {
      position: Number(size) < 1000 && 'absolute',
      left: Number(size) < 1000 && '0',
      visibility: Number(size) < 1000 && 'hidden',
      opacity: Number(size) < 1000 && '0',
      zIndex: Number(size) < 1000 && '1',
      transition: Number(size) < 1000 && 'opacity .2s ease-in',
      borderTop: Number(size) < 1000 && '3px solid #c70234',
    }


  const changedStyle = Number(size) >= 1000 ?
  {
    ...defualtStyle,
    visibility:  'visible',
    opacity:  (Number(size) >= 1000 && 1),
    width:  (Number(size) >= 1000 && '140px'),
    left:  (Number(size) >= 1000 && 'unset'),
    top:  (Number(size) >= 1000 && 100),
    borderTop:  (Number(size) >= 1000 ? '3px solid #c70234' : 'none'),
    } 
    : 
    {
      ...defualtStyle,
      position: 'static',
      visibility: 'visible',
      opacity: Number(size) >= 1000 && 1,
      width: Number(size) >= 1000 ? '140px' : '100%',
      left: Number(size) >= 1000 && 'unset',
      top: Number(size) >= 1000 && 100,
      borderTop: Number(size) >= 1000 ? '3px solid #c70234' : 'none',
    }
  
  const styles = submenu === submenutoshow ? ( changedStyle ) : ( defualtStyle);
  
  return (
    <ul {...props} style={ styles }>
      {children}
    </ul>
  )
}


export default NavBar