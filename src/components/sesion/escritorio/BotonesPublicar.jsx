import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import BotonSesion from "../BotonSesion"

export default function BotonesPublicar(props) {
    const token = useParams('token')
    const { linkPublicar } = props

    return (
        <ContenedorBotones>
            <Link to={`${linkPublicar}${token.token}`}><BotonSesion
                texto={'publicar'}
            /></Link>
            <Link to={`/escritorio/${token.token}`}><BotonSesion
                texto={'volver'}
            /></Link>
        </ContenedorBotones>
    )
}

const ContenedorBotones = styled.div`
display:flex;
width: 50%;
justify-content: space-between;

`


