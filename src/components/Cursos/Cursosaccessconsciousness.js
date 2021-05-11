import React from 'react'
import { Label } from './../Label'
import { Containerpage, Containercard } from './../containers'
import Header1 from './../Header1'
import P from './../P'
import { NavLink } from 'react-router-dom';
import { SizeContext } from './../../App'


const Cursosaccessconsciousness = () => {
  const size = React.useContext(SizeContext);
  const products = {
    barras: {
      price: 30,
      productname: 'Curso de Access Consciousness / TERAPIA DE BARRAS'
    },
    entidades: {
      price: 30,
      productname: 'Curso de Access Consciousness / ENTIDADES'
    }
  };

  return (
    <Containerpage size={size}>
      <Header1>CURSOS DE ACCESS CONSCIOUSNESS</Header1>
      
      <Containercard>
        <Label>
          <strong>TERAPIA DE BARRAS:</strong>
        </Label>
        <P>APRENDERAS A CONECTAR CON TU LINEA MEDIA FORTALECER Y CORREGIR/BORRAR DEBILIDADES UTILIZAR Y APICAR TRIADAS</P>

        <NavLink to={{
          pathname:'./../checkout-form', 
          product: products.barras
          }}
        >Comprar Curso</NavLink>


      </Containercard>

      <Containercard>
        <Label>
          <strong>ENTIDADES:</strong>
        </Label>
        <P>Aprenderás a hacer limpiezas energéticas de entidades por medio de técnicas y procesos verbales para lugares, personas y cosas.</P>


        <NavLink to={{
          pathname:'./../checkout-form', 
          product: products.entidades
        }}>Comprar Curso</NavLink>


      </Containercard>

      

      
    </Containerpage>
  )
}

export default Cursosaccessconsciousness
