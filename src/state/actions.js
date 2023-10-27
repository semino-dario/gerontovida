import { ARTICULO_EDITAR, CAMBIA_ICONO, CANASTA_EDITAR, MOSTRAR_ARTICULO, MOSTRAR_CANASTA, MOSTRAR_VIDEO } from "./types"
import axios from "axios"

export const almacenarArticulo = noticia => {
    return {
        type: MOSTRAR_ARTICULO,
        payload: noticia
    }
}

export const almacenarVideo = video => {
    return {
        type: MOSTRAR_VIDEO,
        payload: video
    }
}

export const almacenarCanasta = canasta => {
    return {
        type: MOSTRAR_CANASTA,
        payload: canasta
    }
}

export const mostrarArticulo = () => async dispatch => {

    try {
        const { data: rta } = await axios(`${process.env.REACT_APP_API_URL}articulos`)
        dispatch(almacenarArticulo(rta))
    }
    catch (error) {
        console.warn("ERROR DE AXIOS", error)
    }
}

export const mostrarVideo = () => async dispatch => {
    try {
        const { data: rta } = await axios('https://6443ba4390738aa7c0767ae5.mockapi.io/videos/')
        dispatch(almacenarVideo(rta))
    }

    catch (error) {
        console.warn("ERROR DE AXIOS", error)
    }
}

export const mostrarCanasta = () => async dispatch => {
    try {

        const { data: rta } = await axios(`${process.env.REACT_APP_API_URL}canastas`)
        dispatch(almacenarCanasta(rta))
    }

    catch (error) {
        console.warn('ERROR DE AXIOS', error)
    }
}

export const cambiaIcono = icono => {

    icono.current.classList.toggle("open")

    return {
        type: CAMBIA_ICONO,
        icono
    }
}

export const articuloEditado = articulo => {

    return {
        type: ARTICULO_EDITAR,
        payload: articulo
    }
}

export const canastaEditada = canastaParaEditar => {
    return {
        type: CANASTA_EDITAR,
        payload: canastaParaEditar
    }
}

