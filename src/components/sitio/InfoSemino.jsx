import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import ImagenSemino from '../../imagenes/semino.png';
import { ContenedorGeneral } from '../Contenedor';

export default function InfoSemino() {
  return (

    <SeccionColumna id="semino">
      <ContenedorGeneral
        style={{ borderColor: '#008900', maxWidth: "800px" }}
      >
        <ContainerColumna>
          <div className='encabezado'>
            <div className='container-contenido'>
              <h1>Dr. Eugenio Semino</h1>
              <p>Defensor de la Tercera Edad</p>
            </div>
            <div className='container-imagen'>
              <img alt="Eugenio Semino" src={ImagenSemino} />
            </div>
          </div>
          <hr />
          <div className='px-3 '>
            <p>El Dr. Eugenio Semino es Defensor de la Tercera Edad de la Ciudad de Buenos Aires, Presidente de la Sociedad Iberoamericana de Gerontología y Geriatría (SIGG) y miembro fundador de la Asociación Civil Años - Espacio Gerontovida. <br /> <br />
              Semino ha trabajado incansablemente para proteger los derechos de las personas mayores y promover una vejez activa y saludable. A lo largo de una extensa carrera ha logrado consolidarse como una voz influyente en la lucha contra el maltrato y la discriminación hacia las personas mayores, abogando por una distribución justa de los recursos y un sistema de seguridad social más equitativo en la República Argentina.</p>
          </div>
          <div className='my-3 text-center'>
            <a href='/pdf/nominacion.pdf' target="_blank">
              <Button variant="outline-success">Ver Designación </Button> </a>
          </div>
          <hr />
          <div className='p-3'>
            <p> <small>
              IMPORTANTE: El Dr. Semino no realiza trámites ni gestiones a título personal o profesional, ni autoriza a terceros a hacerlos en su nombre ante organismos como PAMI o ANSES. Todas las actuaciones en las que interviene se llevan a cabo a través de la Defensoría del Pueblo de la Ciudad de Buenos Aires.</small>
            </p>

          </div>
        </ContainerColumna>
      </ContenedorGeneral>
    </SeccionColumna>
  );

}

const SeccionColumna = styled.div`
display:flex;
justify-content:center;
align-intems:center;
margin-bottom: 10%;
margin-top: 10%;
text-align:left;
`
const ContainerColumna = styled.div`
display:flex;
flex-direction:column;
margin-top: 5%;
color:grey;
padding-top: 20px;
padding-bottom:5px;

.encabezado{
display:flex;
justify-content:center;
align-items:center;
font-size:20px;
text-align:center;
}

h1{
 color:#008900;
}
img{
  margin-top: -60px;
  margin-bottom: -70px;
  object-fit:cover;
  width: 100%;
}

.container-imagen{
width: 250px;
}


h5{
  color:#008900;
}

.container-contenido{
  margin-top:30px;
}

.fotos{
  padding:8% 2%;
 
}
`
