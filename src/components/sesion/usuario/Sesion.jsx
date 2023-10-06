import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ContenedorFormulario from "../ContenedorFormulario";
import Preloder from "../../Preloder";
import InputPassword from "../InputPassword";

export default function Sesion() {

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [Error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [preloder, setPreloder] = useState(false)
    const navigate = useNavigate();

    const showError = (err) => {
        setError(true)
        setErrorMessage(err)
        setTimeout(() => { setError(false) }, 1500)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPreloder(true)
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}login`, { email, password });
            const { token } = response.data
            setPreloder(false)
            localStorage.setItem('token', token)
            navigate('/escritorio/' + token)
        }

        catch (error) {
            setPreloder(false)
            showError(error.response.data.errMessage)
            return
        }
    }

    return (
        <>
            <ContenedorFormulario
                formulario={
                    <form className="formulario"
                        onSubmit={handleSubmit}
                    > <h5>Iniciar sesión</h5> <hr />
                        <div className="inputDiv">
                            <input value={email}
                                onChange={e => setEmail(e.target.value)}
                                type="text"
                                placeholder=" e-mail" />
                            <InputPassword
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button>enviar</button>
                        </div>
                        <br /> <br />
                        {Error && <div className="py-3">
                            <p>{errorMessage}</p>
                        </div>}
                        {
                            !preloder ?
                                <></>
                                :
                                <Preloder />
                        }
                    </form>
                }
            />
            <div><Link to="/reset-password" style={{ textDecoration: 'none' }}> ¿Olvidó su contraseña?</Link>
                <br />
                <Link to="/registro-usuario" style={{ textDecoration: 'none' }}>Registrarse</Link>
            </div>
        </>

    )
}

