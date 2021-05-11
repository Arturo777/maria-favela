import React from 'react'
import Button from './../Button'
import Header1 from './../Header1'
import Subtitle from './../Subtitle'
import { BasicContainer, FlexContainer, FormControl } from './../containers'
import { Input, Textarea, Select } from './../inputs'
import { Label } from './../Label'

const Form = props => {
  const styles = {
    marginTop: 50,
    color:'#6557fa',
    textAlign:'center',
    boxShadow: "10px 10px 42px -18px rgba(0,0,0,0.75)", 
    borderRadius: '10px',
    padding: '5px 20px',
    margin: '50px 50px',
  }
  const [contacto, setContacto] = React.useState({
    Nombre: "",
    FechaNacimiento: "",
    Ocupacion: "",
    Email: "",
    Phone: "",
    Fisica: "",
    Emocional: "",
    Mental: "",
    ExpliqueProblematica: "",
    FechaProblematica: "",
    VivenciaSiONo: "",
    Vivencia: "",
    SeSiente1al10: "",
    ComoSeSiente: "",
    ComoGustariaSentirse: "",
  })
  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setContacto({ ...contacto, [name]: value });
  }
  const handleSubmit = async e => {
    e.preventDefault()
    console.log(contacto);

    if (!window.confirm("¿Quieres enviar el formulario ahora?")) return;

    await (await fetch('https://mariafavelacuantica.com/backend/addContact.php', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
      /* Nombre: contacto.Nombre,
      FechaNacimiento: contacto.FechaNacimiento,
      Ocupacion: contacto.Ocupacion,
      Email: contacto.Email,
      Phone: contacto.Phone,
      Fisica: contacto.Fisica,
      Emocional: contacto.Emocional,
      Mental: contacto.Mental,
      ExpliqueProblematica: contacto.ExpliqueProblematica,
      FechaProblematica: contacto.FechaProblematica,
      VivenciaSiONo: contacto.VivenciaSiONo,
      Vivencia: contacto.Vivencia,
      SeSiente1al10: contacto.SeSiente1al10,
      ComoSeSiente: contacto.ComoSeSiente,
      ComoGustariaSentirse: contacto.ComoGustariaSentirse, */
      ...contacto
     }),
    }).then(
      (x) => {
        

        alert('Tus datos se han enviado con éxito');
        setContacto({
          Nombre: "",
          FechaNacimiento: "",
          Ocupacion: "",
          Email: "",
          Phone: "",
          Fisica: "",
          Emocional: "",
          Mental: "",
          ExpliqueProblematica: "",
          FechaProblematica: "",
          VivenciaSiONo: "",
          Vivencia: "",
          SeSiente1al10: "",
          ComoSeSiente: "",
          ComoGustariaSentirse: "",
        })
        console.log(x);
      }
    ).catch(error => console.log(error)));
    




  }
  
  return (
    <form {...props} onSubmit={handleSubmit} style={styles}>
      <BasicContainer>
        <FlexContainer flexdirection="column" alignitems="center">
          <Header1 color="#8a80f9">
            SANACIONES CUANTICAS
          </Header1>
          <Subtitle color="#8a80f9">
            PROCESOS DE TRANSFORMACIÓN
          </Subtitle>
        </FlexContainer>
      </BasicContainer>
      <BasicContainer>

        <FlexContainer>
          <FormControl width={ `${ 2/3 * 100 }%` } >
            <Label htmlFor="Nombre">Nombre completo:</Label>
            <Input onChange={handleChange} value={contacto.Nombre} name="Nombre" id="Nombre" type="text"/>
          </FormControl>
          <FormControl width={`${1/3 * 100 }%`} >
            <Label htmlFor="FechaNacimiento">Fecha de nacimiento:</Label>
            <Input onChange={handleChange} value={contacto.FechaNacimiento} name="FechaNacimiento" id="FechaNacimiento" type="date" />
          </FormControl>
        </FlexContainer>

        <FlexContainer>
          <FormControl >
            <Label htmlFor="Ocupacion">Ocupación:</Label>
            <Input onChange={handleChange} value={contacto.Ocupacion} name="Ocupacion" id="Ocupacion" type="text" />
          </FormControl>
          <FormControl >
            <Label htmlFor="Email">Email:</Label>
            <Input onChange={handleChange} value={contacto.Email} name="Email" id="Email" type="email" />
          </FormControl>
          <FormControl >
            <Label htmlFor="Phone">Teléfono:</Label>
            <Input onChange={handleChange} value={contacto.Phone} name="Phone" id="Phone" type="tel"/>
          </FormControl>
        </FlexContainer>

      </BasicContainer>
      <BasicContainer>
        <FlexContainer >
          <FormControl>
            <Label>Enumere su problemática de acuerdo al orden de importacia 1, 2, 3.</Label>
            <FlexContainer alignself='stretch'>
              <FormControl>
                <Label htmlFor="Fisica">Física:</Label>
                <Input onChange={handleChange} value={contacto.Fisica} name="Fisica" id="Fisica" type="number" min="1" max="3"/>
                </FormControl>
              <FormControl>
                <Label htmlFor="Emocional">Emocional:</Label>
                <Input onChange={handleChange} value={contacto.Emocional} name="Emocional" id="Emocional" type="number" min="1" max="3"/>
                </FormControl>
              <FormControl>
                <Label htmlFor="Mental">Mental:</Label>
                <Input onChange={handleChange} value={contacto.Mental} name="Mental" id="Mental" type="number" min="1" max="3"/>
              </FormControl>
            </FlexContainer>
          </FormControl>
          <FormControl>
            <Label htmlFor="ExpliqueProblematica">Explique su problemática: </Label>
            <Textarea onChange={handleChange} value={contacto.ExpliqueProblematica} name="ExpliqueProblematica" id="ExpliqueProblematica" cols="30" rows="10" resize="none"></Textarea>
          </FormControl>
          <FormControl>
            <Label htmlFor="FechaProblematica">Desde cuándo padece esta problemática:</Label>
            <Input onChange={handleChange} value={contacto.FechaProblematica} name="FechaProblematica" id="FechaProblematica" type="date" />
          </FormControl>
        </FlexContainer>
      </BasicContainer>
      <BasicContainer>
        <FlexContainer>
          <FormControl>
            <Label textalign="start" htmlFor="VivenciaSiONo">
              Usted cree que hay alguna vivencia que se relaciona con esta problematica (separación, muerte de un ser querido, banca rota, familiar, etc)?
            </Label>
            <Select onChange={handleChange} value={contacto.VivenciaSiONo} name="VivenciaSiONo" id="VivenciaSiONo">
                <option value="">Seleccione:</option>
                <option value="si">Si</option>
                <option value="no">No</option>
            </Select>
          </FormControl>
          <FormControl>
            <Label htmlFor="Vivencia">
              Mencione su vivencia
            </Label>
            <Textarea onChange={handleChange} value={contacto.Vivencia} name="Vivencia" id="Vivencia" cols="30" rows="10"></Textarea>
          </FormControl>
          <FormControl>
            <Label htmlFor="FechaVivencia">
              Indique la fecha
            </Label>
            <Input onChange={handleChange} value={contacto.FechaVivencia} name="FechaVivencia" id="FechaVivencia" type="date" />
          </FormControl>
        </FlexContainer>
      </BasicContainer>
      <BasicContainer>
        <FlexContainer>
          <FormControl>
            <Label textalign="start" htmlFor="SeSiente1al10">Cómo se siente ahora, del 1 al 10 siendo 1 lo peor y 10 lo mejor:</Label>
            <Select id="SeSiente1al10" onChange={handleChange} value={contacto.SeSiente1al10} name="SeSiente1al10">
              <option value="">Seleccione:</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </Select>
          </FormControl>
          <FormControl>
            <Label htmlFor="ComoSeSiente">Explique cómo se siente</Label>
            <Textarea onChange={handleChange} value={contacto.ComoSeSiente} name="ComoSeSiente" id="ComoSeSiente" cols="30" rows="10"></Textarea>
          </FormControl>
          <FormControl>
            <Label htmlFor="ComoGustariaSentirse">Explique cómo le gustaría sentirse </Label>
            <Textarea onChange={handleChange} value={contacto.ComoGustariaSentirse} name="ComoGustariaSentirse" id="ComoGustariaSentirse" cols="30" rows="10"></Textarea>
          </FormControl>
          
        </FlexContainer>

      </BasicContainer>
      <BasicContainer>
        <FlexContainer justifycontent='center'>
          <Button type="submit">Mandar Formulario</Button>
        </FlexContainer>
      </BasicContainer>
    </form>
  )
}

export default Form
