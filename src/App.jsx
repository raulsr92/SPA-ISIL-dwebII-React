
import './App.css'
import Footer from './components/Footer'
import Main from './components/Main'
import Navbar from './components/Navbar'

function App() {

  const opcionesMenu =[ 
    {
      id: 1,
      name: "Inicio",
      activo: true
    },
    {
      id: 2,
      name: "Acerca de",
      activo: false
    },
    {
      id: 3,
      name: "Portafolio",
      activo: true
    },
    {
      id: 4,
      name: "Precios",
      activo: true
    },
    {
      id: 5,
      name: "Equipo",
      activo: true
    },
    {
      id: 6,
      name: "Testimonios",
      activo: true
    },
    {
      id: 7,
      name: "Contacto",
      activo: true
    }
  ]

  const opcionesActivasMenu = opcionesMenu.filter((opcion)=>{
      return opcion.activo == true
  }
  )

  const opcionesRenderizadas = opcionesActivasMenu.map((opcionActiva)=>(
      <li key={opcionActiva.id}><a href="">{opcionActiva.name}</a></li>
  ))


  return (
    <>
      <Navbar opciones={opcionesRenderizadas}/>

      <p>Yo no soy componente</p>
      <i className="fa-brands fa-facebook"></i>
      <Main/>

      <p>Yo no soy componente</p>

      <Footer/>
    </>
  )
}

export default App
