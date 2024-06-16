import { ScrollHorizontal } from "./ScrollHorizontal";
import TarjetaConsultorio from './TarjetaConsultorio'
import consultorioDaniela from '../../imagenes/consultorio/daniela.jpg'
import pereyra from '../../imagenes/consultorio/pereyra.jpg'
import jacu from '../../imagenes/consultorio/jacu.jpg'
import claudia from '../../imagenes/consultorio/claudia.jpg'
import paula from '../../imagenes/consultorio/paula.jpg'
import julia from '../../imagenes/consultorio/julia.jpg'
import carla from '../../imagenes/consultorio/carla.jpg'
import romina from '../../imagenes/consultorio/romina.jpg'
import silvia from '../../imagenes/consultorio/silvia.jpg'
import ale from '../../imagenes/consultorio/ale.jpg'
import './fonts.css'


export default function ScrollConsultorio() {

    const contenidoTarjetas = [
        { titulo: "CONSULTORÍA GERONTOLÓGICA", temas: ["Escucha", "Evaluación de la condición psicológica, desempeño y necesidades cotidianas", "Análisis de los tratamientos y del hábitat"], docentes: [{ info: "Lic. Silvia Perelis", imagen: silvia }], archivo: "gerontologia.pdf" },

        { titulo: "CONSULTORÍA GERIATRICA A DOMICILIO", temas: ["Evaluación integral", "Análisis de antecedentes y de la medicación", "Integración de los tratamientos", "Seguimiento"], docentes: [{ info: "Dr. Roberto Pereyra", imagen: pereyra }], archivo: "geriatria.pdf" },

        { titulo: "ATENCION ODONTOLOGICA PARA PERSONAS MAYORES a Domicilio", temas: ["URGENCIAS", "ASESORAMIENTO", "TRATAMIENTOS", "SEGUIMIENTO"], docentes: [{ info: "Dra. Carla María Schiró", imagen: carla }, { info: "Dra. Julia Encabo Farré", imagen: julia }], archivo: "odontologia.pdf" },

        { titulo: "EVALUACION NEUROCOGNITIVA Y MULTIESTIMULACION", temas: ["Evaluación Neurocognitiva", " Estimulación y rehabilitación cognitiva"], docentes: [{ info: "Lic. Claudia Molina", imagen: claudia }, { info: "Lic. Paula Brovia", imagen: paula }], archivo: "multiestimulacion.pdf" },

        { titulo: "ATENCION PSICOLOGICA MEDIANA EDAD Y PERSONAS MAYORES", temas: ["Ansiedad", "Depresión", "Duelos", "Cuidados Paliativos"], docentes: [{ info: "Lic. Daniela Billone", imagen: consultorioDaniela }], archivo: "atencion.pdf" },

        { titulo: "MEDIACION Y RESOLUCION DE CONFLICTOS EN PROBLEMATICAS GERONTOLOGICAS", temas: ["Toma de decisiones compartidas", "Decisiones anticipadas", "Mediación y Resolución de conflictos"], docentes: [{ info: "Dr. Juan Jacubowicz", imagen: jacu }], archivo: "mediacion.pdf" },

        { titulo: "SERVICIO DE NUTRICIÓN PARA PERSONAS MAYORES", temas: ["Evaluación del estado nutricional", "Prevención de deficiencias", "Adecuación de la alimentación"], docentes: [{ info: "Lic. Romina Sánchez", imagen: romina }], archivo: "nutricion.pdf" },

        { titulo: "ORIENTACION OCUPACIONAL", temas: ["Re-Orientación Vocacional", "Acompañamiento en Proyectos para Emprendedores", "Transición del Empleo a la Jubilación"], docentes: [{ info: "Lic. Ale Reynes", imagen: ale }], archivo: "orientacion-vocacional.pdf" }
    ]

    return (
        <div id="consultorio" >
            <hr />
            <br /> <br />
            <h3 className="titulo">CONSULTORIO GERONTOLÓGICO</h3>
            <h4>Aquí todos nuestros servicios</h4>
            <br />
            <ScrollHorizontal
                contenido={
                    contenidoTarjetas.map((serv, index) => (
                        <div key={index}>
                            <TarjetaConsultorio
                                titulo={serv.titulo}
                                temas={serv.temas}
                                docentes={serv.docentes}
                                imagen={serv.imagen}
                                archivo={serv.archivo}
                            />
                        </div>))
                }
            />
            <hr /> <br />
        </div>
    )


}