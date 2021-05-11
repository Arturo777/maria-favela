import React from 'react'
import { Containerpage } from './../../containers'
import Header1 from './../../Header1'
import P from './../../P'
import { NavLink } from 'react-router-dom'
import { SizeContext } from './../../../App'

const Constelacionesfamiliares = () => {
  const size = React.useContext(SizeContext);
  const products = {
    constelaciones: {
      price: 800,
      productname: 'Terapia: Constelaciones Familiares'
    }
  }
  return (
    <Containerpage size={size}>
      <Header1>CONSTELACIONES FAMILIARES</Header1>
      <P>
        Es un tipo de Psicoterapia Sistémica Familiar desarrollada por Bert Hellinger.  El 70% de los problemas que nos afectan vienen de nuestra historia familiar. Las constelaciones revelan lo oculto y nos ayudan a encontrar respuestas a situaciones que bloquean nuestra capacidad de vivir con bienestar, resolviéndose y sanándose en un proceso de reconciliación.
      </P>

      <P color='darkslateblue' fontweight='600' lineheight='28px'>
        -Sesion de 30min o más dependiendo de la situación <br/>
        -Grupal e Individual <br/>
        -Presencial o a distancia <br/>
        -$800 pesos mx <br/>
      </P>

      <NavLink to={{
          pathname:'./../checkout-form', 
          product: products.constelaciones
        }}>Comprar Servicio  
      </NavLink>

    </Containerpage>
  )


}




export default Constelacionesfamiliares