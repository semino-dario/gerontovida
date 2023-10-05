import styled from "styled-components"
import ArticulosPublicados from "./ArticulosPublicados"
import React from "react"
import BotonesSesion from "./BotonesSesion"

export default function Escritorio() {

    return (
        <EscritorioBlog>
            <BotonesSesion />
            <ArticulosPublicados />
        </EscritorioBlog>
    )
}

const EscritorioBlog = styled.section`
margin-top:100px;

 `