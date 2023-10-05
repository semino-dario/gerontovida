import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ContenedorGeneral } from '../../Contenedor';
import Preloder from '../../Preloder';
import { useSelector } from 'react-redux';
import React from 'react';
import BotonesEdicion from './BotonesEdicion';

function ArticulosPublicados() {
    const articulos = useSelector((state) => state.noticia.data)

    return (
        <ContenedorGeneral>
            <Container>
                <Row className='mt-3'>
                    <Col sm><h5>FECHA</h5></Col>
                    <Col sm><h5>TÍTULO</h5></Col>
                    <Col sm><h5>AUTOR</h5></Col>
                    <Col sm><h5>IMAGEN</h5></Col>
                    <Col sm><h5>ACCIONES</h5></Col>
                </Row>
                <hr />
                {articulos && Array.isArray(articulos) && articulos.length > 0 ? (
                    [...articulos].reverse().map((item) => (
                        <React.Fragment key={item._id}>
                            <Row>
                                <Col sm>{item.publishedDate.split('T', 1)}</Col>
                                <Col sm>{item.title}</Col>
                                <Col sm>{item.author}</Col>
                                <Col sm> <img style={{ width: '200px', height: '150px', objectFit: 'cover' }} src={item.imageUrl} alt="imagen del artículo" /></Col>
                                <Col sm>
                                    <BotonesEdicion
                                        itemId={item._id}
                                        itemSlug={item.slug}
                                    />
                                </Col>
                            </Row>
                            <hr />
                        </ React.Fragment>
                    ))
                ) :
                    < Preloder />}
            </Container>
        </ContenedorGeneral>
    );
}

export default ArticulosPublicados;