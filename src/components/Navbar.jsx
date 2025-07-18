import './Navbar.css'
import logoPagina from '../assets/img/CodeWRaul-logo1-sinfondo.png'
import Boton from './Boton'

function Navbar({opciones}) {

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
                        {
                            opciones
                        }
                    </ul>
                </section>

                <section className='header-section3'>
                    <Boton contenido={"Empezar"} />
                </section>

                <section className='header-section4'>
                   <i className="fa-solid fa-bars"></i> 
                </section>
            </header>
        </>
    )
}

export default Navbar