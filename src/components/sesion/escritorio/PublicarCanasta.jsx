import styled from "styled-components";
import ContenedorFormulario from "../ContenedorFormulario";
import BotonSesion from "../BotonSesion";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { canastaEditada, mostrarCanasta } from "../../../state/actions";

export default function PublicarCanasta() {
    let canastaParaEditar = useSelector((state) => state.canastaParaEditar)
    const [periodo, setPeriodo] = useState(canastaParaEditar.periodo)
    const [canasta, setCanasta] = useState(canastaParaEditar.canasta)
    const [minima, setMinima] = useState(canastaParaEditar.minima)
    const [vivienda, setVivienda] = useState(!Array.isArray(canastaParaEditar) ? canastaParaEditar.categorias.vivienda : '')
    const [transporte, setTransporte] = useState(!Array.isArray(canastaParaEditar) ? canastaParaEditar.categorias.transporte : '')
    const [vestimenta, setVestimenta] = useState(!Array.isArray(canastaParaEditar) ? canastaParaEditar.categorias.vestimenta : '')
    const [recreacion, setRecreacion] = useState(!Array.isArray(canastaParaEditar) ? canastaParaEditar.categorias.recreacion : '')
    const [servicios, setServicios] = useState(!Array.isArray(canastaParaEditar) ? canastaParaEditar.categorias.servicios : '')
    const [alimentos, setAlimentos] = useState(!Array.isArray(canastaParaEditar) ? canastaParaEditar.categorias.alimentos : '')
    const [limpieza, setLimpieza] = useState(!Array.isArray(canastaParaEditar) ? canastaParaEditar.categorias.limpieza : '')
    const [medicamentos, setMedicamentos] = useState(!Array.isArray(canastaParaEditar) ? canastaParaEditar.categorias.medicamentos : '')
    const [pdf, setPdf] = useState(canastaParaEditar.pdf)

    const token = useParams('token')
    const headers = {
        Authorization: `Bearer ${token.token}`,
        'Content-Type': 'application/json'
    }
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [errorMessage, setErrorMessage] = useState('')


    const uploadPdf = async (e) => {

        try {
            const selectedFile = e.target.files[0]
            const formData = new FormData()
            formData.append('File', selectedFile)

            await axios.post(`${process.env.REACT_APP_API_URL}canastas/pdf`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            })
                .then((response) => {
                    // Handle success
                    const { message, objectKey } = response.data;
                    setPdf(objectKey)
                    console.log(`Success: ${message}`);
                    setErrorMessage("Achivo cargado con éxito")
                })

        }
        catch (error) {
            console.log(`ERROR DE CARGA DE ARCHIVO:${error} // ${JSON.stringify(error.response.data.errMessage)}`)
            setErrorMessage(`ERROR DE CARGA DE ARCHIVO: ${JSON.stringify(error.response.data.errMessage)}`);

        }
    }


    //Validate date format
    const isValidDate = (inputDate) => {
        const regex = /^(Enero|Febrero|Marzo|Abril|Mayo|Junio|Julio|Agosto|Septiembre|Octubre|Noviembre|Diciembre)-\d{4}$/;
        return regex.test(inputDate);
    };

    const cancelar = () => {
        setPeriodo('')
        setCanasta('')
        setMinima('')
        setVivienda('')
        setTransporte('')
        setVestimenta('')
        setRecreacion('')
        setServicios('')
        setAlimentos('')
        setLimpieza('')
        setMedicamentos('')
        setPdf('')
        canastaParaEditar = []
        dispatch(mostrarCanasta())
        dispatch(canastaEditada(canastaParaEditar))
        navigate('/canastas/publicadas/' + token.token)

    }


    const handleSubmit = async (e) => {

        e.preventDefault()

        if (isValidDate(periodo) === false) {
            setPeriodo('¡ERROR EN FORMATO!')
        }



        else {

            try {
                const formData = new FormData();
                formData.append('periodo', periodo);
                formData.append('canasta', canasta);
                formData.append('minima', minima);
                formData.append('categorias.vivienda', vivienda);
                formData.append('categorias.transporte', transporte);
                formData.append('categorias.vestimenta', vestimenta);
                formData.append('categorias.recreacion', recreacion);
                formData.append('categorias.servicios', servicios);
                formData.append('categorias.alimentos', alimentos);
                formData.append('categorias.limpieza', limpieza);
                formData.append('categorias.medicamentos', medicamentos);
                formData.append('pdf', pdf);


                if (!Array.isArray(canastaParaEditar)) {
                    await axios.put(`${process.env.REACT_APP_API_URL}canastas/${canastaParaEditar._id}`, formData, { headers })
                }

                else {

                    const resp = await axios.post(`${process.env.REACT_APP_API_URL}/canastas/nueva`, formData, { headers })
                    console.log(resp.data.message)
                }

                cancelar()
            }

            catch (error) {
                console.log(error)
                setErrorMessage('Hubo un error vuelva a intentarlo')
                setTimeout(() => { setErrorMessage('') }, 2000)

            }
        }

    }

    return (
        <PublicaCanasta>
            <ContenedorFormulario
                formulario={
                    <>
                        <div>
                            <h4>Publicar Canasta:</h4>
                            <hr />
                        </div>
                        <form
                            onSubmit={handleSubmit}
                        >
                            <div className="periodo-total">
                                <div className="input-div">
                                    <p>Período:</p>
                                    <input type="text"
                                        placeholder="ej. Octubre-2022"
                                        required={true}
                                        value={periodo}
                                        onChange={e => setPeriodo(e.target.value)}
                                    />
                                </div>
                                <div className="input-div">
                                    <p>Total:</p>
                                    <input type="number"
                                        placeholder="sólo números"
                                        required={true}
                                        value={canasta}
                                        onChange={e => setCanasta(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="input-div">
                                <p >Jubilación Mínima:</p>
                                <input type="number"
                                    placeholder="sólo números"
                                    required={true}
                                    value={minima}
                                    onChange={e => setMinima(e.target.value)}
                                />
                            </div>
                            <div className="categorias">
                                <div className="columna-categoria">
                                    <div className="input-div">
                                        <p >Vivienda:</p>
                                        <input type="number"
                                            placeholder="sólo números"
                                            required={true}
                                            value={vivienda}
                                            onChange={e => setVivienda(e.target.value)}
                                        />
                                    </div>
                                    <div className="input-div">
                                        <p >Transporte:</p>
                                        <input type="number"
                                            placeholder="sólo números"
                                            required={true}
                                            value={transporte}
                                            onChange={e => setTransporte(e.target.value)}
                                        />
                                    </div>
                                    <div className="input-div">
                                        <p >Vestimenta:</p>
                                        <input type="number"
                                            placeholder="sólo números"
                                            required={true}
                                            value={vestimenta}
                                            onChange={e => setVestimenta(e.target.value)}
                                        />
                                    </div>
                                    <div className="input-div">
                                        <p >Recreación:</p>
                                        <input type="number"
                                            placeholder="sólo números"
                                            required={true}
                                            value={recreacion}
                                            onChange={e => setRecreacion(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="columna-categoria">
                                    <div className="input-div">
                                        <p >Servicios:</p>
                                        <input type="number"
                                            placeholder="sólo números"
                                            required={true}
                                            value={servicios}
                                            onChange={e => setServicios(e.target.value)}
                                        />
                                    </div>
                                    <div className="input-div">
                                        <p >Alimentos:</p>
                                        <input type="number"
                                            placeholder="sólo números"
                                            required={true}
                                            value={alimentos}
                                            onChange={e => setAlimentos(e.target.value)}
                                        />
                                    </div>
                                    <div className="input-div">
                                        <p >Limpieza:</p>
                                        <input type="number"
                                            placeholder="sólo números"
                                            required={true}
                                            value={limpieza}
                                            onChange={e => setLimpieza(e.target.value)}
                                        />
                                    </div>
                                    <div className="input-div">
                                        <p >Medicamentos:</p>
                                        <input type="number"
                                            placeholder="sólo números"
                                            required={true}
                                            value={medicamentos}
                                            onChange={e => setMedicamentos(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <p>Subir PDF:</p>
                            <div className="input-div"><input type="file" accept="pdf" onChange={(e) => { uploadPdf(e) }} /></div>
                            <div className='error' > <h5> {errorMessage}</h5></div>
                            <div className="contenedor-botones">
                                <BotonSesion
                                    texto={!Array.isArray(canastaParaEditar) ? 'Modificar' : 'Publicar'}
                                />
                                <button
                                    onClick={cancelar}
                                    className="">
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </>
                }
            />
        </PublicaCanasta>

    )
}

const PublicaCanasta = styled.div`
margin-top:-60px;

.contenedor-general{
    width: 650px;
}

form{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.input-div{
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

p{
    margin-top:13px;
}

.periodo-total{
    display:flex;
    gap: 50px;
}

.categorias{
    display:flex;
    gap: 10px;
    margin-top: 20px;
    padding-top:10px;
    border-top: solid 1px black;

}

.columna-categoria{
    display:flex;
    flex-direction:column;
    align-items: flex-end;

}

.contenedor-botones{
    margin-top: 20px;
    border-top: solid 1px black;
    display: flex;
    width: 100%;
    gap: 300px;
  
}

.error{
    color:red;
    margin-left:140px;
    margin-top: 10px;
}

`

