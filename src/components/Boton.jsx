import './Boton.css'

function Boton({contenido}) {

    return(
        <>
            <button className="btn-main">
                {contenido}
            </button>
        </>
    )
    
}

export default Boton