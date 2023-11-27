import styled from 'styled-components';
import ImagenPortada from '../../svg/portada3.svg';
import { Link } from "react-router-dom"
import iconoTeatro from '../../svg/iconoTeatro.svg'
import iconoActividades from '../../svg/iconoActividades.svg'
import iconoNoticias from '../../svg/iconoNoticias.svg'
import iconoCanasta from '../../svg/iconoCanasta.svg'
import iconoQuienes from '../../svg/iconoQuienes.svg'
//import iconoTV from '../../svg/iconoTV.svg'


function PortadaHome() {
    return (

        <Encabezado >
            <Link to="/home"><img className="imagen" src={ImagenPortada} alt="Gerontovida" /></Link>
            <div className="contenedorIconos">
                <div>
                    <Link to='/home/noticias'> <img src={iconoNoticias} alt="noticias" /> </Link>
                    <p>noticias</p>
                </div>
                <div>
                    <Link to='/home/actividades' >  <img src={iconoActividades} alt="" /> </Link>
                    <p>actividades</p>

                </div>
                <div>
                    <Link to='/home/canasta' >    <img src={iconoCanasta} alt="" /></Link>
                    <p>canasta </p>
                </div>
                <div>
                    <Link to='/home/teatro'><img src={iconoTeatro} alt="" /></Link>
                    <p>teatro</p>

                </div>
                {/* <div>
                    <a href='#videos'>   <img src={iconoTV} alt="" /></a>
                    <p>videos</p>

                </div> */}
                <div>
                    <Link to='/home/sobreGerontovida'>  <img src={iconoQuienes} alt="" /></Link>
                    <p>quiénes </p>
                </div>
            </div>
        </Encabezado>
    );
}


export default PortadaHome;

const Encabezado = styled.div`
background-color: #EFEADD;
width:100%;
display:flex;
justify-content:space-between;
flex-direction:column;
border-bottom: solid 2px #0749E0;

.imagen{
    width:360px;
    margin-top:7%;
}

.contenedorIconos{
    display:none;
}

@media (min-width: 500px) {

    .imagen{
        width:500px;
    } 
   }


@media (min-width: 450px) {
    flex-direction:row;

.contenedorIconos{
    display:flex;
    justify-content:center;
    gap:15px;
    border:none;
    margin-top:100px;

}

   .imagen{
    margin-top:30px;
    margin-bottom:-30px;
   }
}


@media (max-width:1070px){
    flex-direction:column;
    border:none;
    .contenedorIconos{
        margin-top:0;
        border-bottom: solid 2px #0749E0;
        border-top: solid 2px #0749E0;
        padding-top:1%;
    }
   }

   @media (max-width:450px) {
    border-bottom: solid 2px #0749E0;

   }

@media (max-width: 1200px) {
    .contenedorIconos{

        padding-top:30px;
        p{
            font-size:12px;
        }

        img{
            width:40px;
        }
    }
   }

  

   
`