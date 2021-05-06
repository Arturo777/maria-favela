import React, {useState, useEffect} from 'react';

// REACT ROUTER
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar';

// VIEWS
import Home from './components/Home/';
import Terapiasyservicios  from './components/Terapiasyservicios/'
import Saludcuantica  from './components/Terapiasyservicios/Saludcuantica/'
import Metodoyuen  from './components/Terapiasyservicios/Metodoyuen/'
import Constelacionesfamiliares  from './components/Terapiasyservicios/Constelacionesfamiliares/'
import Accessconsciousness  from './components/Terapiasyservicios/Accessconsciousness/'
import Coaching  from './components/Terapiasyservicios/Coaching/'
import Cursosmetodoyuen from './components/Cursos/Cursosmetodoyuen'
import Cursosaccessconsciousness from './components/Cursos/Cursosaccessconsciousness'
import Contacto from './components/Contacto/'
import Preguntasfrecuentes  from './components/Preguntas'
import StripeContainer from './components/CheckoutForm'
import Footer from './components/Footer'
import Error from './components/Error'
import './App.css'



const Privacidad = () => <h1>privacidad</h1>

const App = () => {
  const [size, setSize] = useState(window.innerWidth);
  // const [price, setPrice] = useState(110);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    // console.log('useEffect');
    window.addEventListener('resize', checkSize);
    return () => {
      // console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };
  }, []);

  
  

  const routes = [
    { 
      path:"/",
      component: Home,
      exact: true,
    },
    { 
      path:"/checkout-form",
      component: StripeContainer,
      exact: true,
    },
    { 
      path:"/terapias-y-servicios/",
      component: Terapiasyservicios,
      exact: true,
    },
    { 
      path:"/terapias-y-servicios/salud-cuantica",
      component: Saludcuantica,
      exact: true,
      price: 20,
      productname: 'Terapia de Salud Cuantica'
    },
    { 
      path:"/terapias-y-servicios/metodo-yuen",
      component: Metodoyuen,
      exact: true,
      price: 700,
      productname: 'Terapia de Método Yuen'
    },
    { 
      path:"/terapias-y-servicios/constelaciones-familiares",
      component: Constelacionesfamiliares,
      exact: true,
      price: 15,
      productname: 'Terapia de Constelaciones Familiares'
    },
    { 
      path:"/terapias-y-servicios/access-consciousness",
      component: Accessconsciousness,
      exact: true,
      productname: 'Terapia de Access Consciousness'

    },
    { 
      path:"/terapias-y-servicios/coaching",
      component: Coaching,
      exact: true,
      productname: 'Servicio de Coaching'
    },


    // CURSOS
    { 
      path:"/cursos/cursos-metodo-yuen",
      component: Cursosmetodoyuen,
      exact: true,
      price: 30,
      productname: 'Curso de Método Yuen'
    },
    { 
      path:"/cursos/cursos-access-consciousness",
      component: Cursosaccessconsciousness,
      exact: true,
      
    },



    
    { 
      path:"/contacto",
      component: Contacto,
      exact: true
    },
    { 
      path:"/preguntas-frecuentes",
      component: Preguntasfrecuentes,
      exact: true
    },
    { 
      path:"/privacidad",
      component: Privacidad,
      exact: true,
    },
    { 
      path: '*', 
      component: Error,
      exact: false,
    },
  ]


  const styles = {
    main: {
      flexGrow: '1',
      minHeight: 'calc(100vh - 230px)',
      paddingBottom: '50px',
    }
  }
  return (
    <Router>
      
      <NavBar size={size}/>
      <main style={styles.main}> 
        <Switch >
          {routes.map((x, i) => (
            <Route 
              path = {x.path}
              exact={x.exact}
              key={i} 
              render={ () => <x.component
                 size = {size} 
                 price= {x.price}
                 productname = {x.productname}
              /> }
            />)
          )
        }
        </Switch>
      </main>

      <Footer />


      
    </Router>
);
}

export default App







