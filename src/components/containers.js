import React, {useState, useEffect} from 'react'




export const Containercard = props => {
  const {
    children,
  } = props;
  const styles = {
    boxShadow: 'rgb(0 0 0 / 75%) 10px 10px 42px -18px',
    padding: '30px',
    marginBottom: 20,
    borderRadius: '8px',

  }
  return (
    <div style={styles} >{children}</div>
  )
}



export const Containerpage = props => {
  const {
     children,
     size,
    //  width,
  } = props;
  const styles = {
    // padding: '30px 130px',
    // width: width && width,
    margin: Number(size) >= 1000 ? '50px 100px' : '30px 20px',
  }
  return (
    <div style={styles}>
      {children}
    </div>
  )
}




export const BasicContainer = props => {
  const styles = {
    // border: '2px solid green',
    marginBottom: 20,
    // padding: '1%',
  }
  return (
    <div style={styles} {...props}>
      {props.children}
    </div>

  )
}

export const FlexContainer = props => {

  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    // console.log('useEffect');
    window.addEventListener('resize', checkSize);
    return () => {
      // console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };
  }, []);


  const {
    justifycontent,
    flexdirection,
    margintop,
    alignitems,
    alignself,
    width,

    
  } = props;
  const styles = {
    // border: '4px solid red',
    display: 'flex',
    marginTop: margintop && margintop,
    // padding: '0px',
    justifyContent: justifycontent && justifycontent,
    // flexDirection: flexdirection ? ( Number(size) <= 1000 ? 'column' : flexdirection) : 'row',
    flexDirection: flexdirection ? flexdirection : (Number(size) <= 1000 && 'column') ,
    alignItems: alignitems && alignitems,
    alignSelf: alignself && alignself,
    width: width && width,
  }
  return (
    <div style={styles} {...props}>
      {props.children}
    </div>
  )
}


export const FormControl = props => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    // console.log('useEffect');
    window.addEventListener('resize', checkSize);
    return () => {
      // console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };
  }, []);

  const {
    width,
    flexdirection,
    alignItems,
  } = props
  const styles = {
    // border: '1px solid purple',
    color: 'purple',
    display: 'flex',
    marginBottom: 5,
    padding: '1%',
    width: width ? (Number(size) >= 1000 && width) : '100%',
    flexDirection: flexdirection ? flexdirection : 'column',
    alignItems: alignItems ? alignItems : 'flex-start',
  }
  return (
    <div style={styles} {...props}>
      {props.children}
    </div>

  )
}