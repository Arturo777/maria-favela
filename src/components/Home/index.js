import React from 'react'
import Titleback from './../Titleback'
import Header1 from './../Header1'
import Subtitle from './../Subtitle'
import { SizeContext } from './../../App'
// import P from './../P'
const background = `${process.env.PUBLIC_URL}/images/backEjem.png`


const Home = () => {
  
  const size = React.useContext(SizeContext);

  return (
    <React.Fragment>
      
      <Titleback background={background} size={size}>
        <Header1 size={size}>
          ¿ESTAS LISTO PARA CAMBIAR Y RESOLVER LO QUE NO FUNCIONA EN TU VIDA?
        </Header1>
        
        <Subtitle size={size}>
          SOY <strong style={{textDecoration: 'underline', }}>MARíA FAVELA</strong> Y A TRAVES DE TERAPIAS CUANTICAS TE AYUDARE A RESOLVER Y TRANSFORMAR TU VIDA DE UNA FORMA SENCILLA, PROFUNDA, EQUILIBRADA Y ARMONIOSA.
        </Subtitle>
      </Titleback>
      
      

    </React.Fragment>
  )
  
}

export default Home