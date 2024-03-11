import { ContenedorGeneral } from "../Contenedor";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function PortadaVideo({ video }) {

    return (
        <SeccionCartel>
            <ContenedorGeneral>

                <div>
                    <Link to="/video-congreso-2023"> <img className="imagen" src={video} alt="" /> </Link>

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