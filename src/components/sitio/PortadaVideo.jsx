import { ContenedorGeneral } from "../Contenedor";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function PortadaVideo({ video }) {

    return (
        <SeccionCartel>

            <div>
                <Link to="/video-congreso-2023"> <img className="imagen" src={video} alt="" /> </Link>
            </div>
            <br />
            <h3>Video del primer conversatorio del año</h3>
            <br />
        </SeccionCartel>
    )
}

const SeccionCartel = styled.div`
img{
   width:100%;
   height:100%;
   object-fit:cover;
   border-radius: 10px 10px 0px 0px;
   border-bottom: solid 1px black; 
}
h3{
    color:#006E00;
}

`