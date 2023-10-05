import React from 'react';
import styled from 'styled-components';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Footer() {

    return (
        <ContenedorFooter id="contacto">
            <div className="elementos-footer">
                <h3>Estamos en contacto</h3>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Dirección de mail"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Asunto"
                    className="mb-3"
                >
                    <Form.Control type="text" placeholder="asunto" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2" label="Comentario">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </div>
        </ContenedorFooter>
    )
}

export default Footer;

const ContenedorFooter = styled.div`
background-color:#605555;
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
padding: 4%;

h3{
    color:white;
}

.elementos-footer{
    width: 70%;

}

Button{
    margin-top:5%;
}

`



