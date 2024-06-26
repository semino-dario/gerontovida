import styled from "styled-components";
import { ContenedorGeneral } from "./Contenedor";
import error from '../svg/error.svg'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function NotFound() {

    return (

        <ContenedorNotFound >
            <ContenedorGeneral className="contenedor-general">
                <br />
                <h3>Lo sentimos</h3>
                <hr />
                <p>El recurso al que intentaste acceeder no existe</p>
                <div>
                    <img src={error} alt="" />
                </div>
                <div>
                    <Link to="/home">
                        <Button variant="dark"

                        >Inicio</Button></Link>
                </div>
                <br />
            </ContenedorGeneral>

        </ContenedorNotFound>

    );
}

const ContenedorNotFound = styled.div`
height: 100vh;
display: flex;
flex-direction:column;
justify-content: center;
aling-items:center;

.contenedor-general{
    width: 350px;
    border-color:#008900;
   
}


`