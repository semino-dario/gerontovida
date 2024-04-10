import { ContenedorGeneral } from "../../../Contenedor";
import styled from 'styled-components';
import { Button } from "react-bootstrap";
import { useState } from "react";
import eltrece from "../../../../imagenes/caratulas-noticias/eltrece.jpg"
import tn from "../../../../imagenes/caratulas-noticias/tn.jpg"
import tn2 from "../../../../imagenes/caratulas-noticias/tn2.png"
import chiche from "../../../../imagenes/caratulas-noticias/chiche.png"
import video3 from "../../../../imagenes/caratulas-noticias/video-noticias-3.png"
import diputados from "../../../../imagenes/caratulas-noticias/diputados.png"

import VideoContainer from "./VideoContainer";

export default function VideoNoticias() {

    const [verMas, setVerMas] = useState(false)

    const videos = [
        {
            link: "https://www.youtube.com/embed/zp27DL6WcTg?si=q8iXKNE8RMXE7Y_3",
            titulo: "El haber de los jubilados dura 10 minutos", descripcion: "Dr. Eugenio Semino expone en la Cámara de Diputados de la Nación. 04-04-2024", caratula: diputados
        },
        {
            link: "https://www.youtube.com/embed/7b5lFvn9e5k?si=5bwt0x1WERYI2_gN",
            titulo: "La vida de los jubilados en abril de 2024", descripcion: " Crónica TV, 01/04/2024. Conducción Chiche Gelblung", caratula: chiche
        }, {
            link: "https://www.youtube.com/embed/W1ZLSx4K2ng?si=f89hYaRLtAiis62Y",
            titulo: "Jubilación en dos tramos", descripcion: "Canal TN - 29/03/2024", caratula: tn2
        }, {
            link: "https://www.youtube.com/embed/cNrnUrs1g4o?si=5O8R_nRK5ChYIUOO",
            titulo: "Movilidad jubilatoria", descripcion: "Programa Desayuno Americano, marzo 2024, Canal América", caratula: video3
        }, { link: "https://www.youtube.com/embed/RjDXmvjw218?si=mJbhXwAXBXSm_GuY", titulo: "Obras Sociales Prepagas: situación de los jubilados", descripcion: "El trece con Nelson Castro - 05/03/2024", caratula: eltrece },
        {
            link: "https://www.youtube.com/embed/oosqN9ol6jk?si=YE4olmRHcNo866YE",
            titulo: "Aumento de los costos de las prepagas", descripcion: "Canal TN - 06/03/2024", caratula: tn
        }]

    return (
        <SeccionVideo>
            <ContenedorGeneral className="contenedor">
                <VideoContainer
                    link={videos[0].link}
                    titulo={videos[0].titulo}
                    descripcion={videos[0].descripcion}
                    caratula={videos[0].caratula}
                />
                {
                    !verMas ?
                        <div>
                            <Button variant='dark' onClick={() => setVerMas(true)}>  Ver más </Button>
                        </div>
                        :
                        <div>
                            {videos.map((video, index) => (
                                <div key={index}>
                                    {index > 0 &&
                                        <VideoContainer
                                            link={video.link}
                                            titulo={video.titulo}
                                            descripcion={video.descripcion}
                                            caratula={video.caratula}
                                        />}
                                </div>))}
                            <div>
                                <Button variant='dark' onClick={() => setVerMas(false)}>  Cerrar </Button>
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


