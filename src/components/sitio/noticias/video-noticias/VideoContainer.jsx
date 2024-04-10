import { useState } from "react"
import play from "../../../../svg/play.svg"
import styled from 'styled-components'

export default function VideoContainer({ link, titulo, descripcion, caratula }) {

    const [verVideo, setVerVideo] = useState(false)
    return (
        <ContenedorVideoNoticias>
            {!verVideo ? <div>
                <div className="contenedor-video">
                    <img className="play" src={play} onClick={() => setVerVideo(true)} alt="" />
                    <img src={caratula} className="imagen-fondo" alt="" />
                </div>
            </div>
                :
                <div>
                    <iframe width="560" height="315" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>}
            <div>
                <br />
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
                <hr />
                <br />
            </div>
        </ContenedorVideoNoticias>)
}

const ContenedorVideoNoticias = styled.div`

p{
    padding: 2%;
}

`