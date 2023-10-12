import React, { useState } from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Burgerbutton from './Burgerbutton.jsx';
import RedesSociales from './RedesSociales.jsx';


function Navbar() {

  const [clicked, setClick] = useState(false);
  const icono = useSelector((state) => state.icono)
  const itemsNav = useRef(null)
  const contenedor = useRef(null)

  const handleClick = () => {
    setClick(!clicked)
  }
  const cierraContenedor = () => {
    icono.current.classList.remove("open");
    handleClick()
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView();
    }
  };

  return (
    <NavContainer>
      <div className='barra'>
        <div className='contenedor-logo'>
          <RedesSociales />
        </div>

        <div className='contenedor-icono'>
          <Burgerbutton clicked={clicked} handleClick={handleClick} />
        </div>
      </div>
      <div ref={itemsNav} className={`contenedor-items ${clicked ? 'active' : ''}`}>
        <NavLink className="navlink" to='/home/noticias' onClick={() => { cierraContenedor(); scrollToSection("noticias"); }}> <TextoLink> Noticias </TextoLink></NavLink>
        <NavLink className="navlink" to='/home/actividades' onClick={() => { cierraContenedor(); scrollToSection("actividades") }}> <TextoLink> Actividades</TextoLink></NavLink>
        <NavLink className="navlink" to='/home/canasta' onClick={() => { cierraContenedor(); scrollToSection("canasta"); }}> <TextoLink>Canasta de los Jubilados</TextoLink></NavLink>
        <NavLink className="navlink" to='/home/teatro' onClick={() => { cierraContenedor(); scrollToSection("teatro"); }}> <TextoLink>Teatro</TextoLink></NavLink>
        {/* <NavLink className="navlink" to='/home/videos' onClick={() => { cierraContenedor(); scrollToSection("videos"); }}><TextoLink> Videos</TextoLink></NavLink> */}
        <NavLink className="navlink" to='/home/sobreGerontovida' onClick={() => { cierraContenedor(); scrollToSection("sobreGerontovida"); }}> <TextoLink>¿Quiénes somos?</TextoLink></NavLink>
        <a className="navlink" href="#contacto" onClick={() => {
          cierraContenedor(); scrollToSection("contacto");
        }}> <TextoLink>Contacto</TextoLink></a>
      </div>
      <BgDiv ref={contenedor} className={`initial ${clicked ? ' active' : ''}`}> </BgDiv>

    </NavContainer>
  );
}


export default Navbar;

const NavContainer = styled.nav`
z-index:150;
box-shadow: inset 0 -3em 3em rgba(0,0,0,0.1),
    0 0  0 0px rgb(255,255,255),
    0.3em 0.3em 1em rgba(0,0,0,0.3);
img{
  object-fit:cover;
}
top:0;
position:fixed;
display: flex;
align-items:center;
justify-content:space-between;
color: #006E00;

width:100%;


.barra{
  display:flex;
  justify-content:space-between;
  z-index:70;
  width: 100%;
  height:50px;
  background: white;
}

.contenedor-icono{
  margin-top: -35px;

}
.contenedor-logo{
  margin-top:1px;
}

.logo-geronto{
  height:90%;
}

.contenedor-items{
  position: fixed;
  top:-2000px;
  margin-left: auto;
  margin-right: auto;
  text-align:center;
  transition: all .5s ease;
  a{
    color:white;
    font-size: 1.5rem;
    font-weight: bold;
    display:block;
    text-decoration:none;
    opacity:0;

  }
}

.contenedor-items.active{
  width:100%;
  display:block;
  position:fixed;
  margin-left:3%;
  margin-right:auto;
  top:15%;
  left:0;
  right:0;
  text-align:left;
  z-index: 11;
  a{
  color: white;
  margin-top:2%;
  opacity:1;
  }
}



`

const BgDiv = styled.div`
position:fixed;
background-color: #008900;
top: -1700px;
left:-1000px;
z-index:10;
width: 100%;
height:100%;
transition: all .6s ease;


&.active{
  top: 0;
  left:0;
  width: 50%;
  height:80%;
  border-radius: 0 0 70px 0;

  @media(max-width:768px){
    width:100%;
    height: 90%;

  }
}
`

const TextoLink = styled.p`

&:hover{
  color:#f30000;
}

`
