import React, { useState } from "react";
import styled from "styled-components";
import PieChart from "./PieChart";
import HorizontalBarChart from "./HorizontalBarChart";
import { DataCanasta } from "./DataCanasta";
import CanastasAnteriores from "./CanastasAnteriores";
import Accordion from 'react-bootstrap/Accordion';
import { ContenedorGeneral } from '../../Contenedor';
import { Button } from "react-bootstrap";



function Canasta() {

  ///DataCanasta es el array en el que viene la información para los gráficos. Esos datos están harcodeados con funciones random para después ser reemplazados por los datos reales cuando se carguen en base de datos.///////////////

  // Cada useSate de los que siguen extrae un valor específico para alimentar los gráficos. Inicialmente se cargan con el valor de la última canasta para después actualizarse con la función actualizaCanasta que se ejecuta en el listado de todas las canastas.

  const [ultimaCanasta, setUltimaCanasta] = useState(
    DataCanasta[DataCanasta.length - 1].canasta
  );

  /* Extrae los valores para comparación con Jubilación Mínima */
  const [jubilacionMinima, setJubilacionMinima] = useState(
    DataCanasta[DataCanasta.length - 1].minima
  );

  /* Extrae los valores de cada rubro para construir el gráfico de la Torta*/
  const [ultimaCanastaTorta, setUltimaCanastaTorta] = useState(
    Object.values(DataCanasta[DataCanasta.length - 1].categorias)
  );

  /* Extrae los periodos de cada canasta */
  const [periodo, setPeriodo] = useState(
    DataCanasta[DataCanasta.length - 1].periodo
  );

  /* Extrae los textos y valores para la leyenda de los rubros en la Torta */
  const [rubros, setRubros] = useState(DataCanasta[DataCanasta.length - 1].categorias);
  let rubrosFinal = [];


  /* Carga y permite actualizar los valores de los rubros de la Torta */
  function actualizaRubros() {
    const rubrosTorta = Object.entries(rubros);

    /*agrega signo $ en el string*/
    rubrosTorta.forEach((item) => {
      item.splice(1, 0, '$');
      const reg = /,/g;

      rubrosFinal.push(item.toString().replace(reg, ' '));

    });
  }

  actualizaRubros();

  /* Extrae el valor total de la canasta */
  const [totalCanasta, setTotalCanasta] = useState(ultimaCanasta);


  /* Aquí se retorna la lista con el periodo de cada canasta y se actualizan los todos los valores cada vez que se clikea en una de ellas.*/

  const listaCanastasAnteriores = DataCanasta.map((fecha) => {

    function actualizaCanasta() {
      setUltimaCanasta(DataCanasta[fecha.id].canasta);
      setJubilacionMinima(DataCanasta[fecha.id].minima);
      setTotalCanasta(DataCanasta[fecha.id].canasta);
      setPeriodo(DataCanasta[fecha.id].periodo);
      actualizaRubros();

      function nuevaCanasta() {
        setRubros(DataCanasta[fecha.id].categorias);
        setUltimaCanastaTorta(Object.values(DataCanasta[fecha.id].categorias));
      }

      setTimeout(nuevaCanasta, 700)
    }

    return (
      <div
        className="fecha-canasta"
        key={fecha.id}
        onClick={actualizaCanasta}
      >
        <a href="#canasta" className={`${(fecha.periodo === periodo) ? "seleccionada" : ""}`}> {fecha.periodo} </a>
      </div >
    );
  });

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
                    ultimaCanasta={ultimaCanasta}
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
            <a href="/pdf/canasta.pdf" target="_blank"> <Button variant="outline-danger">Descargar Canasta en PDF</Button></a>
          </div>

        </CanastaJubilados>
      </ContenedorGeneral>
    </ContenedorCanasta>
  );
}

export default Canasta;

const ContenedorCanasta = styled.div`

margin-bottom:10%;

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
 border-bottom:solid 1px #f30000;


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
    margin-top: 5%;
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
  text-decoration:none;
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
    border-radius:5px;
    padding:1%;
    margin-top:-180px;
    margin-bottom: 0%;
    width:20rem;
    border:solid 1px #f30000;

  }

  .texto-canasta{
    margin-bottom:0;
  }

  .total-canasta{
    padding-top:2%;
  }

.contenedor-acordeon{
  border:none;
  padding-top: 4%;
  margin-top:10%;
  margin-bottom: 0%; 
  position:absolute;
  
 
}

.acordeon{
  margin-left:-1px;

}

.boton{
  margin-left:-350px;
}
}

@media (min-width: 600px){

  .canasta-barra-torta{
    width:30rem;
  }

  .comparacion{

  }
}


`;
