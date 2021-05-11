import React, { useState } from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import Button from './Button'
import { FormControl, FlexContainer, Containerpage } from './../components/containers'
import {Label} from './Label'
import {Input} from './inputs'
import Header1 from './Header1'
import { SizeContext } from './../App'
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import axios from "axios";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);


const CheckoutForm = () => {
  const size = React.useContext(SizeContext);
  const stripe = useStripe()
  const elements = useElements()
  const location = useLocation();
  const { price, productname } = location.product ? location.product : 0;
  const [paymentStatus, setPaymentStatus] = useState(false)
  const styles = {
    form: {
      width: Number(size) >= 1000 && '50%',
      // border: '1px solid blue',
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
  const handleSubmit = async (e) => {

    e.preventDefault()
    console.log(process.env.REACT_APP_SECRET_KEY);
    console.log(process.env.REACT_APP_PUBLISHABLE_KEY);

    const billingDetails = {
      name: e.target.Nombre.value,
      email: e.target.Email.value,
      address: {
        city: e.target.Ciudad.value,
        state: e.target.Estado.value,
        postal_code: e.target.CP.value,
      }
    };
    
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: billingDetails
    });

    if (error) {
      console.log(error.message);
      if (error.message === 'Your card number is invalid.') {
        alert('Número de tarjeta invalido.')
      }
    } else {
      const { id } = paymentMethod;
      console.log('exito', id);
      try {
        const { data } = await axios.post(
          // "http://localhost:3001/api/payment", 
          "https://mariafavelacuantica.com/api/payment", 
        {
          id,
          amount: price * 100,
          description: productname
        });
        console.log('data');
        console.log(data);
        alert( data.status === 'succeeded' ? 'Has pagado exitosamente.' : 'Hubo un error con el pago')

        setPaymentStatus(true)

        // elements.getElement(CardElement).clear();
      } catch (error) {
        console.log('error:', error.message);
      }
    }
    
    
  };
  
  
  return (
    <Containerpage >
      {location.product ?
      <FlexContainer justifycontent='center'>
        { !paymentStatus ? 
          <form style={styles.form} onSubmit={handleSubmit}>
            <h1>
              {productname}
            </h1>
            <FormControl>
              <Label htmlFor='Nombre'>Nombre:</Label>
              <Input id='Nombre' name='Nombre' ></Input>
            </FormControl>
            <FormControl>
              <Label htmlFor='Email'>Email:</Label>
              <Input type='email' id='Email' name='Email' ></Input>
            </FormControl>
            <FormControl>
              <Label htmlFor='Telefono'>Teléfono:</Label>
              <Input type='phone' id='Telefono' name='Telefono' ></Input>
            </FormControl>
            <FormControl>
              <Label htmlFor='FechaHora'>Elige el día y la hora para tu cita:</Label>
              <Input id='FechaHora' name='FechaHora' type='datetime-local'/> 
            </FormControl>
            <FormControl>
              <Label htmlFor='Calle' >Dirección:</Label>
              <FlexContainer width='100%' margintop='5px'>
                <Input id='Calle' name='Calle' type='text' style={{
                  marginRight: Number(size) >= 1000 && 5,
                  marginBottom: Number(size) <= 1000 && 5,
                  }} placeholder='Calle' />
                <Input id='Numero' name='Numero' type='number' width='50%' style={{
                  marginLeft: Number(size) >= 1000 && 5
                  }} placeholder='Numero' />
              </FlexContainer>
              <FlexContainer width='100%' margintop='5px'>
                <Input id='Ciudad' name='Ciudad' type='text' width='50%' style={{
                  marginRight: Number(size) >= 1000 && 10,
                  marginBottom: Number(size) <= 1000 && 5,
                  }} placeholder='Ciudad' />
                <Input id='Estado' name='Estado' type='text'  width='24%' style={{
                  marginRight: Number(size) >= 1000 && '1%',
                  marginBottom: Number(size) <= 1000 && 5,
                  }} placeholder='Estado' />
                <Input id='CP' name='CP' type='text'  width='24%' style={{
                  marginLeft: Number(size) >= 1000 && '1%',
                  marginBottom: Number(size) <= 1000 && 5,
                  }} placeholder='CP' />
              </FlexContainer>
            </FormControl>
            <FormControl>
              <Label>Datos de tu tarjeta:</Label>
              <CardElement options={cardElementOptions}/>
            </FormControl>

            <Button>Pagar ${price}.00 MXN</Button>
          </form>
          :
          <FlexContainer flexdirection='column' alignitems='center'>
            <Header1>Tu pago se ha efectuado exitosamente.</Header1>
            <NavLink to='./'>
              <Button>
                Ir al Home
              </Button>
            </NavLink>
          </FlexContainer>
        }

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

const StripeContainer = props => {
  const {size} = props;
  return (
    
    <Elements stripe={stripePromise}>
      <CheckoutForm size={size}/>
    </Elements>
   
  )
}

export default StripeContainer
