import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import wasap from '../../svg/whatsapp.svg'
import mail from '../../svg/mail2.svg'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import React from 'react';


export default function TarjetaConsultorio({ titulo, temas, docentes, archivo }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <DivScroll
            className='mb-4'>

            <ContenedorConsultorio>
                <div>
                    <div className='contenedorTitulo'>
                        <h5>{titulo}</h5>
                    </div>
                    <div className='body-tarjeta'>
                        <div className='temas'>
                            {temas.map((tema, index) => (
                                <p key={index}> <u>{tema}</u></p>))}
                        </div>
                        <hr />
                        {docentes.map((doc, index) => (
                            <div key={index} className='fichaPersonal'>
                                <img src={doc.imagen} alt="" />
                                <p >{doc.info}</p>
                            </div>
                        ))}
                    </div>
                    <div className='contacto'>
                        <img className='logo' onClick={handleShow} src={mail} alt="mail" />
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Body>Podés escribirnos a: <a href="mailto:consultoriogerontovida@gmail.com "> consultoriogerontovida@gmail.com </a>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Cerrar
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <a target='_blank' href="https://wa.me/541168516158?text=Hola,%20quer%C3%ADa%20averiguar%20sobre%20el%20Consultorio%20Gerontol%C3%B3gico"> <img className='logo' src={wasap} alt="logo de Whatsapp" /> </a>
                    </div>
                </div>
                <br />

                <a className='botonInfo' href={`/pdf/${archivo}`} target="_blank">
                    <Button> Ver información </Button> </a>
            </ContenedorConsultorio>
        </DivScroll>

    )
}



const DivScroll = styled.div`
scroll-snap-align: start; 
`
const ContenedorConsultorio = styled.div`
width: 19rem;
height: 26rem;
background-color: white;
border-radius: 2%;
border: solid 2px #F30000;

h5{
    font-size: 1.1rem;

}

.contenedorTitulo{
    display:flex;
    align-items:center;
    justify-content:center;
    color: #008900;
    border-bottom: 1px solid gray;
    height: 4.5rem;
    padding-inline: 2%;
}

img{
    width:5rem;
    height: 5rem;
    border-radius: 50%;
    object-fit:cover;
    border: solid 2px #FFAA00;
    
}

.body-tarjeta{
    padding: 0 0.5rem;
    height: 12rem;
    display:flex;
    align-items:center;
    text-align:left;


}

.temas{
    width: 65%;
    color: #F30000;
    font-size: 0.9rem;

}


.fichaPersonal{
    
    width: 35%;
    font-size: 0.8rem;
    text-align: center;
}

.contacto{
    background-color:#FFAA00;
    display: flex;
    justify-content:center;
    gap: 4rem;
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