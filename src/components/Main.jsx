
import Home from '../components/Home';

function Main() {

    return(
        <>
            <main style={
                {
                    backgroundColor: "var(--main-ultrasoft)",
                    display:"flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "20px",
                    paddingBottom: "40px"
                }
            }>
                <Home/>
            </main>
        </>
    )
    
}

export default Main