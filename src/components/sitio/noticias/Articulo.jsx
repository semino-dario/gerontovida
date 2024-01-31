import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from 'styled-components';
import Footer from "../Footer";
import Portada from "../Portada";
import PortadaNoticia from "./PortadaNoticia";
import Preloder from "../../Preloder";
import React from 'react';
import NotaSemino from "./NotaSemino";

export default function Articulo({ encabezado }) {

    const [mostrarPantalla, setMostrarPantalla] = useState(true)
    const { id } = useParams("id")
    const noticia = useSelector((state) => state.noticia.data);
    let articulo
    let fecha
    const time = setTimeout(() => { setMostrarPantalla(false) }, 700);


    const scrollTop = () => {
        window.scrollTo(0, 0);
        setMostrarPantalla(true)
        time()

    }

    useEffect(() => {
        window.scrollTo(0, 0);
        const time = setTimeout(() => { setMostrarPantalla(false) }, 700);
        return () => clearTimeout(time)
    }, []);

    if (noticia) {
        noticia.map(item => {
            if (item._id === id) {
                articulo = item
                const fecha1 = articulo.publishedDate.split('T', 1)
                const partes = fecha1[0].split('-')
                fecha = partes.reverse().join('-')
            }
        })
    }
    // Function create an object with __html property for dangerouslySetInnerHTML
    const createMarkup = (content) => {
        return { __html: content };
    };


    return (
        <>
            {!noticia ?
                <ContenedorLoader>
                    <Preloder />
                </ContenedorLoader>
                :
                <div >
                    <SeccionArticulo style={{ opacity: mostrarPantalla ? '0' : '1' }}>
                        <Portada />
                        <br />
                        {noticia.length > 0 && (
                            <div className='contenedor-copete' id={encabezado}><br />
                                <img className="img-fluid img-thumbnail" src={articulo.imageUrl} alt="" />
                                <br />
                                <h2 className="titulo">{articulo.title}</h2>
                                <h5>{articulo.author}</h5>
                                <p> {fecha} </p>
                                <div className="text-start p-3 texto" dangerouslySetInnerHTML={createMarkup(articulo.content)} />
                            </div>

                        )
                        }
                        <div className="mb-4 contenedor-otros">
                            {
                                articulo.author === "Eugenio Semino" ?
                                    <div >
                                        <hr />
                                        <br />
                                        <h4>Leer el resto de los artículos:</h4>
                                        <br />
                                        <div className="contenedor-noticias">
                                            {[...noticia].reverse().map((item, index) => (
                                                item.author === "Eugenio Semino" && (
                                                    item.title !== articulo.title &&
                                                    <div onClick={scrollTop} >
                                                        < PortadaNoticia
                                                            key={index}
                                                            imagen={item.imageUrl}
                                                            titulo={item.title}
                                                            articulo={`/articulo/${item._id}`} />
                                                    </div>
                                                )
                                            ))
                                            }</div>
                                        <Link to="/notas-semino"> <Button variant="outline-dark">Volver</Button> </Link>
                                    </div>
                                    :
                                    <div >
                                        <div>
                                            <hr />
                                            <br />
                                            <h4>Seguir leyendo:</h4>
                                            <br />
                                            <div className="contenedor-noticias" >
                                                {[...noticia].reverse().map((item, index) => (
                                                    item.author !== "Eugenio Semino" && (
                                                        item.title !== articulo.title && (
                                                            index < 3 &&
                                                            <div onClick={scrollTop}>
                                                                < PortadaNoticia
                                                                    key={index}
                                                                    imagen={item.imageUrl}
                                                                    titulo={item.title}
                                                                    autor={item.author}
                                                                    articulo={`/articulo/${item._id}`} />
                                                            </div>
                                                        ))
                                                ))
                                                }</div>
                                        </div>
                                        <Link to="/home/noticias"> <Button variant="outline-dark">Volver</Button> </Link>
                                    </div>}
                        </div>
                    </SeccionArticulo>
                    <Footer />
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
img{
    width:60%;
    
}
.titulo{
    width:60%;
}

h5{
    margin-top: 10px;
    border-bottom: solid 1px black;
    border-top: solid 1px black;
    padding: 20px;
}

.contenedor-copete{
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
}

.titulo{
padding: 2%;
}

.contenedor-otros{
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
}

.contenedor-noticias{
    display:grid;
    grid-template-columns: 50% 50%;
    justify-content: center;
    align-items:center;
    gap: 1rem;

}

@media( max-width:650px) {
    .contenedor-noticias{
        grid-template-columns: 100%;
    }

    img{
        width:90%;   
    }

    .titulo{
        width:90%;
    }
}

 @media (min-width: 650px) {
 .texto{
width:40rem;
margin: 0 auto;
}


}
 `


