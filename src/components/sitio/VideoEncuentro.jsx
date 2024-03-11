import { ContenedorGeneral } from "../Contenedor";
import styled from 'styled-components';
import Portada from "./Portada";
import { Button } from "react-bootstrap";
import Footer from "./Footer";
import { useEffect } from "react";
import { useState } from "react";
import Preloder from "./../Preloder";
import { Link } from "react-router-dom";
import play from "../../svg/play.svg"

export default function VideoEncuentro() {

    const [preloder, setPreloder] = useState(true)
    const [verVideo, setVerVideo] = useState(false)

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
                        <ContenedorGeneral className="contenedor">
                            <div className="marco">
                                {!verVideo ?
                                    <div className="contenedor-video">
                                        <img className="play" src={play} onClick={() => setVerVideo(true)} alt="" />
                                    </div>
                                    :
                                    <div className="contenedor-video">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/7HTDet30Uuo?si=WnvyeH5FtmhPHxLw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </div>}
                            </div>
                            <div>
                                <br />
                                <h3>Congreso Gerontovida 1990 - 2023</h3>
                                <hr /> <br />
                                <p></p>
                            </div>
                        </ContenedorGeneral>
                        <Link to="/home"> <Button className="btn-dark">Volver</Button></Link>
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

.contenedor{
    background-color:black;

}

iframe{
    width:90%;

}

h3{
    color: white;
}

.contenedor-video{
    display: flex;
    flex-directon: column;
    justify-content:center;
    align-items: center;
    border: solid 1px black;
border-radius: 1%;
height: 300px;
}

.play{
    cursor:pointer;
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
        background-color:black;
    }
}

`


