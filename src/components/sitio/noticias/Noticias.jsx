import { useSelector } from "react-redux";
import NotaSemino from "./NotaSemino";
import { ScrollHorizontal } from "../ScrollHorizontal";
import PortadaNoticia from "./PortadaNoticia";

export function Noticias() {

    const noticia = useSelector((state) => state.noticia.data);

    if (noticia === undefined) {
        return null
    }
    return (
        <>
            <NotaSemino id="noticias" />
            {noticia.length > 0 && (
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
        </>
    )


}