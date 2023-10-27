import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components'

export default function BotonesSesion() {
    const Navigate = useNavigate()
    const token = localStorage.getItem('token')
    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }

    const handleLogout = async () => {
        try {
            await axios.get(`${process.env.REACT_APP_API_URL}logout`, { headers })
            localStorage.removeItem('token');
            Navigate('/sesion/')

        }
        catch (error) {
            console.log(`ERROR DE AXIOS: ${error}`)
        }
    }

    return (
        <ContenedorBotones className="sesion">

            {/* <Link to={`/publicar/${token}`}><button className='boton publicar'>publicar</button></Link> */}

            <div className="botones-sesion">
                <Link to={`/usuario-info/${token}`}> <button className="boton">usuario</button></Link>

                <button className="boton salir" onClick={handleLogout}>salir</button>

            </div>
        </ContenedorBotones>



    )
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
.boton:hover{
    background-color:red;
}

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

    .salir{
        padding: 0.2% 1%;
    }
`

