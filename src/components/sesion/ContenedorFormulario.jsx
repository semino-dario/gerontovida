import styled from 'styled-components'
import { ContenedorGeneral } from '../Contenedor';

export default function ContenedorFormulario(props) {

    const { formulario } = props

    return (
        <ComponentePassword>
            <ContenedorGeneral className="contenedor-general" >
                <div className="inputDiv">
                    {formulario}
                </div>
            </ContenedorGeneral>
        </ComponentePassword>
    );
}

const ComponentePassword = styled.div`

margin-top: 150px;

.contenedor-general{
padding: 3%;
width: 300px;
border-color: #008900;
}

input{
margin-top:10px;
margin-bottom: 10px;
border-radius:10px;
border:solid 1px #008900;
}

button{
margin-top:20px;
border-radius:10px;
background-color: #008900;
color: white;
width: 70%;  
}

button:hover{
    background-color:red;
}

.inputDiv{
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
}

.contenedorPreloder{
height: 200px;
}

img{
height: 200px;
width: 200px;

}

.divPassword{
    display: flex;
    height: 50px; 
}


.inputPassword{
    margin-left:30px;
}

.imgPassword{
    margin-top: 9px;
    height: 25px;
    width: 35px;
    cursor:pointer;
}
`



