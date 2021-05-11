import React from 'react'
import Titleback from './../Titleback'
import Header1 from './../Header1'
import Subtitle from './../Subtitle'
import Form from './../Home/Form'
import { SizeContext } from './../../App'
const background = `${process.env.PUBLIC_URL}/images/backEjem2.png`


const Terapiasyservicios = () => {

  const size = React.useContext(SizeContext);

  return (
    <React.Fragment>
      <Titleback background={background} size={size}>
        <Header1>
          Terapias y Servicios
        </Header1>

        <Subtitle>
          SOY <strong style={{textDecoration: 'underline', }}>MARíA FAVELA</strong> Y A TRAVES DE TERAPIAS CUANTICAS TE AYUDARE A RESOLVER Y TRANSFORMAR TU VIDA DE UNA FORMA SENCILLA, PROFUNDA, EQUILIBRADA Y ARMONIOSA.
        </Subtitle>
      </Titleback>

      <Form size={size}/>
    
    </React.Fragment>
  )
}

export default Terapiasyservicios
