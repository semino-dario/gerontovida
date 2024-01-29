import { ContenedorGeneral } from "../Contenedor";
import encuentro from "../../imagenes/encuentro.jpg"
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function EncuentroGerontovida() {

    return (
        <SeccionCartel>
            <ContenedorGeneral>

                <div>
                    <Link to="/video-congreso-2023"> <img className="imagen" src={encuentro} alt="" /> </Link>

                </div>
            </ContenedorGeneral>
        </SeccionCartel>
    )
}

const SeccionCartel = styled.div`
img{
   width:100%;
   height:100%;
   object-fit:cover;
   border-radius: 10px;
}

`