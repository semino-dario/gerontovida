import React from 'react';
import Canasta from "./canasta/Canasta"
import QuienesSomos from "./QuienesSomos"
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Footer from './Footer';
import styled from 'styled-components';
import InfoSemino from './InfoSemino';
import { Noticias } from './noticias/Noticias';
//import Videos from './Videos';
import Teatro from './Teatro';
import PortadaHome from './PortadaHome';
import PortadaVideo from './PortadaVideo';
import NotaSemino from './noticias/NotaSemino';
import ScrollConsultorio from './ScrollConsultorio';
import ScrollCapacitacion from './capacitacion/scrollCapacitacion';
import encuentro from "../../imagenes/encuentros.jpg"
import VideoNoticias from './VideoNoticias';


export default function Home() {

    ////Scrolea a la sección correspondiente cuando se clickea en la nav dedse otra ruta /////  
    const id = useParams()
    const [mostrarPantalla, setMostrarPantalla] = useState(true)

    const scrollToSection = (x) => {
        const sectionId = Object.values(x)
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView()
        }
    };

    useEffect(() => {
        scrollToSection(id);
        const time = setTimeout(() => { setMostrarPantalla(false) }, 700)
        return () => clearTimeout(time)
    }, [id]);
    ///////////////////////////////////////////////////////////

    return (
        <>
            <ContainerHome style={{ opacity: mostrarPantalla ? '0' : '1' }}>
                <PortadaHome />
                <PortadaVideo
                    video={encuentro}
                />
                <br />
                <h3>Noticias</h3>
                <Noticias />
                <VideoNoticias />
                <NotaSemino />
                <ScrollConsultorio />
                <ScrollCapacitacion />
                <Canasta />
                <Teatro />
                <QuienesSomos />
                <InfoSemino />
            </ContainerHome>
            <Footer />
        </>
    )
}


const ContainerHome = styled.div`
transition: opacity 0.4s;
margin: 0 auto;

@media (min-width: 768px) {
    width:80%;

}


`

