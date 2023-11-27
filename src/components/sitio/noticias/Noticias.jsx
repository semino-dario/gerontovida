import { useSelector } from "react-redux";
import NotaSemino from "./NotaSemino";
import { ScrollHorizontal } from "../ScrollHorizontal";
import PortadaNoticia from "./PortadaNoticia";
import SkeletonLoader from "../../SkeletonLoader";

export function Noticias() {

    const noticia = useSelector((state) => state.noticia.data);


    if (noticia === undefined) {

        return (
            <div className="">
                <SkeletonLoader />
            </div>
        )

    }
    return (
        <div id="noticias" >
            <NotaSemino />
            {noticia.length > 0 &&
                (
                    <ScrollHorizontal
                        contenido={[...noticia].reverse().map((item, index) => (
                            item.author !== "Eugenio Semino" && (
                                < PortadaNoticia key={index}
                                    imagen={item.imageUrl}
                                    titulo={item.title}
                                    autor={item.author}
                                    articulo={`/articulo/${item._id}`} />
                            )
                        ))
                        }
                    />
                )}
        </div>
    )


}