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
            <img className="imgPassword" onClick={() => { setVerPassword(!verPassword) }} src={!verPassword ? ojoAbierto : ojoCerrado} alt="" />

        </DivPassword>
    )
}

//style={!verPassword ? { marginTop: "10px" } : { marginTop: '12px' }}

const DivPassword = styled.div`
display: flex;
height: 50px; 

.inputPassword{
    margin-left:30px;
}

.imgPassword{
    margin-top: 9px;
    cursor:pointer;
}


`


