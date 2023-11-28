import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from 'styled-components';
import Footer from "../Footer";
import Preloder from "../../Preloder";
import Portada from "../Portada";


export default function Articulo({ encabezado }) {

    const [mostrarPantalla, setMostrarPantalla] = useState(true)
    const { id } = useParams("id")
    const noticia = useSelector((state) => state.noticia.data);
    const [preloder, setPreloder] = useState(false)


    useEffect(() => {
        setPreloder(true)
        const time = setTimeout(() => { setPreloder(false) }, 650);
        const time2 = setTimeout(() => { setMostrarPantalla(false) }, 700);
        return () => clearTimeout(time, time2)
    }, []);

    let articulo

    noticia.map(item => {
        if (item._id === id) {
            articulo = item
        }
    })

    // Function create an object with __html property for dangerouslySetInnerHTML
    const createMarkup = (content) => {
        return { __html: content };
    };

    return (
        <>
            {preloder ?
                <Preloder /> :
                <>
                    <SeccionArticulo style={{ opacity: mostrarPantalla ? '0' : '1' }}>
                        <Portada />
                        {noticia.length > 0 && (
                            <div id={encabezado}><br />
                                <img className="img-fluid img-thumbnail" src={articulo.imageUrl} alt="" />
                                <br /> <br />
                                <h2>{articulo.title}</h2>
                                <hr />
                                <h4>{articulo.author}</h4>
                                <hr />
                                <div className="text-start p-3 texto" dangerouslySetInnerHTML={createMarkup(articulo.content)} />
                            </div>)}
                        <div className="mb-4">
                            <Link to="/home/noticias"> <Button variant="outline-dark">Volver</Button> </Link>
                        </div>
                    </SeccionArticulo>
                    <Footer />
                </>
            }

        </>
    )
}
const SeccionArticulo = styled.div`
 transition: opacity 0.4s;
img{
    width:400px;
    
}


 @media (min-width: 650px) {
 .texto{
width:40rem;
margin: 0 auto;
}


}
 `


