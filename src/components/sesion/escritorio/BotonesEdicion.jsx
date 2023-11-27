import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';
import BotonEliminar from './BotonEliminar';


export default function BotonesEdicion(props) {

    const { itemId, urlEliminar, onClick, link } = props

    return (
        <ButtonGroup aria-label="Basic example">
            <Link to={link}><Button variant="info">Ver</Button></Link>
            <Button variant="warning"
                onClick={onClick}
            >Editar</Button>
            <BotonEliminar
                itemId={itemId}
                urlEliminar={urlEliminar}
            />
        </ButtonGroup>

    )
}