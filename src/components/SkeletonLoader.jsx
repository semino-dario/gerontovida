import styled from "styled-components";
import { MyLoader, MyLoader2 } from "./Skeleton";


export default function SkeletonLoader() {
    return (
        <Loader>
            <div className="long-loader">
                <MyLoader2 />
            </div>
            <div className="short-loaders">
                <MyLoader />
                <MyLoader />
                <MyLoader />
            </div>
        </Loader>
    )
}

const Loader = styled.div`
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;

.short-loaders{
    display: flex;
    flex-direction: row;
}

@media (max-width: 650px) {
    .long-loader{
   display:none;
   }
.short-loaders{
    flex-direction: column;
}
.
`

