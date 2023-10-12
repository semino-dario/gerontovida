import { ContenedorGeneral } from '../../Contenedor';
import SeminoColumna from '../../../imagenes/imagen-semino.webp'
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function () {
    const noticia = useSelector((state) => state.noticia.data);
    let noticiaSemino = []

    noticia.map(item => {
        item.author === "Eugenio Semino" && (
            noticiaSemino.push(item)
        )
    }
    )
    return (
        <ColumnaSemino>
            {noticiaSemino.length > 0 && (
                <Link className='link' to={`/articulo/${noticiaSemino[noticiaSemino.length - 1]._id}/encabezado`}>
                    <ContenedorGeneral className='contenedor-semino'>

                        <div className="semino-texto">
                            <div >
                                <h3>{noticiaSemino[noticiaSemino.length - 1].title}</h3>
                            </div>
                            <br />
                            <div>
                                <h5> La columna del Dr. Eugenio Semino - Defensor de la Tercera Edad</h5>
                            </div>
                        </div>
                        <div className="contenedor-imagen">
                            <Image src={SeminoColumna} alt="Dr. Eugenio Semino" />
                        </div>
                    </ContenedorGeneral> </Link>)}
        </ColumnaSemino>
    )
}

const ColumnaSemino = styled.div`
.contenedor-semino{
    flex-direction: row;
    justify-content:space-between;
    height: 210px;
    background-color: #605555;
    border-color:#FFAA00;
    color:white;
}

.contenedor-imagen{
    overflow: hidden;
    display:none;
}



img{
    object-fit:cover:
    width:100%;
    height: 100%;
}

.semino-texto{
    margin-left:30px;
    padding-top:4%;
    display: flex;
    max-witdh:100%;
    flex-direction: column;
    text-align:left;
    overflow: hidden;
}

.link{
    text-decoration:none;
    color:white;
    margin-top:20px;
}


@media (min-width: 1023px) {
.contenedor-imagen {
display:block;}
}

`


