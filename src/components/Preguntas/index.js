import React from 'react'
import Titleback from './../Titleback'
import Header1 from './../Header1'
import Subtitle from './../Subtitle'
import { Label } from './../Label'
import { Containerpage, Containercard } from './../containers'
import P from './../P'
import { SizeContext } from './../../App'
const background = `${process.env.PUBLIC_URL}/images/backEjem5.png`

const Preguntas = () => {
  const size = React.useContext(SizeContext);
  return (
    <React.Fragment>

      <Titleback background={background} justifycontent="flex-end" size={size}>
        <Header1>
          Preguntas Frecuentes
        </Header1>

        <Subtitle>
          SOY <strong style={{textDecoration: 'underline', }}>MARíA FAVELA</strong> Y A TRAVES DE TERAPIAS CUANTICAS TE AYUDARE A RESOLVER Y TRANSFORMAR TU VIDA DE UNA FORMA SENCILLA, PROFUNDA, EQUILIBRADA Y ARMONIOSA.
        </Subtitle>
      </Titleback>

      <Containerpage>
        <Containercard>
          <Label>
            <h2>¿QUE SON LAS TERAPIAS CUANTICAS?</h2>
          </Label>
          <P>
            Terapias basadas en la física cuántica y la energía secuencial a niveles muy profundos permitiendo trabajar desde la conciencia reorganizando la información en todos los niveles de conciencia para que la persona experimente mejoría, bienestar y resolución a cualquier situación física, emocional o mental de forma inmediata. Se pueden hacer de forma presencial y a distancia.
          </P>
        </Containercard>
        <Containercard>
          <Label>
            <h2>¿CON QUE TIPO DE TERAPIAS CUANTICAS TRABAJAMOS?</h2>
          </Label>
          <P>
            -CUANTIC SYSTEM/SALUD CUANTICA <br/>
            -METODO YUEN <br/>
            -CONSTELACIONES FAMILIARES <br/>
            -ACCESS CONSCIOUSNESS <br/>
          </P>
          <P lineheight='28px'>
            <strong>1.-</strong> Agendas y pagas tu sesión (incluir un calendario para que la persona pueda escoger el día y la hora). <br/>
            <strong>2.-</strong> Llenas un formulario. 
          </P>
        </Containercard>

       



      </Containerpage>

    
    </React.Fragment>
  )
}

export default Preguntas
