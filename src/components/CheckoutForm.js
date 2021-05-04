import React, { useState } from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import Button from './Button'
import { FormControl, FlexContainer, Containerpage } from './../components/containers'
import {Label} from './Label'
import {Input} from './inputs'
import Header1 from './Header1'

const CheckoutForm = () => {
  const location = useLocation();
  const { price, productname } = location.product ? location.product : 0;
  const styles = {
    form: {
      width: '50%',
      border: '1px solid blue',
      textAlign: 'center'
    },
    calendar: {
      width: '100%',

    }
  }
  
  
  return (
    <Containerpage>
      {location.product ?
        <FlexContainer justifycontent='center'>
          <form style={styles.form}>
            <h1>
              Checkout Form
            </h1>
            <h3>{productname}</h3>
            <FormControl>
              <Label>Nombre:</Label>
              <Input></Input>
            </FormControl>
            <FormControl>
              <Label>Elige el día y la hora para tu cita:</Label>
             
            </FormControl>
            

            <Button>Pagar ${price}.00 MXN</Button>
          </form>

        </FlexContainer>
      :
      <FlexContainer flexdirection='column' alignitems='center'>
        <Header1>No hay servicios seleccionados, seleccione de nuevo algun servicio.</Header1>
        <NavLink to='./'>
          <Button>
            Ir al Home
          </Button>
        </NavLink>
      </FlexContainer>
      }
    </Containerpage>
  )
}

export default CheckoutForm
