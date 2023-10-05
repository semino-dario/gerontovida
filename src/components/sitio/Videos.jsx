import { ContenedorObra, ScrollHorizontal } from './ScrollHorizontal'
import styled from 'styled-components';

export default function Videos() {

    const videos = []

    for (let i = 1; i <= 4; i++) {
        const programas = require(`../../imagenes/videos/${i}.jpg`)
        videos.push(programas)
    }
    return (
        <>
            <ContenedorScroll>
                <h4 id='videos'>Videos</h4>
                <br />
                <ScrollHorizontal
                    contenido={videos.map((item) =>
                        <ContenedorObra>
                            <img src={item} />
                        </ContenedorObra>
                    )}
                />
            </ContenedorScroll>
        </>

    )
}

const ContenedorScroll = styled.div`

display:flex;
flex-direction:column;

`