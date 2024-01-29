import { ContenedorGeneral } from "../Contenedor";
import styled from 'styled-components';
import Portada from "./Portada";
import { Button } from "react-bootstrap";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import Preloder from "../Preloder";
import { Link, useParams } from "react-router-dom";
import play from "../../svg/play.svg"


export default function ReproductorVideo() {

    const video = useSelector(state => state.video)
    const [preloder, setPreloder] = useState(true)
    const [verVideo, setVerVideo] = useState(false)
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
                                {!verVideo ?
                                    <div className="contenedor-video">
                                        <img className="play" src={play} onClick={() => setVerVideo(true)} alt="" />
                                    </div>
                                    :
                                    <div>
                                        <iframe src={video[id - 1].url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </div>}
                                <div>
                                    <br />
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

.contenedor-video{
    display: flex;
    flex-directon: column;
    justify-content:center;
    align-items: center;
    border: solid 1px black;
border-radius: 1%;
height: 200px;
background-color: black;
}

.play{
    cursor:pointer;
}

iframe{
    margin-top:1rem;
}

marco{
border: solid 1px black;
border-radius: 1%;
}

@media (min-width:630px) {
    iframe{
        width: 600px;
        height: 400px;
    }

    .contenedor-video{
        width: 600px;
        height: 400px;
    }

    .contenedor{
        width: 800px;
        padding: 2%;
        justify-content:center;
        align-items: center;
    }
}

`


