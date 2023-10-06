import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Preloder from '../../Preloder'
import ContenedorFormulario from '../ContenedorFormulario'
import InputPassword from '../InputPassword'
import BotonSesion from '../BotonSesion'

export default function RegistroUsuario() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [preloder, setPreloder] = useState(false)
    const role = 'usuario'
    const navigate = useNavigate()

    const showError = (err) => {
        setError(true)
        setErrorMessage(err)
        setTimeout(() => { setError(false) }, 2000)
    }

    const registrarUsuario = async (e) => {
        e.preventDefault()
        setPreloder(true)
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}register`, { name, email, password, role })

            const { token } = response.data

            showError('Registrado con éxito.')

            localStorage.setItem('token', token)

            setTimeout(() => { navigate('/escritorio/' + token) }, 1000)
        }
        catch (error) {
            setPreloder(false)
            const customError = error.response.data.error
            console.log(`ERROR EN REGSTRO DE USUARIO ${customError.message} //// ${customError.originalError}`)

            const error11000 = customError.originalError.split(' ')[0]

            if (error11000 === 'E11000') {
                showError("La dirección de mail ya se encuentra registrada")
            }

            else {
                showError(customError.originalError.split('failed: ')[1])

            }
        }
    }

    return (
        <div>
            <ContenedorFormulario
                formulario={
                    <>
                        <form
                        >
                            <h5>Registrarse</h5> <hr />
                            <div >
                                <input type="text"
                                    required={true}
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    placeholder=' nombre'
                                />
                            </div>
                            <div >
                                <input
                                    type="email"
                                    required={true}
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder=' e-mail'

                                />
                            </div>
                            <InputPassword
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button onClick={registrarUsuario} >Enviar</button>
                            <br /> <br />
                            {!preloder ?
                                <></>
                                :
                                <Preloder />}
                            {error && <div className="">
                                <p>{errorMessage}</p>
                            </div>}
                        </form>
                    </>
                }
            />
            <Link to='/sesion'>
                <BotonSesion
                    texto={'volver'}
                /></Link>
        </div>
    )
}