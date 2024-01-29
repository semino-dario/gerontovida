import { ContenedorGeneral } from '../../Contenedor';
import imprevistos from '../../../imagenes/imprevistos.jpg'
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NotaSemino() {


    return (
        <ColumnaSemino>
            <Link className='link' to="/notas-semino" >
                <ContenedorGeneral className='contenedor-semino'>

                    <div className="semino-texto">
                        <div >
                            <h3>Cuarenta años de imprevistos</h3>
                            <br />
                            <h5>La historia del sistema previsional argentino en democracia</h5>
                        </div>
                        <div>
                            <h5> Dr. Eugenio Semino </h5>
                            <br />
                        </div>
                    </div>
                    <div className="contenedor-imagen">
                        <Image src={imprevistos} alt="Dr. Eugenio Semino" />
                    </div>
                </ContenedorGeneral> </Link>
        </ColumnaSemino>
    )
}

const ColumnaSemino = styled.div`
.contenedor-semino{
    flex-direction: row;
    justify-content:space-between;
    height: 13.1em;
    background-color: #605555;
    border-color:#FFAA00;
    color:white;
}

.contenedor-imagen{
    overflow: hidden;
    display:none;
    border-radius: 0px 10px 10px 0px;
}



img{
    object-fit:cover:
    width:100%;
    height: 100%;
}

.semino-texto{
    margin-left:2em;
    padding-top:2%;
    display: flex;
    max-witdh:100%;
    flex-direction: column;
    text-align:left;
    overflow: hidden;
    font-size: 0.9em;
}

.link{
    text-decoration:none;
    color:white;
    margin-top:1.2em;
}


@media (min-width: 1023px) {
.contenedor-imagen {
display:block;}
}

@media (max-width: 650px){
    .semino-texto{
        margin-left:0.8em;
    }
}

`


