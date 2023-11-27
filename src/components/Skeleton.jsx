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
        <rect x="65" y="250" rx="4" ry="4" width="220" height="9" />
        <rect x="53" y="270" rx="3" ry="3" width="250" height="6" />
        <rect x="53" y="290" rx="3" ry="3" width="250" height="6" />
        <rect x="53" y="310" rx="3" ry="3" width="250" height="6" />
        <rect x="42" y="10" rx="3" ry="3" width="270" height="217" />
    </ContentLoader>
)

export const MyLoader2 = (props) => (
    <ContentLoader
        speed={2}
        width={1100}
        height={280}
        viewBox="0 0 1000 280"
        backgroundColor="#605555"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="5" y="50" rx="3" ry="3" width="1100" height="217" />
    </ContentLoader>
)


