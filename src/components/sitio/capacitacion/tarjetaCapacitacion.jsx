import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import React from 'react';


export default function TarjetaCapacitacion({ titulo, docente, acredita, dirigido, imagen, archivo }) {

    return (
        <DivScroll
            className='mb-4'>

            <ContenedorCapacitacion>
                <div>
                    <div className='contenedorTitulo'>
                        <h5>{titulo}</h5>
                    </div>

                    <div className='body-tarjeta'>
                        <div className='temas'>
                            <p>{acredita}</p>
                            <p>{dirigido}</p>
                        </div>
                        <div><p>{docente}</p></div>
                    </div>

                    <div className=''>
                        <img src={imagen} alt="imagen ilustrativa del curso" />
                    </div>
                    <div className='contacto'>
                        <p>Informes e inscripcción:</p>
                        <a href="mailto:consultoriogerontovida@gmail.com "> capacitacionesgerontovida@gmail.com </a>
                    </div>
                </div>
                <a className='botonInfo' href={`/pdf/${archivo}`} target="_blank">
                    <Button> Descargar programa </Button> </a>
            </ContenedorCapacitacion>
        </DivScroll>

    )
}



const DivScroll = styled.div`
scroll-snap-align: start; 
`
const ContenedorCapacitacion = styled.div`
width: 19rem;
height: 34rem;
background-color:white;
border-radius: 2%;
border: solid 2px #FFAA00;

h5{
    font-size: 1.1rem;

}

.contenedorTitulo{
    display:flex;
    align-items:center;
    justify-content:center;
    color: #008900;
    border-bottom: 1px solid #FFAA00;
    padding-top:0.4rem;
    height: 6rem;
}

img{
    width:8rem;
    height: 8rem;
    object-fit:cover;
    
}

.body-tarjeta{
    padding: 0 0.5rem;
    height: 12rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:left;

}

.temas{
    display:flex;
    flex-direction:column;
    text-align: center;
    font-size: 0.9rem;
    color: blue;
    padding-top:0.3rem;

}




.contacto{
    background-color:#008900;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    color:white;
    margin-bottom:0.7rem;
}

.contacto p{
 font-size: 1.2rem;
 margin-bottom: 1px;
 color:white;

}

.contacto a {
    color:white;
    text-decoration:none;
}


.logo{
    height: 3rem;
    width: 3rem;
    cursor: pointer;
}

.botonInfo{
    pading-bottom: 1rem;
}

`

// color: #F30000;
