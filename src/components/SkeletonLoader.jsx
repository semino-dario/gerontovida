import styled from "styled-components";
import { MyLoader } from "./Skeleton";


export default function SkeletonLoader() {
    return (
        <Loader>
            <div className="big-screen">
                {/* <div className="long-loader">
                    <MyLoader2 />
                </div> */}
                <div className="short-loaders">
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                </div>
            </div>
            <div className="medium-screen">
                <MyLoader />
                <MyLoader />
            </div>
            <div className="small-screen">
                <MyLoader />
            </div>

        </Loader>
    )
}

const Loader = styled.div`
.big-screen{
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;}

.short-loaders{
    display: flex;
    flex-direction: row;
}

.small-screen{
    display:none;
}

.medium-screen{
    display:none;

}

@media (max-width: 1050px){
    .medium-screen{
        display: flex;
    }

    .big-screen{
        display:none;
    }
}

@media (max-width: 400px) {
    .medium-screen{
        display: none;
    }

.small-screen{
    display: flex;
}
.big-screen{
    display: none;
}
}
`

