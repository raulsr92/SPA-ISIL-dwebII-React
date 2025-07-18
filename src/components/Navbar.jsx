import './Navbar.css'
import logoPagina from '../assets/img/CodeWRaul-logo1-sinfondo.png'
import Boton from './Boton'

function Navbar() {

    return(
        <>
            <header className='header-container' 
                style=
                    {
                        {
                            display: "flex", 
                            justifyContent  : "space-around",
                            alignItems:"center"  ,
                            padding: "10px 0px"                   
                        }
                    }
                >
                <section className='header-section1'>
                    <div style={{width: "80px"}}>
                        <img src={logoPagina} alt="logo-página" style={{width:"100%"}} />
                    </div>
                </section>

                <section className='header-section2'>
                    <ul>
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Servicios</a></li>
                        <li><a href="">Portafolio</a></li>
                        <li><a href="">Precios</a></li>
                        <li><a href="">Equipo</a></li>
                        <li><a href="">Testimonio</a></li>
                        <li><a href="">Contacto</a></li>
                    </ul>
                </section>

                <section className='header-section3'>
                    <Boton contenido={"Empezar"} />
                </section>

                <section className='header-section4'>
                   <i class="fa-solid fa-bars"></i> 
                </section>
            </header>
        </>
    )
}

export default Navbar