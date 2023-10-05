import axios from 'axios';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { articuloEditado } from '../../../state/actions';
import BotonEliminar from './BotonEliminar';
import { API } from "../../Globals"


export default function BotonesEdicion(props) {
    const token = localStorage.getItem('token')
    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { itemId, itemSlug } = props

    const editarArticulo = async (id, slug) => {

        try {
            const { data: rta } = await axios.get(`${API}articulo/${id}/${slug}`, { headers })
            dispatch(articuloEditado(rta.data[0]))
            navigate('/publicar/' + token)
        }

        catch (error) {

            console.log(`ERROR DE AXIOS EN EDITAR ${error}`)
        }
    }

    return (
        <ButtonGroup aria-label="Basic example">
            <Link to={`/articulo/${itemId}/encabezado`}><Button variant="info">Ver</Button></Link>
            <Button variant="warning"
                onClick={() => { editarArticulo(itemId, itemSlug) }}
            >Editar</Button>
            <BotonEliminar
                itemId={itemId}
            />
        </ButtonGroup>

    )
}