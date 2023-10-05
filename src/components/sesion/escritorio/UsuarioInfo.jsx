import styled from "styled-components";
import { API } from "../../Globals"
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ContenedorFormulario from "../ContenedorFormulario";
import BotonSesion from "../BotonSesion";
import Preloder from "../../Preloder";

export default function UsuarioInfo() {
    const token = useParams('token')
    const headers = {
        Authorization: `Bearer ${token.token}`,
        'Content-Type': 'application/json'
    }
    const [usuario, setUsuario] = useState('')
    const [preloder, setPreloder] = useState(false)


    const obtenerUsuario = async () => {

        try {

            const resp = await axios.get(`${API}me`, { headers })
            setUsuario(resp.data.data)
            setPreloder(true)
        }

        catch (error) {

            const customError = error.response.data.error
            console.log(`ERROR EN OBTENER USUARIO ${customError.message} //// ${customError.originalError}`)

        }
    }

    useEffect(() => {
        obtenerUsuario()
    })

    return (<>
        {!preloder ?
            <Preloder />
            :
            <div>

                <ContenedorFormulario
                    formulario={
                        <Usuario >
                            <h5>Información del usuario:</h5>
                            <hr />
                            <p>Nombre:</p>
                            <p>{usuario.name}</p>
                            <hr />
                            <p>Email:</p>
                            <p>{usuario.email}</p>
                            <hr />
                            <p>Rol:</p>
                            <p>{usuario.role}</p>
                        </Usuario>}
                />
                <Link to={`/escritorio/${token.token}`}> <BotonSesion
                    texto={'volver'}
                /></Link>
            </div>}</>
    );
}

const Usuario = styled.div`


`


