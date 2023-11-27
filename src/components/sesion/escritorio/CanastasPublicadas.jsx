import { useNavigate } from "react-router-dom";
import { ContenedorGeneral } from "../../Contenedor";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import BotonesPublicar from "./BotonesPublicar";
import { useDispatch, useSelector } from "react-redux";
import Preloder from "../../Preloder";
import BotonesEdicion from "./BotonesEdicion";
import React from "react";
import axios from "axios";
import { canastaEditada } from "../../../state/actions";
import BotonDescarga from "../../BotonDescarga";

export default function CanastasPublicadas() {
    const canastas = useSelector((state) => state.canasta.data)
    const token = localStorage.getItem('token')
    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const editarCanasta = async (id) => {

        try {
            const { data: rta } = await axios.get(`${process.env.REACT_APP_API_URL}canastas/${id}`, { headers })
            dispatch(canastaEditada(rta.data))
            navigate('/canasta/publicar/' + token)
        }

        catch (error) {

            console.log(`ERROR DE AXIOS EN EDITAR ${error}`)
        }
    }


    return (

        <ContenedorCanastas>
            <BotonesPublicar
                linkPublicar={'/canasta/publicar/'}
            />
            <ContenedorGeneral className="contenedorGeneral">
                <Container>
                    <Row className='mt-3'>
                        <Col sm><h5>FECHA</h5></Col>
                        <Col sm><h5>TOTAL CANASTA</h5></Col>
                        <Col sm><h5>JUBILACIÓN MÍNIMA</h5></Col>
                        <Col sm><h5>PDF</h5></Col>
                        <Col sm><h5>ACCIONES</h5></Col>
                    </Row>
                    <hr />
                    {canastas && Array.isArray(canastas) && canastas.length > 0 ? (
                        [...canastas].reverse().map((item) => (
                            <React.Fragment key={item._id}>
                                <Row>
                                    <Col sm>{item.periodo}</Col>
                                    <Col sm>{`$ ${item.canasta}`}</Col>
                                    <Col sm>{`$ ${item.minima}`}</Col>
                                    <Col sm><BotonDescarga
                                        id={item._id}
                                        periodo={item.periodo}
                                        texto={'↓'}
                                    /></Col>

                                    <Col sm>
                                        <BotonesEdicion
                                            onClick={() => { editarCanasta(item._id) }}
                                            itemId={item._id}
                                            urlEliminar={'canastas/borrar/'}
                                            link={`/home/canasta`}
                                        />
                                    </Col>
                                </Row>
                                <hr />
                            </ React.Fragment>
                        ))
                    ) :
                        <Preloder />

                    }
                </Container>
            </ContenedorGeneral>

        </ContenedorCanastas>
    );
}

const ContenedorCanastas = styled.div`
margin-top:100px;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;

.contenedorGeneral{
}



.canastas{
    display:flex;

}


`