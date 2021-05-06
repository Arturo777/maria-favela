import React, { useState } from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import Button from './Button'
import { FormControl, FlexContainer, Containerpage } from './../components/containers'
import {Label} from './Label'
import {Input} from './inputs'
import Header1 from './Header1'

import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import axios from "axios";

const stripePromise = loadStripe(`"${process.env.PUBLISHABLE_KEY}"`);


const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()
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
  };
  const cardElementOptions = {
    style: {
      base: {
        backgroundColor: '#ede6fc',
        lineHeight: '40px',
        padding: '0 10px',
        fontSize: '16px',
        color: '#8A0020',
        '::placeholder': {
          color: '#CA9BA5',
        },
        fontSmoothing: 'antialiased',
      },
      invalid: {
        fontSize: '16px',
        color: '#FFC7EE',
        iconColor: '#FFC7EE',
        
      }
    },
    hidePostalCode: true
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
              <Label htmlFor='Nombre'>Nombre:</Label>
              <Input id='Nombre' name='Nombre' ></Input>
            </FormControl>
            <FormControl>
              <Label htmlFor='FechaHora'>Elige el día y la hora para tu cita:</Label>
              <Input id='FechaHora' name='FechaHora' type='datetime-local'/> 
            </FormControl>
            <FormControl>
              <Label htmlFor='Calle' >Dirección:</Label>
              <FlexContainer width='100%' margintop='5px'>
                <Input id='Calle' name='Calle' type='text' style={{marginRight: 5}} placeholder='Calle' />
                <Input id='Numero' name='Numero' type='number' width='50%' style={{marginLeft: 5}} placeholder='Numero' />
              </FlexContainer>
              <FlexContainer width='100%' margintop='5px'>
                <Input id='Ciudad' name='Ciudad' type='text' width='50%' style={{marginRight: 10}} placeholder='Ciudad' />
                <Input id='Estado' name='Estado' type='text'  width='24%' style={{marginRight: '1%'}} placeholder='Estado' />
                <Input id='CP' name='CP' type='text'  width='24%' style={{marginLeft: '1%'}} placeholder='CP' />
              </FlexContainer>
            </FormControl>
            <FormControl>
              <Label>Datos de tu tarjeta:</Label>
              <CardElement options={cardElementOptions}/>
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

const StripeContainer = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  )
}

export default StripeContainer
