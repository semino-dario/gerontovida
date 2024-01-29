import { Link } from "react-router-dom";
import ImagenPortada from '../../svg/portada3.svg';
import styled from 'styled-components';


export default function Portada() {
    return (
        <Titulo >
            <Link to="/home"><img className="imagen" src={ImagenPortada} alt="Gerontovida" /></Link>
        </Titulo>
    )
}

const Titulo = styled.div`
border-bottom: solid 2px #0749E0;

 .imagen{
    width:350px;
    margin-top:6%;
}
 @media (min-width: 650px) {
margin-top:1%;

.imagen{
    width:550px;
    margin-top:0;
}

}`