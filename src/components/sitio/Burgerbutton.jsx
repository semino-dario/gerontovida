import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { cambiaIcono } from '../../state/actions';


function Burgerbutton(props) {

  const dispatch = useDispatch()
  const iconoRef = useRef(null);

  return (
    <div onClick={props.handleClick}>
      <IconoHamburguesa onClick={() => { dispatch(cambiaIcono(iconoRef)) }}>
        <div ref={iconoRef} id="nav-icon1"  >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </IconoHamburguesa>
    </div>
  )

}
export default Burgerbutton;


const IconoHamburguesa = styled.div`
#nav-icon1 {
  width: 60px;
  height: 30px;
  position: relative;
  margin: 50px auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
}

#nav-icon1 span {
  display: block;
  position: absolute;
  height: 7px;
  width: 60%;
  background: #008900;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}

#nav-icon1 span:nth-child(1) {
  top: 0px;
}

#nav-icon1 span:nth-child(2) {
  top: 10px;
}

#nav-icon1 span:nth-child(3) {
  top: 20px;
}

#nav-icon1.open span:nth-child(1) {
  top: 10px;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}

#nav-icon1.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

#nav-icon1.open span:nth-child(3) {
  top: 10px;
  -webkit-transform: rotate(-135deg);
  -moz-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
}

`
