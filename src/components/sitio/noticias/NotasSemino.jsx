import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Footer from "../Footer";
import Portada from "../Portada";
import PortadaNoticia from "./PortadaNoticia";
import Preloder from "../../Preloder";


export default function NotasSemino({ encabezado }) {

    const [mostrarPantalla, setMostrarPantalla] = useState(true)
    const noticia = useSelector((state) => state.noticia.data);

    useEffect(() => {
        window.scrollTo(0, 0);
        const time = setTimeout(() => { setMostrarPantalla(false) }, 300);
        return () => clearTimeout(time)
    }, []);

    return (
        <>
            {mostrarPantalla ?
                <ContenedorLoader>
                    <Preloder />
                </ContenedorLoader> :
                <div>
                    <SeccionArticulo style={{ opacity: mostrarPantalla ? '0' : '1' }}>
                        <Portada />
                        <div className="contenedor-encabezado">
                            <br />
                            <h1>Cuarenta años de imprevistos</h1>
                            <div>
                                <hr />
                                <p>Compartimos tres artículos del Dr. Eugenio Semino, que recorren la historia del sistema previsional desde la recuperación de la democracia hasta 2023. Los artículos fueron publicados originalmente en MDZOL.</p>
                                <hr />
                            </div>
                            <br />
                            <br />

                        </div>
                        {noticia.length > 0 &&
                            <div className="contenedor-noticias">
                                {[...noticia].reverse().map((item, index) => (
                                    item.author === "Eugenio Semino" && (
                                        < PortadaNoticia key={index}
                                            imagen={item.imageUrl}
                                            titulo={item.title}
                                            articulo={`/articulo/${item._id}`} />
                                    )
                                ))
                                }
                            </div>}
                        <div className="mb-4">
                            <Link to="/home/noticias"> <Button variant="outline-dark">Volver</Button> </Link>
                        </div>
                    </SeccionArticulo>
                    <Footer style={{ opacity: mostrarPantalla ? '0' : '1' }} />
                </div>
            }
        </>

    )
}

const ContenedorLoader = styled.div`
display:flex;
justify-content:center;
align-items:center;
height: 90vh;
`

const SeccionArticulo = styled.div`
 display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
    img{
    width:400px;    
}

.contenedor-noticias{
    display:flex;
    gap: 30px;
    justify-content: center;
    flex-direction: column;
}

p{
}

.contenedor-encabezado{
    width: 90%;
    display:flex;
    flex-direction:column;
    justify-content:center;
}

 @media (min-width: 650px) {
 .texto{
width:40rem;
margin: 0 auto;
}

.contenedor-noticias{
    flex-direction: row;
}

.contenedor-encabezado{
    width:600px;
}

}
 `


