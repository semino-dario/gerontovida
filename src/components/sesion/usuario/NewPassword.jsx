import axios from "axios"
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import ContenedorFormulario from "../ContenedorFormulario";
import Preloder from "../../Preloder";
import { API } from "../../Globals"
import InputPassword from "../InputPassword";

export default function NewPassword() {

    const token = useParams('token')
    const [newPassword, setNewPassword] = useState('')
    const [newPassword2, setNewPassword2] = useState('')
    const formData = new FormData()
    const [success, setSuccess] = useState(false)
    const [preloder, setPreloder] = useState(false)
    const [response, setResponse] = useState(false)
    const [responseMessage, setResponseMessage] = useState('')

    const showResponse = (res) => {
        setResponse(true)
        setResponseMessage(res)
        setTimeout(() => { setResponse(false) }, 1500)
    }

    const handleSubmit = async () => {
        setPreloder(true)

        try {
            formData.append('password', newPassword)
            const response = await axios.put(`${API}password/reset/${token.token}`, formData)
            //console.log(response.data)
            setSuccess(true)

        }

        catch (error) {
            // console.log(`ERROR DE NUEVA CONTRSEÑA ${error}`)

            showResponse(error.response.data.errMessage.split(': ')[2])
            setPreloder(false)
        }
    }

    const matchPassword = (e) => {
        e.preventDefault()
        if (newPassword === newPassword2) {
            handleSubmit()
        }

        else {
            showResponse('Las contraseñas ingresadas no coinciden')

        }
    }

    return (
        <>
            {success ?
                <ContenedorFormulario
                    formulario={
                        <form
                            onSubmit={e => matchPassword(e)}
                        > <div >
                                <InputPassword
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                                <p>Ingrese nueva contraseña</p>
                                <InputPassword
                                    value={newPassword2}
                                    onChange={(e) => setNewPassword2(e.target.value)
                                    }
                                />
                                <p>Vuelva a ingresar la contraseña</p>

                                <button > confirmar </button>
                                <br />
                            </div>
                            <br /> <br />
                            {response &&
                                <div>
                                    <p>{responseMessage}</p>
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
                :
                <ContenedorFormulario
                    formulario={
                        <div className="mensaje">
                            <h3>Contraseña actualizada con éxito</h3> <hr />
                            <Link to="/sesion"> <button>Ingresar</button></Link>
                        </div>}
                />
            }
        </>
    )
}




