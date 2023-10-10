import styled from 'styled-components';
import ImagenPortada from '../../svg/portada3.svg';
import { Link } from "react-router-dom"
import iconoTeatro from '../../svg/iconoTeatro.svg'
import iconoActividades from '../../svg/iconoActividades.svg'
import iconoNoticias from '../../svg/iconoNoticias.svg'
import iconoCanasta from '../../svg/iconoCanasta.svg'
import iconoQuienes from '../../svg/iconoQuienes.svg'
//import iconoTV from '../../svg/iconoTV.svg'
import iconoLogin from '../../svg/iconoLogin.svg'


function PortadaHome() {
    return (

        <Encabezado >
            <Link to="/home"><img className="imagen" src={ImagenPortada} alt="Gerontovida" /></Link>
            <div className="contenedorIconos">
                <div>
                    <a href='#noticias'> <img src={iconoNoticias} alt="noticias" /> </a>
                    <p>noticias</p>
                </div>
                <div>
                    <a href='#actividades' >  <img src={iconoActividades} alt="" /> </a>
                    <p>actividades</p>

                </div>
                <div>
                    <a href='#canasta' >    <img src={iconoCanasta} alt="" /></a>
                    <p>canasta </p>
                </div>
                <div>
                    <a href='#teatro'><img src={iconoTeatro} alt="" /></a>
                    <p>teatro</p>

                </div>
                {/* <div>
                    <a href='#videos'>   <img src={iconoTV} alt="" /></a>
                    <p>videos</p>

                </div> */}
                <div>
                    <a href='#sobreGerontovida'>  <img src={iconoQuienes} alt="" /></a>
                    <p>quiénes </p>
                </div>
                <div>
                    <Link to='/sesion'>    <img src={iconoLogin} alt="" /> </Link>
                    <p>Login</p>
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