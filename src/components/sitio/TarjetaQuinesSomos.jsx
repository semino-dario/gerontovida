import { Button } from "react-bootstrap"
import styled from "styled-components"

export default function TarjetaQuienesSomos({ nombre, cargo, imagen, descripcion, importante }) {

    return (

        <ContainerColumna>
            <div className='encabezado'>
                <div className='container-contenido'>
                    <h3>{nombre}</h3>
                    <p>{cargo}</p>
                </div>
                <div className='container-imagen'>
                    <img alt="Retrato del integrante del equipo" src={imagen} />
                </div>
            </div>
            <hr />
            <div className='px-3 texto'>
                <p>{descripcion}</p>
            </div>
            {importante &&
                <div className='my-3 text-center'>
                    <a href='/pdf/nominacion.pdf' target="_blank">
                        <Button variant="outline-success">Ver Designación </Button> </a>
                </div>}
            <hr />
            {importante &&
                <div className='p-3'>
                    <p> <small>
                        IMPORTANTE: El Dr. Semino no realiza trámites ni gestiones a título personal o profesional, ni autoriza a terceros a hacerlos en su nombre ante organismos como PAMI o ANSES. Todas las actuaciones en las que interviene se llevan a cabo a través de la Defensoría del Pueblo de la Ciudad de Buenos Aires.</small>
                    </p>
                </div>}
        </ContainerColumna>
    )
}

const ContainerColumna = styled.div`
display:flex;
flex-direction:column;
color:grey;
padding-top: 20px;
padding-bottom:5px;
border: solid 1px black;
border-radius: 10px;
width: 50%;

.encabezado{
display:flex;
justify-content:center;
align-items:center;
font-size:20px;
text-align:center;
}

h3{
 color:#008900;
}
img{
  margin-top: 1rem;
  object-fit:cover;
  width: 130px;
  height: 130px;
  border-radius:100%;
  border: solid 1px #008900;
  margin-right:0.5rem;
  margin-left:0.5rem;
}

.container-imagen{

}

.texto{
    text-align: left;
}

h5{
  color:#008900;
}

.container-contenido{
  margin-top:30px;
}

.fotos{
  padding:8% 2%;
 
}
@media(max-width: 1100px){
    width:100%;
}

`