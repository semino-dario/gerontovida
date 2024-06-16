import { useSelector } from "react-redux";
import { ScrollHorizontal } from "../ScrollHorizontal";
import PortadaNoticia from "./PortadaNoticia";
import SkeletonLoader from "../../SkeletonLoader";
import { useEffect } from "react";

export function Noticias() {

    const noticia = useSelector((state) => state.noticia.data);
    const lastNews = []

    if (noticia) {
        for (let i = 0; i < noticia.length; i++) {
            if (i > noticia.length - 6)
                lastNews.push(noticia[i])
        }
    }

    if (noticia === undefined) {

        return (
            <div className="">
                <SkeletonLoader />
            </div>
        )

    }

    return (
        <div id="noticias" >
            <br />
            {lastNews.length > 0 &&
                (
                    <ScrollHorizontal
                        contenido={lastNews.reverse().map((item, index) => (
                            item.author !== "Eugenio Semino" && (
                                <div key={index}>
                                    {
                                        < PortadaNoticia
                                            imagen={item.imageUrl}
                                            titulo={item.title}
                                            autor={item.author}
                                            articulo={`/articulo/${item._id}`} />}
                                </div>
                            )
                        ))
                        }
                    />
                )}
        </div>
    )


}