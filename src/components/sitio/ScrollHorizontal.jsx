import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import flechaDerecha from '../../svg/flecha-derecha.svg';

export const ScrollHorizontal = (props) => {

    const { contenido } = props;

    const containerRef = useRef(0);

    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);
    const ContainerClass = containerRef.current;

    const showButtons = () => {
        setShowLeftButton(ContainerClass.scrollLeft > 0);
        setShowRightButton(ContainerClass.scrollLeft + ContainerClass.clientWidth < ContainerClass.scrollWidth);
    };

    const scrollLeftHandler = () => {
        containerRef.current.scrollBy({
            left: -1,
            behavior: 'smooth',
        });
    };

    const scrollRightHandler = () => {
        containerRef.current.scrollBy({
            left: 1,
            behavior: 'smooth',
        });
    };

    return (
        <>

            <ContenedorNoticia>
                <Container className="ContainerClass" ref={containerRef} onScroll={() => { showButtons() }}>
                    {contenido}
                </Container>

                <ContenedorBotones>
                    <LeftButton style={{ opacity: !showLeftButton ? '0' : '1', transform: 'rotateZ(180deg)', marginBottom: '-18px' }} onClick={scrollLeftHandler}> <img src={flechaDerecha} alt="" />
                    </LeftButton>
                    <RightButton style={{ opacity: showRightButton ? '1' : '0' }} onClick={scrollRightHandler}><img src={flechaDerecha} alt="" /></RightButton>
                </ContenedorBotones>
            </ContenedorNoticia >
        </>
    );
};

export const ContenedorNoticia = styled.div`
padding-left: 5%;
padding-right: 5%;
`

const Container = styled.div`
  display: flex;
  overflow-x: auto;
  gap:30px;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  ::-webkit-scrollbar {
    width: 0.5em;
    background-color: transparent;
  }
`;

const ContenedorBotones = styled.div`
display:flex;
justify-content: space-between;
margin-top:-3%;

@media (max-width: 768px) {
    margin-top:-10%;
}
`
const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 3rem;
`;

const LeftButton = styled(Button)`
  left: 10px;
  color:white;
  z-index:10;
  color: #0749E0;
`;

const RightButton = styled(Button)`
  right: 10px;
  color:white;
  z-index:10;
  color: #0749E0;
`;

export const ContenedorObra = styled.div`
width:27rem;
height:30rem;
scroll-snap-align: start; 
margin-bottom:30px;

img{
height:100%;
border-radius:10px;
}
`