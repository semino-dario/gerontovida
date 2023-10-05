import { ContenedorGeneral } from "../Contenedor";
import styled from 'styled-components';
import Portada from "./Portada";
import { Button } from "react-bootstrap";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import Preloder from "./../Preloder";
import { Link, useParams } from "react-router-dom";


export default function ReproductorVideo() {

    const video = useSelector(state => state.video)
    const [preloder, setPreloder] = useState(true)
    const { id } = useParams("id")

    useEffect(
        () => {
            window.scrollTo(0, 0);
            const time = setTimeout(() => setPreloder(false), 1000)

            return () => clearTimeout(time)
        },
        []
    )





    return (
        <>
            {preloder ?
                <Preloder /> :
                <>
                    <SeccionVideo>
                        <Portada />
                        {video.length > 0 &&
                            <ContenedorGeneral className="contenedor">
                                <div>
                                    <iframe src={video[id - 1].url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </div>
                                <div>
                                    <h3>{video[id - 1].titulo}</h3>
                                    <hr /> <br />
                                    <p>{video[id - 1].descripcion}</p>
                                </div>
                            </ContenedorGeneral>}
                        <Link to="/home/teatro"> <Button className="btn-dark">Volver</Button></Link>
                    </SeccionVideo>
                    <Footer />
                </>
            }
        </>
    )
}

const SeccionVideo = styled.section`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin-bottom: 5%;

iframe{
    width:90%;
}

@media (min-width:630px) {
    iframe{
        width: 600px;
        height: 400px;
    }

    .contenedor{
        width: 800px;
        padding: 2%;
    }
}

`


