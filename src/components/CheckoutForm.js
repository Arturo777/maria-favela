import React, { useState } from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import Button from './Button'
import { FormControl, FlexContainer, Containerpage } from './../components/containers'
import {Label} from './Label'
import {Input} from './inputs'
import Header1 from './Header1'
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import {Calendar, utils} from "react-modern-calendar-datepicker";
import Timekeeper from 'react-timekeeper'

const CheckoutForm = () => {
  const location = useLocation();
  const { price, productname } = location.product ? location.product : 0;
  const [selectedDay, setSelectedDay] = useState(null);
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
  const myCustomLocale = {
    // months list by order
    months: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
    ],
  
    // week days by order
    weekDays: [
      {
        name: 'Domingo', // used for accessibility 
        short: 'D', // displayed at the top of days' rows
        isWeekend: true, // is it a formal weekend or not?
      },
      {
        name: 'Lunes',
        short: 'L',
      },
      {
        name: 'Martes',
        short: 'M',
      },
      {
        name: 'Miercoles',
        short: 'M',
      },
      {
        name: 'Jueves',
        short: 'J',
      },
      {
        name: 'Viernes',
        short: 'V',
      },
      {
        name: 'Sábado',
        short: 'S',
        isWeekend: true,
      },
    ],
  
    // just play around with this number between 0 and 6
    weekStartingIndex: 0,
  
    // return a { year: number, month: number, day: number } object
    getToday(gregorainTodayObject) {
      return gregorainTodayObject;
    },
  
    // return a native JavaScript date here
    toNativeDate(date) {
      return new Date(date.year, date.month - 1, date.day);
    },
  
    // return a number for date's month length
    getMonthLength(date) {
      return new Date(date.year, date.month, 0).getDate();
    },
  
    // return a transformed digit to your locale
    transformDigit(digit) {
      return digit;
    },
  
    // texts in the date picker
    nextMonth: 'Siguiente Mes',
    previousMonth: 'Anterior Mes',
    openMonthSelector: 'Open Month Selector',
    openYearSelector: 'Open Year Selector',
    closeMonthSelector: 'Close Month Selector',
    closeYearSelector: 'Close Year Selector',
    defaultPlaceholder: 'Seleccione',
  
    // for input range value
    from: 'desde',
    to: 'hasta',
  
  
    // used for input value when multi dates are selected
    digitSeparator: ',',
  
    // if your provide -2 for example, year will be 2 digited
    yearLetterSkip: 0,
  
    // is your language rtl or ltr?
    isRtl: false,
  }
  console.log(selectedDay);
  
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
              <Label>Elige el día para tu cita:</Label>
              <Calendar
                minimumDate={utils().getToday()}
                colorPrimary="#8A80F9" // added this
                colorPrimaryLight="rgba(75, 207, 250, 0.4)"
                value={selectedDay}
                onChange={setSelectedDay}
                locale={myCustomLocale} 
                shouldHighlightWeekends
              />
            </FormControl>
            <FormControl>
              <Label>Elige la hora para tu cita:</Label>
              <Timekeeper
                
              />
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
