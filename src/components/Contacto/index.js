import React from 'react'
import Titleback from './../Titleback'
import Header1 from './../Header1'
import P from './../P'
import { SizeContext } from './../../App'

const background = `${process.env.PUBLIC_URL}/images/backEjem4.png`

const Contacto = () => {

  const size = React.useContext(SizeContext);
  return (
    <React.Fragment>
      <Titleback background={background} justifycontent="flex-end" size={size}>
        <Header1>
          Contacto
        </Header1>

       <P>
         <strong >(+52) 81 1555 6850</strong> 

       </P>

       <a href="https://wa.me/528115556850/?text=Hola quisiera información acerca de ...">
         <img style={{width: '100px'}} src={`${process.env.PUBLIC_URL}/images/wasap.png`} alt="wathsapp-icon"/>
      </a>
        
      </Titleback>

    
    </React.Fragment>
  )
}

export default Contacto
