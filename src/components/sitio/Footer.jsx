import React from 'react';
import styled from 'styled-components';
import RedesSociales from './RedesSociales';
import footer from '../../svg/footer.svg'
import footer2 from '../../imagenes/footer.jpg'

function Footer() {

    return (
        <ContenedorFooter id="contacto">
            <div className="elementos-footer">
                <h3>Estamos en contacto</h3>

                <p> info@gerontovida.org.ar</p>
                <p> Ciudad Autónoma de Buenos Aires</p>
            </div>
            <div className='contenedor-redes'>
                <RedesSociales />
            </div>
            <div className='imagen'>
                <img src={footer2} alt="" />
            </div>
        </ContenedorFooter>
    )
}

export default Footer;

const ContenedorFooter = styled.div`
background-color:#605555;
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
padding-top:3rem; 
color:white;

h3{
}

.elementos-footer{
    width: 70%;
    z-index:10;

}

Button{
    margin-top:5%;
}

.contenedor-redes{
    background-color: #EFEADD;
    border-radius: 30px;
    padding: 5px;
    z-index:10;
}

.imagen{
    margin-top:-10rem;
    width: 35rem;

}

.imagen img{
    width:100%;
}

@media(max-width: 768px) {
    .imagen{
        margin-top:-5rem;

        width: 20rem;
    
}

`



