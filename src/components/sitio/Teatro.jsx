import { ContenedorObra, ScrollHorizontal } from './ScrollHorizontal'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import todavia from '../../svg/todavia.svg'

export default function Teatro() {

    const obras = []

    for (let i = 1; i <= 6; i++) {
        const imagenes = require(`../../imagenes/teatro/${i}.webp`)
        obras.push(imagenes)
    }

    return (

        <div id='teatro'>
            <ContenedorScroll >
                <br />
                <div className='portada'>
                    <img className='mascara' src={todavia} alt="" />
                    <p className='cartelTeatro'>Ciclo de obras breves escritas por Silvia Perelis, directora del Espacio Gerontovida. El objetivo del ciclo es la puesta en escena sobre vivencias de la vejez y del envejecer para promover el debate con la comunidad. </p>
                    <br />
                </div>
                <ScrollHorizontal
                    contenido={[...obras].reverse().map((item, index) =>
                        <ContenedorObra key={index}>
                            <Link to={`/reproducir-videos/${obras.length - index}`}>   <img src={item} alt="obra de teatro" /> </Link>
                        </ContenedorObra>
                    )}
                />
            </ContenedorScroll>
            <hr />
            <br />
        </div>

    )
}

const ContenedorScroll = styled.div`

display:flex;
flex-direction:column;

.portada{
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    padding: 5px;
}

.tituloCartel{
    display: flex;
    flex-direction:column;
    gap: 20px;
    justify-content:center;
    align-items:center;
}

.mascara{
    max-width:800px;
}

.cartelTeatro{
border: solid 1px black;
border-radius:10px;
max-width: 600px;
min-width: 340px;
padding: 1%;
}

`

