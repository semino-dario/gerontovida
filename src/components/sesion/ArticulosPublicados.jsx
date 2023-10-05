import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ContenedorGeneral } from '../Contenedor';
import Preloder from '../Preloder';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { articuloEditado } from '../../state/actions';

function ArticulosPublicados() {
    const articulos = useSelector((state) => state.noticia.data)
    const token = localStorage.getItem('token')
    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const eliminarArticulo = async (id) => {
        try {
            await axios.delete(`https://lazy-duck-outfit.cyclic.cloud/api/v1/articulo/${id}`, { headers })
            window.location.reload()
        }
        catch (error) {
            console.log(`ERROR DE AXIOS EN ELIMINAR: ${error}`)
        }
    }

    const editarArticulo = async (id, slug) => {

        try {

            const { data: rta } = await axios.get(`https://lazy-duck-outfit.cyclic.cloud/api/v1/articulo/${id}/${slug}`, { headers })
            dispatch(articuloEditado(rta.data[0]))
            navigate('/publicar/' + token)
        }

        catch (error) {

            console.log(`ERROR DE AXIOS EN EDITAR ${error}`)
        }
    }

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
                                <Col sm> <img style={{ width: '200px', height: '150px', objectFit: 'cover' }} src={require(`../../imagenes/${item.image}.png`)} alt="imagen del artículo" /></Col>
                                <Col sm>
                                    <ButtonGroup aria-label="Basic example">
                                        <Link to={`/articulo/${item._id}/encabezado`}><Button variant="info">Ver</Button></Link>
                                        <Button variant="warning"
                                            onClick={() => { editarArticulo(item._id, item.slug) }}
                                        >Editar</Button>
                                        <Button variant="danger"
                                            onClick={() => { eliminarArticulo(item._id) }}
                                        >Eliminar</Button>
                                    </ButtonGroup>

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