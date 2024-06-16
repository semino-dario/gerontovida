import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/sitio/Home'
import Articulo from './components/sitio/noticias/Articulo'
import Navbar from './components/sitio/Navbar'
import { useDispatch } from 'react-redux';
import { mostrarArticulo, mostrarCanasta, mostrarVideo } from './state/actions';
import Actividades from './components/sitio/Actividades';
import Canasta from './components/sitio/canasta/Canasta';
import QuienesSomos from './components/sitio/QuienesSomos';
import styled from 'styled-components';
import Preloder from './components/Preloder';
import InfoSemino from './components/sitio/InfoSemino';
import { Noticias } from './components/sitio/noticias/Noticias';
import Teatro from './components/sitio/Teatro';
import Videos from './components/sitio/Videos';
import ReproductorVideo from './components/sitio/ReproductorVideo';

import NotFound from './components/NotFound';

import Footer from './components/sitio/Footer';
import NotasSemino from './components/sitio/noticias/NotasSemino';
import VideoEncuentro from './components/sitio/VideoEncuentro';

function App() {
  const [preloder, setPreloder] = useState(true)
  const [muestraNavbar, setMuestraNavbar] = useState(true)

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(mostrarArticulo());
        dispatch(mostrarCanasta())
        dispatch(mostrarVideo());
        setTimeout(() => { setMuestraNavbar(false) }, 300)
        setPreloder(false)
      } catch (error) {
        console.log(error)
      }
    };
    fetchData();

  }, [dispatch]);


  return (
    <div className="App">
      {preloder ?
        <div className='preloderGeneral'>
          <Preloder />
        </div>
        :
        <BrowserRouter >
          <ContenedorNav style={{ opacity: muestraNavbar ? "0" : "1" }}>
            <Navbar />
          </ ContenedorNav>
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
              <Route path="/home/:contacto" element={<Footer />} />
            </Route>
            <Route path="/articulo/:id/encabezado" element={<Articulo />} />
            <Route path="/reproducir-videos/:id" element={<ReproductorVideo />} />
            <Route path="/ver-video/:id" element={<VideoEncuentro />} />
            <Route path="/notas-semino" element={<NotasSemino />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </BrowserRouter>
      }
    </div >
  );
}


const ContenedorNav = styled.div`
 transition: opacity 0.5s;
 `

export default App;
