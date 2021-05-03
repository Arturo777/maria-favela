import React from 'react'
import { Containerpage } from './../../containers'
import Header1 from './../../Header1'
import P from './../../P'
import Button from './../../Button'
import { NavLink } from 'react-router-dom';

const Saludcuantica = props => {
  const {
    size
  } = props;
  const products = {
    saludcuantica: {
      price: 700,
      productname: 'Terapia: Salud Cuántica'
    }
  }
  return (
    <Containerpage size={size}>
      <Header1>Salud Cuantica</Header1> 
      <P>
        Terapias basadas en la física cuántica y la energía secuencial a niveles muy profundos permitiendo trabajar desde la conciencia reorganizando la información en todos los niveles de conciencia para que la persona experimente mejoría, bienestar y resolución a cualquier situación física, emocional o mental de forma inmediata.
      </P>
      <P color='darkslateblue' fontweight='600' lineheight='28px'>
        -Sesión de 40min. <br/>
        -No invasivo <br/>
        -Presencial y a distancia. <br/>
        -Se utilizan modificadores cuánticos como herramienta principal. <br/>
        -$700 pesos mx <br/>
      </P>

      <br/>

      <h3>
        PROTOCOLO DE LA TERAPIA:
      </h3>


      <P lineheight='28px'> 
        1.- Entrevista <br/>
        2.-Testeo/escaneo  <br/>
        3.-Acomodo de modificadores cuánticos <br/>
        4.-Programación/Tratamiento Cuántico <br/>
        5.-Experimentando los resultados inmediatos <br/>
      </P>

      <NavLink to={{
          pathname:'./../checkout-form', 
          product: products.saludcuantica
        }}>Comprar Servicio  
      </NavLink>


    </Containerpage>
  ) 
    
  
}
  

export default Saludcuantica;
