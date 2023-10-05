import React from 'react';
import styled from 'styled-components';


function PrimaryButton(props) {

  return (
    <Boton>
      <button className='boton' onClick={props.link}>{props.texto}</button>
    </Boton>
  );
}


export default PrimaryButton;

const Boton = styled.div`

.boton{
  background-color: transparent;
  border-radius: 50px;
  width: 8em;
  height:2em;
  font-size: 80%;
  border-color: #F30000;
}

`
