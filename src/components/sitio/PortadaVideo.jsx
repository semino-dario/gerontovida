import { ContenedorGeneral } from "../Contenedor";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function PortadaVideo({ video, texto, link }) {

    return (
        <SeccionCartel>

            <div>
                <Link to={link}> <img className="imagen" src={video} alt="" /> </Link>
            </div>
            {texto &&
                <div>
                    <br />
                    <h4>{texto}</h4>
                    <br />
                </div>}
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
h4{
    color:#006E00;
}

`