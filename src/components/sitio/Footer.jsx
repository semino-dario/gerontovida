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

                <p> TE: 4455-43543</p>
                <p> Email: gerontoredes@gmail.com</p>
                <p>Bartolomé Mitre XXX </p>
                <p> Ciudad Autónoma de Buenos Aires</p>
            </div>
        </ContenedorFooter>
    )
}

export default Footer;

const ContenedorFooter = styled.div`
background-color:#605555;
display:flex;

justify-content:center;
align-items: center;
padding: 4%;
color:white;

h3{
}

.elementos-footer{
    width: 70%;

}

Button{
    margin-top:5%;
}

`



