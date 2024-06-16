import { ContenedorGeneral } from '../../Contenedor';
import imprevistos from '../../../imagenes/imprevistos.jpg'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function NotaSemino() {


    return (
        <ColumnaSemino>
            <Link className='link' to="/notas-semino" >
                <ContenedorGeneral className='contenedor-semino'>
                    <div className="contenedor-imagen">
                        <img src={imprevistos} alt="Dr. Eugenio Semino" />
                    </div>
                    <div className="semino-texto">
                        <div  >
                            <h3>Cuarenta años de imprevistos</h3>
                            <br />
                            <h5>La historia del sistema previsional argentino en democracia</h5>
                        </div>
                        <div>
                            <h5> Dr. Eugenio Semino </h5>
                            <br />
                        </div>
                    </div>

                </ContenedorGeneral> </Link>
        </ColumnaSemino>
    )
}

const ColumnaSemino = styled.div`
.contenedor-semino{
    flex-direction: column;
    justify-content:center;
    min-height: 16em;
    background-color: #605555;
    border-color:#FFAA00;
    color:white;
    background-color: #17130A;
}

.contenedor-imagen{
    border-radius: 10px 10px 0px 0px;
    margin: 0 auto;
}



img{
    width:auto;
    height: 250px;
    object-fit:cover;
}

.semino-texto{
    padding:2%;
    display: flex;
    max-witdh:100%;
    flex-direction: column;
    text-align:left;
    overflow: hidden;
    font-size: 0.9em;
    border-top: 1px solid white;
}

.link{
    text-decoration:none;
    color:white;
    margin-top:1.2em;
}




@media (min-width: 650px){
.contenedor-semino{
    flex-direction: row;
    align-items: center;
}

img{
    border-radius:10px;
    width: auto;
    

}

.contenedor-imagen{
    border-radius:10px;

}

.semino-texto{
    border: none;
    border-left: 1px solid white;

}
}







`


