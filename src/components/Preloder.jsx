import { PulseLoader } from 'react-spinners';
import styled from 'styled-components';

export default function Preloder() {

    return (
        <Loder>
            <PulseLoader color="#008900" />
        </Loder>

    )
}

const Loder = styled.div`
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;
`