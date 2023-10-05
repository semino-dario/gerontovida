import { useState } from "react";
import styled from "styled-components"
import { ContenedorGeneral } from '../Contenedor';
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Sesion() {

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [Error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate();


    const showError = (err) => {
        setError(true)
        setErrorMessage(err)
        setTimeout(() => { setError(false) }, 1500)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://lazy-duck-outfit.cyclic.cloud/api/v1/login', { email, password });
            const { token } = response.data

            localStorage.setItem('token', token)
            navigate('/escritorio/' + token)
        }

        catch (error) {
            showError(error.response.data.message)
            return
        }
    }

    return (
        <>
            <ComponenteUsuario>
                <ContenedorGeneral className="contenedor-general">
                    <form className="formulario"
                        onSubmit={handleSubmit}
                    > <div className="inputDiv">
                            <input value={email}
                                onChange={e => setEmail(e.target.value)}
                                type="text" />
                            <h5>email</h5>
                            <input
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password" />
                            <h5>contraseña</h5>
                            <button>enviar</button>
                        </div>
                    </form>
                    {Error && <div className="py-3">
                        <p>{errorMessage}</p>
                    </div>}
                </ContenedorGeneral>
            </ComponenteUsuario>

        </>
    )
}

const ComponenteUsuario = styled.div`
margin-top: 15%;

.contenedor-general{
    padding: 5%;
    width: 300px;
    border-color: #008900;
}

.inputDiv{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}

input{
    border-radius:10px;
    border:solid 1px #008900;
}

button{
    margin-top:20px;
    border-radius:10px;
    background-color: #008900;
    color: white;
    width: 70%;  
}

`


