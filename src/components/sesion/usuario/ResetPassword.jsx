import axios from "axios";
import { useState } from "react";
import Preloder from "../../Preloder";
import mailImage from "../../../svg/mail.svg"
import ContenedorFormulario from "../ContenedorFormulario";
import BotonSesion from "../BotonSesion";
import { Link } from "react-router-dom";


export default function ResetPassword() {
    const [response, setResponse] = useState(false)
    const [responseMessage, setResponseMessage] = useState('')
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const [preloder, setPreloder] = useState(false)

    const showResponse = (res) => {
        setResponse(true)
        setResponseMessage(res)
        setTimeout(() => { setResponse(false) }, 1500)
    }

    const sendPassword = async (e) => {
        e.preventDefault()
        setPreloder(true)
        try {
            const resp = await axios.post(`${process.env.REACT_APP_API_URL}password/forgot`, { email })
            showResponse(resp.data.link)
            setSuccess(true)
            setPreloder(false)
        }

        catch (error) {
            console.log(error)
            setPreloder(false)
            setEmail('')
            showResponse(error.response.data.errMessage)
            return
        }

    }

    return (
        <>
            {!success ?

                <div>
                    <ContenedorFormulario
                        formulario={
                            <form
                                onSubmit={sendPassword}
                                action="">
                                <h5>Recuperar contraseña</h5> <hr />
                                <p>Ingrese dirección de mail</p>
                                <input type="text"
                                    required={true}
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <button>Enviar</button>
                                <br /> <br />
                                {response &&
                                    <div>
                                        <p>{responseMessage}</p>
                                    </div>}
                                {!preloder ?
                                    <></>
                                    :
                                    <Preloder />}
                            </form>}
                    />
                    <Link to='/sesion'>
                        <BotonSesion
                            texto={'volver'} /></Link>
                </div>
                :
                <ContenedorFormulario
                    formulario={
                        <div>
                            <h5>Mensaje enviado con éxito a: </h5>
                            <p> {email} </p>
                            <hr />
                            <p>En esta versión de prueba el mail con el link de recuperación de contraseña no es enviado a la dirección real sino al inbox de Email Testing de Mailtrap.</p>
                            <hr />
                            <p>En el caso de no contar con acceso a Mailtrap, utilizar el siguiente link:</p>
                            <a href={responseMessage}>Generar nueva contraseña</a>
                            <hr />
                            <img src={mailImage} alt="" />
                        </div>}
                />
            }
        </>
    );
}

