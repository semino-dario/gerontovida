import { ContenedorGeneral } from "../Contenedor";
import styled from 'styled-components';
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import play from "../../svg/play.svg"
import eltrece from "../../imagenes/videos/eltrece.jpg"
import tn from "../../imagenes/videos/tn.jpg"

export default function VideoNoticias() {

    const [preloder, setPreloder] = useState(true)
    const [verVideo, setVerVideo] = useState(false)
    const [verVideo2, setVerVideo2] = useState(false)
    const [verMas, setVerMas] = useState(false)

    useEffect(
        () => {
            window.scrollTo(0, 0);
            const time = setTimeout(() => setPreloder(false), 1000)

            return () => clearTimeout(time)
        },
        []
    )





    return (

        <SeccionVideo>
            <ContenedorGeneral className="contenedor">
                {!verVideo ?
                    <div className="contenedor-video">
                        <img className="play" src={play} onClick={() => setVerVideo(true)} alt="" />
                        <img src={eltrece} className="imagen-fondo" alt="" />
                    </div>
                    :
                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/RjDXmvjw218?si=mJbhXwAXBXSm_GuY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>}
                <div>
                    <br />
                    <h3>Obras Sociales Prepagas: situación de los jubilados</h3>
                    <hr />
                    <p>El trece con Nelson Castro - 05/03/2024</p>
                </div>
                <br />
                {
                    !verMas ?
                        <div>
                            <Button variant='dark' onClick={() => setVerMas(true)}>  Ver más </Button>
                        </div>
                        :
                        <div>
                            {!verVideo2 ?
                                <div className="contenedor-video">
                                    <img className="play" src={play} onClick={() => setVerVideo2(true)} alt="" />
                                    <img src={tn} className="imagen-fondo" alt="" />
                                </div>
                                :
                                <div>
                                    <div>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/oosqN9ol6jk?si=YE4olmRHcNo866YE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </div>
                                </div>}
                            <div>
                                <br />
                                <h3>Aumento de los costos de las prepagas</h3>
                                <hr />
                                <p>Canal TN - 06/03/2024</p>
                                <br />
                                <div>
                                    <Button variant='dark' onClick={() => setVerMas(false)}>  Cerrar </Button>
                                </div>
                            </div>
                        </div>
                }
                <br />
            </ContenedorGeneral>
        </SeccionVideo>


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
    border-radius: 10px;

}

h3{
    padding: 2%;
}

.contenedor-video{
    position: relative;
    display: flex;
    flex-directon: column;
    justify-content:center;
    align-items: center;
    width: 100%;
    height: 315px;
    margin-top:1rem;
    border-radius: 10px;

}

.play{
    cursor:pointer;
    position:absolute;
    z-index: 10;
}

.imagen-fondo{
    position:absolute;
    z-index: 1;
    width: 90%;
    height:100%;
    object-fit:cover;
    border-radius: 10px;

}

iframe{
    margin-top:1rem;
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
        justify-content:center;
        align-items: center;
    }
}

`


