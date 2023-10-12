import { ContenedorObra, ScrollHorizontal } from './ScrollHorizontal'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Teatro() {

    const obras = []

    for (let i = 1; i <= 5; i++) {
        const imagenes = require(`../../imagenes/teatro/${i}.webp`)
        obras.push(imagenes)
    }

    return (

        <>
            <ContenedorScroll>
                <h4 id='teatro'>Ciclo de obras teatro "Todavía algo que decir"</h4>
                <br />
                <ScrollHorizontal
                    contenido={[...obras].reverse().map((item, index) =>
                        <ContenedorObra key={index}>
                            <Link to={`/reproducir-videos/${obras.length - index}`}>   <img src={item} /> </Link>
                        </ContenedorObra>
                    )}
                />
            </ContenedorScroll>
            <hr />
            <br />
        </>

    )
}

const ContenedorScroll = styled.div`

display:flex;
flex-direction:column;

`