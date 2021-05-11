import React from 'react'
import { SizeContext } from './../App'



const Titleback = props => {
  const size = React.useContext(SizeContext);
  const {
    justifycontent,
    background,
  } = props;
  const styles = {
    div: {
      backgroundImage: `url(${background})`,
      width: "100%",
      backgroundSize: Number(size) > 1000 ? "cover" : 'auto',
      backgroundRepeat: "no-repeat",
      display: 'flex',
      backgroundPosition: 'center',
      justifyContent: justifycontent && justifycontent,
    },
    titleDiv: {
      width: Number(size) > 1000 && '50%',
      padding: Number(size) > 1000 ? '66px 140px' : '66px 70px',
      textAlign: 'center',
      alignItems: 'center',
      color:'#292929',
      justifyContent: justifycontent && justifycontent,
    },
    
  }
  return (
    <div style={styles.div}>
      <div style={styles.titleDiv}>
        {props.children}
      </div>
    </div>
  )
}

export default Titleback
