import { useState } from "react"
import styled from "styled-components"
import ojoAbierto from '../../svg/ojo-abierto.svg'
import ojoCerrado from '../../svg/ojo-cerrado.svg'


export default function InputPassword(props) {

    const { value, onChange } = props

    const [verPassword, setVerPassword] = useState(false)

    return (

        <DivPassword >
            <input className='inputPassword' type={!verPassword ? 'password' : 'text'}
                placeholder=' contraseña'
                required={true}
                value={value}
                onChange={onChange}
            />
            <img className="imgPassword" onClick={() => { setVerPassword(!verPassword) }} style={!verPassword ? { marginTop: "10px" } : { marginTop: '12px' }} src={!verPassword ? ojoAbierto : ojoCerrado} alt="" />

        </DivPassword>
    )
}

const DivPassword = styled.div`
display: flex;
height: 50px; 

.inputPassword{
    margin-left:30px;
}

.imgPassword{
    margin-top: 9px;
    height: 25px;
    width: 35px;
    cursor:pointer;
}


`


