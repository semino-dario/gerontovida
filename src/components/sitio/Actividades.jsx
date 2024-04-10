import React from 'react';
import styled from 'styled-components';
import { ContenedorGeneral } from '../Contenedor';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom"
import imagen from "../../imagenes/encuentro-24.jpg"
function Actividades() {

  return (

    <SeccionActividades id="actividades" >
      <ContenedorGeneral className="px-1 py-3 mb-3 contenedor-general">
        <h1  >Video del Conversatorio </h1>
        <br />
        <Container className="container-acordeon">
          <Row>
            <Col>
              <Link to="//video-congreso-2023">  <Image src={imagen} rounded /> </Link>
            </Col>
          </Row>
          <Accordion className='pb-2'>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="header mb-0">VER MÁS INFORMACIÓN</Accordion.Header>
              <Accordion.Body>
                <div className='contenido'>
                  <h5>El Dr. Eugenio Semino conversará con los periodistas Ismael Bermúdez y Silvia Stang, ambos especializados en temas previsionales, sobre la situación actual de las jubilaciones y sobre los desafíos que se acercan en un contexto tan adverso.</h5>
                  <hr />
                  <h5>Horario</h5>
                  <p>
                    9 de abril de 15 a 17:30 hs
                  </p> <hr />
                  <h5>Lugar</h5>
                  <p>
                    Abra Cultural - Hipólito Yrigoyen 840, Ciudad de Buenos Aires                  </p> <hr />
                  <h5>Inscripción</h5>
                  <p>
                    gerontoredes@gmail.com
                  </p> <hr />
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>

      </ContenedorGeneral>
    </SeccionActividades>

  );

}

export default Actividades;

const SeccionActividades = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
margin: 5% auto;

h2{
  margin-bottom: 2rem;
}

img{
  width:100%;
  height:100%;
  object-fit:cover;
  border-radius: 10px;
}

.contenedor-general{
  color: #0749E0;

}

.contenido{
  text-align:left;
}

@media(min-width:768px){

.contenedor-general{
flex-direction:row;
justify-content:center;
}

h1{
  margin-top:10%;
  margin-left: 15%;
}

.container-acordeon{
  width:500px;
}
}


`

