import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PieChart from "./PieChart";
import HorizontalBarChart from "./HorizontalBarChart";
import CanastasAnteriores from "./CanastasAnteriores";
import Accordion from 'react-bootstrap/Accordion';
import { ContenedorGeneral } from '../../Contenedor';
import { useSelector } from "react-redux";
import Preloder from "../../Preloder";
import axios from "axios";
import BotonDescarga from "../../BotonDescarga";
import { Link } from "react-router-dom";
import { MyLoader2, MyLoader3 } from "../../Skeleton";


function Canasta() {
  const DataCanasta = useSelector((state) => state.canasta.data)
  const [jubilacionMinima, setJubilacionMinima] = useState(null)
  const [ultimaCanastaTorta, setUltimaCanastaTorta] = useState(null)
  const [periodo, setPeriodo] = useState(null)
  const [id, setId] = useState(null)
  const [rubros, setRubros] = useState(null)
  const [totalCanasta, setTotalCanasta] = useState(null);


  let rubrosFinal = [];
  let listaCanastasAnteriores

  function actualizaRubros() {
    const rubrosTorta = Object.entries(rubros);
    /*agrega signo $ en el string*/
    rubrosTorta.forEach((item) => {
      item.splice(1, 0, '$');
      const reg = /,/g;

      rubrosFinal.push(item.toString().replace(reg, ' '));

    });
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios("https://api-contenidos.cyclic.app/api/v1/canastas")
        const data = response.data.data

        const latestCanasta = data[data.length - 1];

        setJubilacionMinima(latestCanasta.minima);
        setUltimaCanastaTorta(Object.values(latestCanasta.categorias));
        setPeriodo(latestCanasta.periodo);
        setId(latestCanasta._id)
        setRubros(latestCanasta.categorias);
        setTotalCanasta(latestCanasta.canasta);

      }
      catch (error) {
        console.log(error)
      }
    }
    fetchData()

  }, [])


  if (rubros !== null) {
    actualizaRubros()
  }

  if (DataCanasta !== undefined) {

    listaCanastasAnteriores = DataCanasta.map((fecha) => {
      function actualizaCanasta() {
        setJubilacionMinima(fecha.minima);
        setTotalCanasta(fecha.canasta);
        setPeriodo(fecha.periodo);
        setId(fecha._id)
        actualizaRubros();

        function nuevaCanasta() {
          setRubros(fecha.categorias);
          setUltimaCanastaTorta(Object.values(fecha.categorias));
        }

        setTimeout(nuevaCanasta, 700)
      }

      return (
        <div
          className="fecha-canasta"
          key={fecha._id}
          onClick={actualizaCanasta}
        >
          <Link to='' className={`${(fecha.periodo === periodo) ? "seleccionada" : ""}`}> {fecha.periodo} </Link>
        </div >
      );
    });
  }


  if (DataCanasta === undefined) {
    return (
      <ContenedorGeneral style={{ backgroundColor: 'white', borderColor: '#f30000', height: '800px', alignItems: 'center', justifyContent: 'center' }}
      >
        <Preloder />
      </ContenedorGeneral>)
  }

  /////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////*CANASTA BÁSICA DE LOS JUBILADOS *//////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////


  return (
    <ContenedorCanasta>

      <ContenedorGeneral
        style={{ backgroundColor: 'white', borderColor: '#f30000' }}
        id="canasta" >
        <br />
        <CanastaJubilados>
          <div className="titulo-canasta">
            <h1>Canásta Básica de los Jubilados</h1>
            <p className="texto-canasta">
              Calculada dos veces por año por la Defensoría de la Tercera Edad de la
              Ciudad de Buenos Aires.
            </p>
            <h3 className="total-canasta">
              Total Canasta: $ {totalCanasta}
            </h3>
            <h4>Período: {periodo}</h4>
          </div>
          <div className="graficos">
            <div className="canasta-barra-torta">
              <div className="torta">
                <h6>Composición de la Canasta por rubros</h6>
                <p> - cifras expresadas en pesos argentinos - </p>
              </div>
              <PieChart
                ultimaCanastaTorta={ultimaCanastaTorta}
                categorias={rubrosFinal}
                total={totalCanasta}
              />
            </div>
            <div className="comparacion-acordeon">
              <div className="torta">
                <div className="comparacion">
                  <h6>Comparación entre Jubilación Mínima y Canasta Básica</h6>
                  <HorizontalBarChart
                    jubilacionMinima={jubilacionMinima}
                    ultimaCanasta={totalCanasta}
                  />
                </div>
              </div>
              <div className="contenedor-acordeon">
                <Accordion className="acordeon">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="header">Ver mediciones anteriores</Accordion.Header>
                    <Accordion.Body className="body">
                      <div className="contenedor-fechas">
                        <CanastasAnteriores lista1={listaCanastasAnteriores} />
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="my-5 boton">
            <BotonDescarga
              id={id}
              periodo={periodo}
              texto={'descargar pdf'}
            />
          </div>

        </CanastaJubilados>

      </ContenedorGeneral>
    </ContenedorCanasta>
  );

}


export default Canasta;

const ContenedorCanasta = styled.div`

        `

const CanastaJubilados = styled.div`

        .canasta-barra-torta {
          display: flex;
        justify-content: center;
        flex-direction:column;
        margin-bottom:5%;
        padding-top: 5%;
        padding-bottom: 5%;
        width:95%;
        border-bottom:solid 1px #f30000;

  }

        .graficos{
          display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        border-bottom:solid 1px #f30000;

}

        h1 {
          color: #F30000;
        margin-top:2rem;
  }

        h6 {
          margin: 0 auto;
  }

        .texto-canasta {
          border-top-radius: 20px;
        padding: 3%;
        margin: 0 auto;
        margin-bottom: 10px;
        border-bottom:solid 1px #f30000;

  }

        .titulo-canasta{
          border - bottom:solid 1px #f30000;


  }
        .total-canasta {
          padding-top:5%;
  }

        .comparacion {
          margin-top:5%;
        margin-bottom: 10%;
        width:95%;
        padding:1%;

  }

        .barras {
          margin - top: 5%;
  }

        .contenedor-acordeon{
          display: flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
        padding-top: 10%;
        margin-top:5%;
        margin-bottom: 15%;
        border-top:solid 1px #f30000;

}

        .acordeon{
          width:320px;
}



        .contenedor-fechas {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        row-gap: 20px;
        column-gap: 1px;
        width: 320px;
        font-size: 70%;
        margin-left: -20px;
}

        a{
          text - decoration:none;
        color: black;
}

        .seleccionada{
          color:red;
  
}

        @media (min-width: 1200px){
      .graficos{
        flex-direction:row;
        padding-top:3%;
        gap:50px;
        border:none;
  }



        .canasta-barra-torta {
        border:none;
        width:30rem;
        margin-bottom:0;
        padding-top: 0;
        padding-bottom: 0;
    
  }

        .comparacion-acordeon{
          position:relative;
  }

        .comparacion{
          border - radius:5px;
        padding:1%;
        margin-top:-180px;
        margin-bottom: 0%;
        width:20rem;
        border:solid 1px #f30000;

  }

        .texto-canasta{
          margin - bottom:0;
  }

        .total-canasta{
          padding - top:2%;
  }

        .contenedor-acordeon{
          border:none;
        padding-top: 4%;
        margin-top:10%;
        margin-bottom: 0%;
        position:absolute;
  
 
}

        .acordeon{
          margin - left:-1px;

}

        .boton{
          margin - left:-350px;
}
}

        @media (min-width: 600px){

  .canasta - barra - torta{
          width:30rem;
  }

       
}


        `;
