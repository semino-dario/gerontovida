import styled from 'styled-components';

export function Contenedor() {

    return (
        <ContenedorGeneral>
        </ContenedorGeneral>
    );

}

export const ContenedorGeneral = styled.div`
margin: 10% auto;
display:flex;
flex-direction:column;
border: solid 1px;
border-radius: 10px;
box-shadow: inset 0 -3em 3em rgba(0,0,0,0.1),
0 0  0 0px rgb(255,255,255),
0.3em 0.3em 1em rgba(0,0,0,0.3);
width: 95%;
position:relative;


@media (min-width: 768px) {
    margin: 5% auto;
    width: 80%;

}

@media (min-width: 1024px) {
    margin: 2% auto;
    width: 90%;
}
`