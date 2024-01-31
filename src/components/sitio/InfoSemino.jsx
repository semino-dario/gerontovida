import React from 'react';
import styled from 'styled-components';
import ImagenSemino from '../../imagenes/retrato-semino.jpg';
import ImagenSilvia from '../../imagenes/consultorio/silvia.jpg'
import TarjetaQuienesSomos from './TarjetaQuinesSomos';

export default function InfoSemino() {

  const data = [{ nombre: 'Eugenio Semino', cargo: 'Defensor de la Tercera Edad', imagen: ImagenSemino, descripcion: 'El Dr. Eugenio Semino es Defensor de la Tercera Edad de la Ciudad de Buenos Aires, Presidente de la Sociedad Iberoamericana de Gerontología y Geriatría (SIGG) y miembro fundador de la Asociación Civil Años - Espacio Gerontovida. Semino ha trabajado incansablemente para proteger los derechos de las personas mayores y promover una vejez activa y saludable. A lo largo de una extensa carrera ha logrado consolidarse como una voz influyente en la lucha contra el maltrato y la discriminación hacia las personas mayores, abogando por una distribución justa de los recursos y un sistema de seguridad social más equitativo en la República Argentina.' }, { nombre: 'Silvia Perelis', cargo: 'Presidente de Gerontovida', descripcion: 'Silvia Perelis, (Buenos Aires, Argentina1966) se licenció en psicología en la UBA y hace un postgrado en Gerontología Social con la Universidad Autónoma de Madrid. Desde antes de graduarse, como estudiante, comienza su carrera en políticas sociales, trabajando con niños en situación de calle, barrios vulnerables, servicio social de la entonces municipalidad de Buenos Aires (actual Ciudad Autónoma). Ya recibida comienza a trabajar en la Oficina del Ombudsman (actual Defensoría del Pueblo de la Ciudad Autónoma de Buenos Aires) defendiendo los Derechos de las Personas Mayores. Dirige la Red Iberoamericana de Asociaciones de Adultos Mayores, recorriendo la mayoría de los países de Iberoamérica. En paralelo a dicha labor, integra la ONG Asociación Civil Años, conocida como Espacio Gerontovida que dirige desde hace varios años hasta la actualidad. Es autora del ciclo de teatro: “Todavía algo que decir” compuesto por obras cortas, y que referidas a temas gerontológicos, se representan para la difusión y defensa de los Derechos de las Personas Mayores y del buen envejecimiento.', imagen: ImagenSilvia }]

  return (

    <SeccionColumna id="semino">

      <div className='contenedor'>
        <TarjetaQuienesSomos
          nombre={data[1].nombre}
          cargo={data[1].cargo}
          descripcion={data[1].descripcion}
          imagen={data[1].imagen}
          importante={false}
        />

        <TarjetaQuienesSomos
          nombre={data[0].nombre}
          cargo={data[0].cargo}
          descripcion={data[0].descripcion}
          imagen={data[0].imagen}
          importante={true}
        />
      </div>
    </SeccionColumna>
  );
}

const SeccionColumna = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
margin: 5% auto;
width:95%;

.contenedor{
  display:flex;
  justify-content:center;
  gap: 2rem;
}

@media(max-width: 1100px){
  .contenedor{
    flex-direction:column;
  }
}
`

