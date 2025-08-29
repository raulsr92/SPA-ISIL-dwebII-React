
import './Home.css'
import banner from '../assets/img/banner.jpg'

import Boton from "./Boton"
import MiniCard from "./MiniCard"

function Home() {

    return(
        <>
            <section className="section-main-home">
                <div className="home-part1">
                    <div>
                        <div>
                            <i className="fa-regular fa-bell"></i>
                        </div>
                        <p>
                            Soluciones Innovadoras
                        </p>
                    </div>

                    <h1>
                        Desarrollamos tu proyecto y lo convertimos en una web espectacular
                    </h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae ipsum animi nam est dignissimos similique, perferendis neque esse explicabo. Vitae dolorum a culpa aperiam ipsa esse molestias qui tempora iste.
                    </p>

                    <Boton contenido={"Descubrir más"}/>
                </div>

                <div className="home-part2">
                    <img src={banner} alt="" style={{width:"100%"}} />
                </div>

                <div className="home-part3">
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                </div>

            </section>
        </>
    )
    
}

export default Home