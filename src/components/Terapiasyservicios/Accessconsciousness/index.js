import React from 'react'
import { Containerpage, Containercard } from './../../containers'
import Header1 from './../../Header1'
import P from './../../P'
import { NavLink } from 'react-router-dom'
import { SizeContext } from './../../../App'



const Accessconsciousness = () => {
  const size = React.useContext(SizeContext);
  const products = {
    barras: {
      price: 700,
      productname: 'Terapia: Terapia de Barras'
    },
    facelift: {
      price: 700,
      productname: 'Terapia: Facelift'
    },
    cuerpos: {
      price: 700,
      productname: 'Terapia: Procesos de cuerpos'
    },
    entidades: {
      price: 1200,
      productname: 'Terapia: Procesos de limpieza energetica de entidades'
    },
  }
  return (
    <Containerpage size={size}>
      <Header1>Access Consciousness</Header1>
      <P>
        Son una serie de herramientas, técnicas y filosofías diseñadas para crear con facilidad un cambio en tu perspectiva de la vida. El Objetivo de Access Consciousness es crear un mundo de conciencia y unidad, donde todo existe y nada es juzgado.
      </P>


      <Containercard>
        <h3>
          TERAPIA DE BARRAS
        </h3>
        <P>
          Funcionan por medio de frecuencias magnéticas que se mueven con la energía al hacer contacto nuestros dedos en 32 puntos en la cabeza, se van moviendo ondas de frecuencias en el cerebro eliminando bloqueos, debilidades y/o desequilibrios.
        </P>

        <P color='darkslateblue' fontweight='600' lineheight='28px'>
          -SESIONES DE 50min. <br/>
          -PRESENCIAL <br/>
          -ACTIVACION DE 32 PUNTOS EN TU CABEZA  <br/>
          -SENSACION DE BIENESTAR Y DESBLOQUEO ENERGETICO INMEDIATO <br/>
          -$700 pesos mx <br/>
        </P>

        <NavLink to={{
          pathname:'./../checkout-form', 
          product: products.barras
        }}>Comprar Servicio  
        </NavLink>  

      </Containercard>

      <Containercard>
        <h3>
          FACELIFT
        </h3>
        <P>
          Cirugía sin bisturí. Se activan puntos estratégicos en el rostro, cuello y cuerpo rejuveneciendo y revirtiendo los signos de envejecimiento activando las células de tu cuerpo para restaurar, reafirmar, tonificar y rejuvenecer.
        </P>

        <P color='darkslateblue' fontweight='600' lineheight='28px'>
          -SESION DE 50min. <br/>
          -Presencial <br/>
          -ACTIVACION DE 20 ENERGAS EN ROSTRO Y CUELLO <br/>
          -REJUVENECIMIENTO ENERGETICO FACIAL Y CORPORAL <br/>
          -$700 pesos mx <br/>
        </P>

        <NavLink to={{
          pathname:'./../checkout-form', 
          product: products.facelift
        }}>Comprar Servicio  
        </NavLink>  


      </Containercard>

      <Containercard>
        <h3>
          PROCESOS DE CUERPOS
        </h3>
        <P>
          Estos procesos te ayudan a descubrir la magia que en verdad Tu eres y comienzas a vincularte con la potencia natural de tu cuerpo para actualizar en esta realidad una vida mas sana, mas plena y contributiva.
        </P>

        <P color='darkslateblue' fontweight='600' lineheight='28px'>
          -Sesion de 50 min  <br/>
          -Presencial <br/>
          -Procesos verbales y fisicos <br/>
          -Reprogramando energeticamente el cuerpo  <br/>
          -$700 pesos mx <br/>
      </P>

        <NavLink to={{
          pathname:'./../checkout-form', 
          product: products.cuerpos
        }}>Comprar Servicio  
        </NavLink>  


      </Containercard>


      <Containercard>
        <h3>
          PROCESOS DE LIMPIEZA ENERGETICA DE ENTIDADES
        </h3>

        <P color='darkslateblue' fontweight='600' lineheight='28px'>
          -TTTE/ Talk To The Entities <br/>
          -30min <br/>
          -Presencial y a distancia <br/>
          -Limpieza energética para personas, lugares, cosas. <br/>
          -$1,200 pesos mx <br/>
      </P>

        <NavLink to={{
          pathname:'./../checkout-form', 
          product: products.entidades
        }}>Comprar Servicio  
        </NavLink>  


      </Containercard>



    </Containerpage>
  )
}

export default Accessconsciousness
