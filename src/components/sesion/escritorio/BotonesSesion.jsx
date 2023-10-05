import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components'
import { API } from "../../Globals"

export default function BotonesSesion() {
    const Navigate = useNavigate()
    const token = localStorage.getItem('token')
    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }

    const handleLogout = async () => {
        try {
            await axios.get(`${API}logout`, { headers })
            localStorage.removeItem('token');
            Navigate('/sesion/')

        }
        catch (error) {
            console.log(`ERROR DE AXIOS: ${error}`)
        }
    }

    return (
        <ContenedorBotones className="sesion">
            <Link to={`/publicar/${token}`}> <button className="boton publicar"
            >Publicar</button></Link>
            <div className="botones-sesion">
<<<<<<< HEAD:src/components/sesion/escritorio/BotonesSesion.jsx
                <Link to={`/usuario-info/${token}`}>  <button className="boton"
                >Usuario</button></Link>
=======
                <button className="boton"
                >Usuario</button>
>>>>>>> d8c61f3eb1a455fe125cbb6e3fbbb1de544fe126:src/components/sesion/BotonesSesion.jsx
                <button className="boton"
                    onClick={handleLogout}
                >Salir</button>
            </div>
        </ContenedorBotones>)
}

const ContenedorBotones = styled.div`

margin-top: 75px;
display: flex;
justify-content:space-around;

    .boton{
        border-radius:10px;
        background-color: #008900;
        color: white;
        padding: 0.3% 1%;
        width: 100px;
        }
<<<<<<< HEAD:src/components/sesion/escritorio/BotonesSesion.jsx

.boton:hover{
background-color:red;
}

=======
>>>>>>> d8c61f3eb1a455fe125cbb6e3fbbb1de544fe126:src/components/sesion/BotonesSesion.jsx
.botones-sesion{
    display:flex;
    gap: 10px;
}
    .publicar{
        background-color: red;  
    }

    .publicar:hover{
        background-color: #008900;
    }
`

