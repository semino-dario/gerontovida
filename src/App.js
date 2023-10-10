import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/sitio/Home'
import Articulo from './components/sitio/noticias/Articulo'
import Navbar from './components/sitio/Navbar'
import { useDispatch } from 'react-redux';
import { mostrarArticulo, mostrarVideo } from './state/actions';
import Actividades from './components/sitio/Actividades';
import Canasta from './components/sitio/canasta/Canasta';
import QuienesSomos from './components/sitio/QuienesSomos';
import CartelPrueba from './components/sitio/CartelPrueba';
import styled from 'styled-components';
import Preloder from './components/Preloder';
import InfoSemino from './components/sitio/InfoSemino';
import { Noticias } from './components/sitio/noticias/Noticias';
import Teatro from './components/sitio/Teatro';
import Videos from './components/sitio/Videos';
import ReproductorVideo from './components/sitio/ReproductorVideoj';
import Sesion from './components/sesion/usuario/Sesion';
import Escritorio from './components/sesion/escritorio/Escritorio';
import Publicar from './components/sesion/escritorio/Publicar';
import ResetPassword from './components/sesion/usuario/ResetPassword';
import RegistroUsuario from './components/sesion/usuario/RegristroUsuario';
import NewPassword from './components/sesion/usuario/NewPassword';
import UsuarioInfo from './components/sesion/escritorio/UsuarioInfo';

function App() {
  const [preloder, setPreloder] = useState(true)
  const [muestraNavbar, setMuestraNavbar] = useState(true)

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(mostrarArticulo());
        dispatch(mostrarVideo());
        setTimeout(() => { setMuestraNavbar(false) }, 300)
        setPreloder(false)
      } catch (error) {
        console.log(error)
      }
    };
    fetchData();

  }, []);


  return (
    <div className="App">
      {preloder ?
        <div className='preloderGeneral'>
          <Preloder />
        </div>
        :
        <BrowserRouter>
          <ContenedorNav style={{ opacity: muestraNavbar ? "0" : "1" }}>
            <Navbar />
          </ ContenedorNav>
          <ContenedorCartel className="position-fixed bottom-0 end-0">
            <CartelPrueba />
          </ContenedorCartel>
          <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} >
              <Route path="/home/:noticias" element={<Noticias />} />
              <Route path="/home/:actividades" element={<Actividades />} />
              <Route path="/home/:canasta" element={<Canasta />} />
              <Route path="/home/:teatro" element={<Teatro />} />
              <Route path="/home/:videos" element={<Videos />} />
              <Route path="/home/:sobreGerontovida" element={<QuienesSomos />} />
              <Route path="/home/:semino" element={<InfoSemino />} />
            </Route>
            <Route path="/articulo/:id/encabezado" element={<Articulo />} />
            <Route path="/reproducir-videos/:id" element={<ReproductorVideo />} />
            <Route path="/sesion" element={<Sesion />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/new-password/:token" element={<NewPassword />} />
            <Route path="/registro-usuario" element={<RegistroUsuario />} />
            <Route path="/escritorio/:token" element={<Escritorio />} />
            <Route path="/publicar/:token" element={<Publicar />} />
            <Route path="/usuario-info/:token" element={<UsuarioInfo />} />

          </Routes>
        </BrowserRouter>
      }
    </div >
  );
}

const ContenedorCartel = styled.div`
z-index: 500;
`
const ContenedorNav = styled.div`
 transition: opacity 0.5s;
 `

export default App;
