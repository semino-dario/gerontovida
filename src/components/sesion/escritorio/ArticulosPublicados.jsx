import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ContenedorGeneral } from '../../Contenedor';
import Preloder from '../../Preloder';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import BotonesEdicion from './BotonesEdicion';
import BotonesPublicar from './BotonesPublicar';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { articuloEditado } from '../../../state/actions';

function ArticulosPublicados() {
    const articulos = useSelector((state) => state.noticia.data)

    const token = localStorage.getItem('token')
    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const editarArticulo = async (id, slug) => {

        try {
            const { data: rta } = await axios.get(`${process.env.REACT_APP_API_URL}articulo/${id}/${slug}`, { headers })
            dispatch(articuloEditado(rta.data[0]))
            navigate('/articulos/publicar/' + token)
        }

        catch (error) {

            console.log(`ERROR DE AXIOS EN EDITAR ${error}`)
        }
    }

    return (
        <ContenedorArticulos>
            <BotonesPublicar
                linkPublicar={'/articulos/publicar/'}
            />
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
                                            onClick={() => { editarArticulo(item._id, item.slug) }}
                                            link={`/articulo/${item._id}/encabezado`}
                                            urlElminar={'articulo/'}
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
        </ContenedorArticulos>
    );
}

export default ArticulosPublicados;

const ContenedorArticulos = styled.div`
margin-top:100px;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;

`