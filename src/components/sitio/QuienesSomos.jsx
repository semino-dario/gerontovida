import React from 'react';
import styled from 'styled-components';
import quienesSomos from '../../svg/quienes.svg'


function QuienesSomos() {
  return (
    <div id="sobreGerontovida">
      <br />  <br />
      <Quienes style={{ padding: '3%' }}>
        <img style={{ width: "300px" }} src={quienesSomos} alt="quienes somos" />
        <p>La Asociación Civil Años - Espacio Gerontovida fue fundada en 1990 por el Dr. Eugenio Semino. Desde entonces la Asociación, conocida simplemente como Gerontovida, trabaja en las distintas temáticas vinculadas con las personas mayores. <br />
          Gerontovida articula sus tareas junto con la Defensoría del Pueblo de la Ciudad de Buenos Aires, como así también con la Sociedad Iberoamericana de Gerontolgía y Geriatría (SIGG), además de colaborar de manera permanente con otras organizaciones de la sociedad civil e instituciones estatales. <br />
          Muchas de las actividades realizadas hacen un fuerte hincapié en el aspecto cultural y artístico, dado que se asume que el cambio necesario para la inclusión de las personas mayores en la sociedad es principalmente un cambio cultural, además de político y económico.
        </p>

      </Quienes>
      <Quienes>
        <div
          style={{ borderColor: '#0749E0' }}
          className="contenedor"

        >
          <div style={{ color: '#0749E0' }} className='p-2'>
            <h1>Misión</h1>
            <hr />
            <p>
              Nuestra meta es lograr la inserción de las personas mayores tanto en los circuitos de atención como en los ámbitos del trabajo, el consumo, el esparcimiento y el bienestar general.
            </p>
          </div>
        </div>
        <div
          className="contenedor"

          style={{ borderColor: '#f30000' }}
        ><div style={{ color: '#f30000' }} className='p-2'>
            <h1 >Visión</h1>
            <hr />
            <p>
              Crear un espacio de referencia en gerontología que, a la vez que orienta la mejora de las condiciones actuales de atención y establece pautas de trabajo para el futuro inmediato, restituye al adulto mayor el poder de decisión sobre sus prácticas y consumos.
            </p>
          </div>
        </div>

        <div
          className="contenedor"

          style={{ borderColor: '#FFAA00' }}
        ><div style={{ color: '#FFAA00' }} className='p-2'>
            <h1 >Valores</h1>
            <hr />
            <p>
              Nuestros valores son la experiencia de trabajo desde 1990 con, por y para los adultos mayores y su entorno. Tanto en el ámbito nacional como internacional.nuestro equipo se formó académicamente y en la gestión pública, en el campo gubernamental, y público.
            </p>
          </div>
        </div>
      </Quienes>
    </div>
  );
}

export default QuienesSomos;

const Quienes = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
border: solid 1px black;
border-radius: 10px;
width:95%;
margin: 5% auto;

.contenedor{
  width:95%;
  padding: 1%;
}
p{
  color:grey;

}
@media (min-width: 1200px) {
  flex-direction: row;
  gap: 50px;


.contenedor{
  width:25rem;
  height:20rem;
}
}


`