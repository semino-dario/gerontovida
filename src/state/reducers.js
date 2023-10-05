import { ARTICULO_EDITAR, CAMBIA_ICONO, MOSTRAR_ARTICULO, MOSTRAR_VIDEO } from "./types";

const initalState = {
    noticia: [],
    video: [],
    articulo: []
}


export const apiReducer = (state = initalState, action) => {
    switch (action.type) {

        case MOSTRAR_ARTICULO:
            return { ...state, noticia: action.payload }

        case CAMBIA_ICONO:
            return { ...state, icono: action.icono }

        case MOSTRAR_VIDEO:
            return { ...state, video: action.payload }

        case ARTICULO_EDITAR:
            return { ...state, articulo: action.payload }

        default:
            return state
    }
}