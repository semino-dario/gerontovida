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
                Sitio de muestra + info </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Versión de muestra</Modal.Title>
                </Modal.Header>
                <Modal.Body> <p>
                    La presente es una muestra del sitio web de la Asociación Gerontovida. La información y los datos aquí presentados son generados por funciones random, en ningún caso representan datos reales. </p>

                    <hr />
                    <h5>Información técnica</h5>
                    <p>
                        El front-end está desarrollado con React, Redux, ReactBootstrap, Styled-Components y React-Chart para los gráficos de la canasta, entre otras tecnologías. Toda la sección pública del sitio es responsive. La sección interna, correspondiente al Login y el acceso al escritorio de trabajo no es responsive. Y no es tampoco de acceso público.

                        El front-end se encuentra alojado en Netlify.
                    </p>
                    <p>
                        El back-end es una API desarrollada con Node.js, Express y la base de datos con MongoDB. La misma se encuentra alojada en Cyclic. Las imágenes de los artículos y archivos PDF de las canastas se cargan en un bucket de AWS S3. <br /> <br />
                        Se puede ver la documentación de la API aquí: <br />
                        <a href="https://api-contenidos.cyclic.app/" rel="noreferrer" target="_blank">api-contenidos</a> <br /> <br />
                        Se puede ver el repositorio del front-end aquí: <br />
                        <a href="https://github.com/semino-dario/gerontovida" rel="noreferrer" target="_blank">gerontovida-repo</a> <br /> <br />
                        Se puede ver el repositorio de la API aquí: <br />
                        <a href="https://github.com/semino-dario/api-contenidos" rel="noreferrer" target="_blank">api-contenidos-repo</a>


                    </p>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

