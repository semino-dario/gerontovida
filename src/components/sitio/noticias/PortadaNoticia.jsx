import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"
import styled from 'styled-components';

function PortadaNoticia(props) {
  return (
    <DivScroll className='mb-4'>
      <Card bg='light' style={{ width: '20rem' }}>
        <Link to={`${props.articulo}/encabezado`}> <Card.Img variant="top" style={{ width: '20rem', height: '12rem', objectFit: 'cover' }} src={props.imagen} /> </Link>
        <Card.Body>
          <Card.Title> <Link className="btn" to={`${props.articulo}/encabezado`}> {props.titulo}</Link>  </Card.Title>
          <Card.Text>
            {props.autor}
          </Card.Text>
        </Card.Body>
      </Card>
    </DivScroll>
  );
}
export default PortadaNoticia;

const DivScroll = styled.div`
scroll-snap-align: start; 
`