import { useState } from "react"
import { ContenedorGeneral } from "../Contenedor"
import styled from "styled-components"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { articuloEditado, mostrarArticulo } from "../../state/actions"

export default function Publicar() {
    let articuloEditar = useSelector((state) => state.articulo)
    const [title, setTitle] = useState(articuloEditar.title)
    const [author, setAuthor] = useState(articuloEditar.author)
    const [content, setContent] = useState(articuloEditar.content)
    const [image, setImage] = useState(articuloEditar.image)
    const [Error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const token = localStorage.getItem('token')
    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const showError = (err) => {
        setError(true)
        setErrorMessage(err)
        setTimeout(() => { setError(false) }, 1500)
    }

    const uploadImage = async (e) => {

        try {
            const selectedFile = e.target.files[0]
            const formData = new FormData()
            formData.append('File', selectedFile)

            await axios.post(`https://lazy-duck-outfit.cyclic.cloud/api/v1/articulo/image`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            })
        }

        catch (error) {
            console.log(`ERROR DE CARGA DE IMAGEN:${error}`)
        }
    };

    const cancelar = () => {
        setTitle('')
        setAuthor('')
        setContent('')
        setImage('')
        articuloEditar = []
        dispatch(mostrarArticulo());
        dispatch(articuloEditado(articuloEditar));
        navigate('/escritorio/' + token)

    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        try {

            const formData = new FormData();
            formData.append('title', title);
            formData.append('author', author);
            formData.append('content', content);
            formData.append('image', image);


            if (!Array.isArray(articuloEditar)) //////MODIFICAR ARTÍCULO
            {

                await axios.put(`https://lazy-duck-outfit.cyclic.cloud/api/v1/articulo/${articuloEditar._id}`, formData, { headers })

            }

            else //////PUBLICAR ARTÍCULO
            {
                await axios.post('https://lazy-duck-outfit.cyclic.cloud/api/v1/articulo/nuevo', formData, { headers })
            }
            cancelar()

        }

        catch (error) {
            showError(error.response.data.message)
            console.log(`ERROR DE AXIOS: ${error}`)
        }
    }

    return (
        <PublicaciarArticulo>
            <form onSubmit={handleSubmit}>
                <ContenedorGeneral className="contenedorGeneral">
                    <div className="publicarArticulos">
                        <h5>Título:</h5>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        /> <br />
                        <h5>Autor:</h5>
                        <input
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        /> <br />
                        <h5>Imagen:</h5>
                        {/* <input
                            type='file'
                            accept="image/*"
                            onChange={uploadImage}
                        /> <br /> */}
                        <h5>Contenido:</h5>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    {Error && <div className="py-3">
                        <p>{errorMessage}</p>
                    </div>}
                    <div className="contenedor-botones">
                        <button
                            type='submit'
                        > {!Array.isArray(articuloEditar) ? 'Modificar' : 'Publicar'}
                        </button>
                        <button className="cancelar"
                            onClick={cancelar}
                            type="button"
                        >Cancelar</button></div>
                </ContenedorGeneral>
            </form>
            <input
                type='file'
                accept="image/*"
                onChange={(e) => uploadImage(e)}
            />
            <button onClick={uploadImage}>subir imagen</button>

        </PublicaciarArticulo>

    )
}


const PublicaciarArticulo = styled.div`
.contenedorGeneral{
    margin-top: 5%;
    justify-content:center;
    align-items:center;
    padding: 2% 5%;
    width: 60%;

}

.publicarArticulos{
    display: flex;
    flex-direction: column;
    justify-content:center;
    text-align:center;
    width: 80%;
}

button{
    margin-top:20px;
    border-radius:10px;
    background-color: #008900;
    color: white;
    padding: 0.3% 3%;
}
.contenedor-botones{
display: flex;
gap: 30px;
}

button:hover{
    background-color: red;
}

`
