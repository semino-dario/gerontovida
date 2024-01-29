import React from "react"
import ContentLoader from "react-content-loader"


export const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={350}
        height={400}
        viewBox="0 0 350 400"
        backgroundColor="#605555"
        foregroundColor="#ecebeb"
        {...props}
    >
        {/* <rect x="65" y="250" rx="4" ry="4" width="220" height="300" /> */}
        {/* <rect x="53" y="270" rx="3" ry="3" width="250" height="6" />
        <rect x="53" y="290" rx="3" ry="3" width="250" height="6" />
        <rect x="53" y="310" rx="3" ry="3" width="250" height="6" /> */}
        <rect x="42" y="10" rx="3" ry="3" width="270" height="300" />
    </ContentLoader>
)

// export const MyLoader2 = (props, screenwidth) => (


//     <ContentLoader
//         speed={2}
//         width={1100}
//         height={1280}
//         viewBox="0 0 1000 1280"
//         backgroundColor="#605555"
//         foregroundColor="#ecebeb"
//         {...props}
//     >
//         <rect x="5" y="50" rx="3" ry="3" width={screenwidth} height="800" />
//     </ContentLoader>
// )


export function MyLoader2(props) {


    return (
        <ContentLoader
            speed={2}
            width={1100}
            height={1280}
            viewBox="0 0 1000 1280"
            backgroundColor="#605555"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="5" y="50" rx="3" ry="3" width="1100" height="800" />
        </ContentLoader>)
}

export function MyLoader3(props) {


    return (
        <ContentLoader
            speed={2}
            width={400}
            height={1280}
            viewBox="0 0 1000 400"
            backgroundColor="#605555"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="5" y="50" rx="3" ry="3" width="400" height="800" />
        </ContentLoader>)
}