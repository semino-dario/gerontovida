import React from 'react';
import styled from 'styled-components';
import IconoYouTube from '../../svg/icon-youtube.svg';
import IconoFacebook from '../../svg/icon-facebook.svg';
import IconoInstagram from '../../svg/icon-instagram.svg';
import IconoLinkedin from '../../svg/icon-linkedin.svg';



function RedesSociales() {

  return (

    <ContenedorRedesSociales>
      <a href='https://www.youtube.com/@espaciogerontovida6922' target="_blank" rel="noreferrer"  ><img src={IconoYouTube} alt="icono red social" /></a>
      <a href='https://www.facebook.com/gerontovidainfo' rel="noreferrer"  ><img src={IconoFacebook} alt="icono red social" /></a>
      <a href='https://www.instagram.com/espacio.gerontovida/' target="_blank" rel="noreferrer"  ><img src={IconoInstagram} alt="icono red social" /></a>
      <a href='https://www.linkedin.com/in/espacio-gerontovida-b91b21227/' target="_blank" rel="noreferrer"  ><img src={IconoLinkedin} alt="icono red social" /></a>
    </ContenedorRedesSociales>

  );
}

export default RedesSociales;


const ContenedorRedesSociales = styled.div`

display: flex;
align-items: center;
justify-content:center;
gap: 20px;
    padding: 1%;
    width: 20%;
    margin-left: 100px;
    padding-top:3%;

img{
  height: 25px;
}

a{
  padding-left: 4%;

}

@media (min-width: 768px)
{
  img{
    height: 30px;
  }
}

.logoGeronto{
  height: 50px;
}

`
