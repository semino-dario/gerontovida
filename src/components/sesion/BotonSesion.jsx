import styled from "styled-components"

export default function BotonSesion(props) {

    const { texto } = props

    return (
        <Boton>
            {texto}
        </Boton>
    )
}


const Boton = styled.button`

    border-radius:10px;
    background-color: #008900;
    color: white;
    padding: 0.3% 1%;
    width: 100px;

&:hover{
background-color:red;
}

`


