import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function CartelPrueba() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Sitio en desarrollo + info </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Versión de muestra</Modal.Title>
                </Modal.Header>
                <Modal.Body>La presente es una muestra del sitio web de la Asociación Gerontovida, el mismo se encuentra en estado de desarrollo. La información y los datos aquí presentados son generados por funciones random, en ningún caso representan datos reales. </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

