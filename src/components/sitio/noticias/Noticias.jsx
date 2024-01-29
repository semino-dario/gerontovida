import { useSelector } from "react-redux";
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
            <br />
            {noticia.length > 0 &&
                (
                    <ScrollHorizontal
                        contenido={[...noticia].reverse().map((item, index) => (
                            item.author !== "Eugenio Semino" && (
                                <div key={index}>
                                    < PortadaNoticia
                                        imagen={item.imageUrl}
                                        titulo={item.title}
                                        autor={item.author}
                                        articulo={`/articulo/${item._id}`} />
                                </div>
                            )
                        ))
                        }
                    />
                )}
        </div>
    )


}