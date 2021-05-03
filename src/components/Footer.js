import React from 'react';
/* import face from './../images/facebook.png'
import youtube from './../images/youtube.png'
import instagram from './../images/instagram.png'
import tiktok from './../images/tiktok.png' */
// import facebook from `${process.env.PUBLIC_URL}/images/facebook.png`;
// import instagram from `${process.env.PUBLIC_URL}/images/instagram.png`;
// import youtube from `${process.env.PUBLIC_URL}/images/youtube.png`;
// import tiktok from `${process.env.PUBLIC_URL}/images/tiktok.png`;

const Footer = props => {
  
  
  
  const changedColor = "invert(67%) sepia(9%) saturate(124%) hue-rotate(278deg) brightness(89%) contrast(89%)";
  const defaultColor = "invert(84%) sepia(3%) saturate(695%) hue-rotate(301deg) brightness(82%) contrast(87%)";
  const styles = {
    footer: {
      height: 130,
      backgroundColor: '#efe9e1',
      display: 'flex',
      padding: '18px 10px 16px',
      flexDirection: 'column',
      alignItems: 'center',
      // width: '100vw',
      textAlign: 'center',
    },
    p: {
      color: '#9c9699',
      fontSize: '12px',
    },
    img: {
      width: 25,
      filter: defaultColor,
    },
    div:{
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: 30,
      width:'61.8%',
      
    },
    a: {
      // margin: '0 50px',
      // border: '1px solid black',
      padding: '3px',

    }
  }

  const changeColorOver = (e) => {
    e.target.style.filter = changedColor
  }
  
  const changeColorLeave = (e) => {
    e.target.style.filter = defaultColor
  }


  const social = [
    {
      href:"https://www.facebook.com/LupitaFavelaAnte",
      src: `${process.env.PUBLIC_URL}/images/facebook.png`,
      alt:"facebook-icon",
    },
    {
      href:"https://www.instagram.com/sanaciones_cuanticas",
      src: `${process.env.PUBLIC_URL}/images/instagram.png`,
      alt: "instagram-icon",
    },
    {
      href:"https://www.youtube.com/channel/UC7saH_7t-vbePW_y2C4WfkQ",
      src: `${process.env.PUBLIC_URL}/images/youtube.png`,
      alt: "youtube-icon",
    },
    {
      href:"https://www.tiktok.com/@sanacionescuanticas",
      src: `${process.env.PUBLIC_URL}/images/tiktok.png`,
      alt: "tiktok-icon",
    },


  ]
  return (
    <footer style={styles.footer}>
      <p style={styles.p}>© Copyright 2020, María Favela | Todos los derechos reservados | Privacidad | Página desarrollada por Arturo Castillo</p>
      
      <div style={styles.div}>
        {[...social].map(x => (
            <a href={x.href} key={`${x.alt}${Math.random()}`} style={styles.a}>
              <img style={styles.img} src={x.src} alt={x.alt}
                onMouseOver={changeColorOver}
                onMouseLeave={changeColorLeave}
              />
            </a>
        ))}
      </div>
       
      
    </footer>
  )
}

export default Footer
