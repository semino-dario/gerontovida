import styled from "styled-components"
import React from "react"
import BotonesSesion from "./BotonesSesion"
import { Link, useParams } from "react-router-dom"

export default function Escritorio() {
    const token = useParams('token')

    return (
        <EscritorioBlog>
            <BotonesSesion />
            <div className="secciones">
                <Link className="link" to={`/articulos/publicados/${token.token}`}> <div className="seccion"><h3>Artículos</h3></div> </Link>
                {/* <Link className="link"> <div className="seccion"><h3>Actividades</h3></div> </Link> */}
                <Link className="link" to={`/canastas/publicadas/${token.token}`}>  <div className="seccion"><h3>Canastas</h3></div> </Link>
            </div>
        </EscritorioBlog>
    )
}

const EscritorioBlog = styled.section`
margin-top:100px;

.secciones{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap: 30px;
    margin-top: 100px;

}

.seccion{
    padding: 15px;
    border: solid 1px red;
    border-radius: 10px;
    width: 300px;
    cursor:pointer;
    color:white;
    background-color:#008900;

}
.seccion:hover{
    background-color: red;
}

.link{
    text-decoration:none;
}

 `