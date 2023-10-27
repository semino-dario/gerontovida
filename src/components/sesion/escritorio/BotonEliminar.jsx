import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function BotonEliminar(props) {

    const token = localStorage.getItem('token')
    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { itemId, urlEliminar } = props


    const eliminarArticulo = async (id) => {
        try {
            await axios.delete(`${process.env.REACT_APP_API_URL}${urlEliminar}${id}`, { headers })
            window.location.reload()
        }
        catch (error) {
            console.log(`ERROR DE AXIOS EN ELIMINAR: ${error}`)
        }
    }

    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Eliminar
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>¡Cuidado!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Está a punto de eliminar un elemento.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={() => eliminarArticulo(itemId)}>
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}