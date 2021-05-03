import React from 'react'
import { Containerpage } from './../../containers'
import Header1 from './../../Header1'
import P from './../../P'
import { NavLink } from 'react-router-dom';


const Yuen = props => {
  const {
    size, price, productname
  } = props;
  
  return (
    <Containerpage size={size}>
      <Header1>METODO YUEN</Header1>
      {/* <Subtitle>3 NIVELES: BASICO, MEDIO Y SUPERIOR</Subtitle> */}
      <P>
        Este Método fue creado por Dr. Kam Yuen tras una vida dedicada al estudio de artes marciales, fusionando anatomía, fisiología, análisis estructural, técnicas energéticas y física cuántica.
      </P>
      <P>
        Las terapias de Método Yuen consisten en cambiar la información que te está debilitando, por medio de una reprogramación cuántica a todos los niveles de conciencia: físico, mental, emocional, psicológico, psíquico y espiritual. Logrando resultados inmediatos.
      </P>
      <P color='darkslateblue' fontweight='600' lineheight='28px'>
        - Sesión de 30 min. <br/>
        - No invasivo.<br/>
        - Por medio de procesos energéticos. <br/>
        - Presencial y a distancia.<br/>
        - ${price} pesos mx<br/>
      </P>

      
      <NavLink to={{pathname:'./../checkout-form', product: {
        price,
        productname
      }}}>Comprar Sesión</NavLink>
       
      

      
    </Containerpage>
  )
}

export default Yuen
