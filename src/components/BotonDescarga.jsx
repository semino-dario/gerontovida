import axios from "axios";
import { useState } from "react";
import { Button, Col, Modal } from "react-bootstrap";

export default function BotonDescarga(props) {

    const { id, periodo, texto } = props

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const descargar = async () => {

        try {

            const response = await axios.get(`${process.env.REACT_APP_API_URL}canastas/pdf/download/${id}`, {
                responseType: 'blob', // Set the response type to 'blob' to receive binary data
            })

            console.log(response.data)
            // Create a Blob from the file data received
            const blob = new Blob([response.data], { type: 'application/pdf' });

            // Create a download link for the Blob
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `Canasta-de-los-jubilados-${periodo}.pdf`); // Set the desired file name
            document.body.appendChild(link);
            link.click();

            // Clean up: revoke the object URL to free up resources
            window.URL.revokeObjectURL(url);
            handleClose()
        }

        catch (error) {
            console.log(`ERROR EN LA DESCARGA DEL ARCHIVO ${error}`)

        }

    }

    return (
        <>
            <Col sm> <Button variant="dark" onClick={handleShow}>
                {texto}       </Button></Col>


            <Modal show={show} onHide={handleClose}>
                {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
                <Modal.Body>Está a punto de descargar un archivo PDF.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button onClick={() => { descargar() }} variant='danger'>Descargar</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}
