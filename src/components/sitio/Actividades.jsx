import React from 'react';
import styled from 'styled-components';
import Actividad from '../../imagenes/actividad.png';
import { ContenedorGeneral } from '../Contenedor';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';

function Actividades() {

  return (

    <SeccionActividades id="actividades" >
      <ContenedorGeneral className="px-1 py-3 mb-3 contenedor-general">
        <h1  >Próximas <br /> actividades</h1>
        <br />
        <Container className="container-acordeon">
          <Row>
            <Col>
              <Image src={Actividad} rounded />
            </Col>
          </Row>
          <Accordion className='pb-2'>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="header mb-0">TRANSFORMA TUS CAPACIDADES EN PROYECTOS</Accordion.Header>
              <Accordion.Body>
                <h5>¿Sentís que tenés buenas ideas y potencial pero no lográs dar el primer paso para concretarlas?</h5>
                <br />
                <p>
                  Desde Gerontovida diseñamos este taller con la finalidad de crear un grupo de pequeños emprendedores que deseen volcar sus capacidades en un proyecto.
                  Este espacio te sirve si deseás aprovechar tus capacidades para tener un ingreso extra a la jubilación.
                  También te sirve si tenés ideas culturales, sociales, recreativas, solidarias
                  pero no sabes cómo concretarlas.
                </p> <hr />
                <p>
                  Proponemos un grupo de intercambio y apoyo donde pensaremos alternativas, idearemos soluciones, definiremos tu propuesta y finalmente armaremos un plan de acción y de seguimiento de cada proyecto.
                </p>
                <hr />
                <p>
                  Los encuentros son mensuales, presenciales con seguimiento virtual. </p><hr />
                <p> 2dos sábado de cada mes de 10 a 12:30hs.
                  en el barrio de Congreso, CABA.
                  Inicia el 8/7/23. <br />
                  Actividad arancelada. <br />  <br />
                  ¡Pasa de la intención a la acción! <br />  <br />
                  Consulta para mas info en:
                  ale.reynes@hotmail.com
                </p>
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
margin: 10% auto;

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

