import React from 'react'
import { Label } from './../Label'
import { Containerpage, Containercard } from './../containers'
import Header1 from './../Header1'
import P from './../P'
import { NavLink } from 'react-router-dom';
import { SizeContext } from './../../App'


const Cursosmetodoyuen = () => {
  const size = React.useContext(SizeContext);
  const products = {
    basico: {
      price: 100,
      productname: 'CURSOS METODO YUEN / NIVEL BASICO'
    },
    medio: {
      price: 200,
      productname: 'CURSOS METODO YUEN / NIVEL MEDIO'
    },
    superior: {
      price: 300,
      productname: 'CURSOS METODO YUEN / NIVEL SUPERIOR'
    },
  }
  return (
    <Containerpage size={size}>
      <Header1>CURSOS METODO YUEN</Header1>
      
      <Containercard>
        <Label>
          <strong>NIVEL BASICO:</strong>
        </Label>
        <P>
          Aprenderás a Conectar con tu Línea Media. 
          <br/> 
          A fortalecer y corregir/borrar debilidades.
        </P>

        <NavLink to={{
          pathname:'./../checkout-form', 
          product: products.basico
        }}>Comprar Curso</NavLink>

      </Containercard>
      <Containercard>
        <Label>
          <strong>NIVEL MEDIO:</strong>
        </Label>
        <P>Ampliar y profundizar los conocimientos del Nivel básico. Utilizar y aplicar los protocolos fortalecerte a Ti y a otros.</P>

        <NavLink to={{
          pathname:'./../checkout-form', 
          product: products.medio
        }}>Comprar Curso</NavLink>


      </Containercard>
      <Containercard>
        <Label>
          <strong>NIVEL SUPERIOR:</strong>
        </Label>
        <P>Aprenderás a aplicar protocolos avanzados para fortalecer mascotas, Niños/Neonatos, relaciones, finanzas y a Fortalecer a Distancia.</P>

        <NavLink to={{
          pathname:'./../checkout-form', 
          product: products.superior
        }}>Comprar Curso</NavLink>

      </Containercard>


      
    </Containerpage>
  )
}

export default Cursosmetodoyuen
