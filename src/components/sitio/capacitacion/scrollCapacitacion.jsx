import TarjetaCapacitacion from './tarjetaCapacitacion'
import tiempoLibre from '../../../imagenes/capacitacion/tiempo-libre.svg'
import persona from '../../../imagenes/capacitacion/persona.jpg'
import comunicacion from '../../../imagenes/capacitacion/comunicacion.png'
import styled from "styled-components";
import '../fonts.css'


export default function ScrollCapacitacion() {

    const contenidoTarjetas = [{ titulo: "LA IMPORTANCIA DEL TIEMPO LIBRE Y LA ESTIMULACION COGNITIVA EN EL TRABAJO CON PERSONAS MAYORES", docente: "LIC. DANIELA BILLONE", acredita: "ACREDITA 20 HS ANUALES OBLIGATORIAS PARA ASISTENTES GERONTOLOGICOS CABA", dirigido: "DIRIGIDO A: ASIST. GERONTOLóGICOS FAMILIARES QUE CUIDAN PUBLICO EN GENERAL", imagen: tiempoLibre, archivo: "tiempoLibre.pdf" },
    {
        titulo: "ANTENCIÓN INTEGRAL CENTRADA EN LA PERSONA EN SERVICIOS GERONTOLÓGICOS", docente: "LIC. ALE REYNES", acredita: "ACREDITA 8 HS ANUALES OBLIGATORIAS PARA ASISTENTES GERONTOLOGICOS CABA", dirigido: "DIRIGIDO A: ASIST. GERONTOLóGICOS FAMILIARES QUE CUIDAN PUBLICO EN GENERAL", imagen: persona, archivo: "persona.pdf"
    },
    {
        titulo: "LOS ASISTENTES GERONTOLÓGICOS COMO FACILITADORES DE LA COMUNICACIO", docente: "DR. JUAN JACUBOWICZ", acredita: "ACREDITA 20 HS ANUALES OBLIGATORIAS PARA ASISTENTES GERONTOLOGICOS CABA", dirigido: "Curso destinado a quienes conviven o trabajan con adultos mayores", imagen: comunicacion, archivo: "comunicacion.pdf"
    }
    ]


    return (
        <SeccionCapacitaciones id="capacitacion" >
            <hr />
            <br /> <br />
            <h3 className='titulo'>CAPACITACIONES</h3>
            <h4>Aquí todos nuestros cursos</h4>
            <br />
            <ContenedorCapacitaciones>{
                contenidoTarjetas.map((curso, index) => (
                    <div key={index}>
                        <TarjetaCapacitacion
                            titulo={curso.titulo}
                            acredita={curso.acredita}
                            dirigido={curso.dirigido}
                            docente={curso.docente}
                            imagen={curso.imagen}
                            archivo={curso.archivo}
                        />
                    </div>))}</ContenedorCapacitaciones>

            <br /> <br />
        </SeccionCapacitaciones>
    )
}

const SeccionCapacitaciones = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
`

const ContenedorCapacitaciones = styled.div`
margin-top: 1rem;
display:grid;
grid-template-columns: 33% 33% 33%;
gap: 1rem;


@media(max-width:1000px ){
    grid-template-columns: 50% 50%;
}

@media(max-width: 768px) {
grid-template-columns:100%;
}

`