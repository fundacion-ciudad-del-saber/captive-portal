import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

export default function SquareSpaces() {
    const [squareSpaces, setSquareSpaces] = useState([]);

    useEffect(() => {
        axios.get(`https://admin.campus.ciudaddelsaber.org/api/square-spaces?populate=*`).then((res) => {
            setSquareSpaces(res.data);
        });
    }, []);

    const settings = {
        infinite: true,
        speed: 5000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: false,
    };

    // Función para mezclar el array de forma aleatoria
    const shuffleArray = (array) => {
        if (!array || array.length === 0) {
            return []; // Si el array es nulo o vacío, devuelve un array vacío
        }

        const shuffledArray = array.slice(); // Crear una copia del array original
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    return (
        <div className="pt-6">
            <h3 className="sm:px-0 font-bold text-gray-700 text-2xl py-4 ">Descubre el campus</h3>
            <Slider {...settings}>
                {shuffleArray(squareSpaces.data)?.map((objArray) => (
                    <div key={objArray.id} className="px-2 pb-6 relative">
                        <div className=" rounded-lg shadow-md relative overflow-hidden">
                            {objArray.attributes.cover.data?.map((item, id) => (
                                <img
                                    key={id}
                                    className="object-cover h-40 w-full"
                                    src={`https://admin.campus.ciudaddelsaber.org${item.attributes.formats.small.url}`}
                                    alt={objArray.attributes.title}
                                />
                            ))}
                            <a href={objArray.attributes.instagram} className="w-8 h-8 bg-white opacity-70 rounded-full absolute top-2 right-2 grid place-content-center">
                                <img width="100%" height="100%" src="./instagram.svg" alt="instagram-icon" className="h-6 fill-black" />
                            </a>
                            <div className=" absolute bottom-2 left-2">
                                <p className="text-md font-bold text-white">{objArray.attributes.title}</p>
                                {objArray.attributes.square_types.data?.map((item, id) => (
                                    <p className="text-xs text-gray-100" key={id}>
                                        {item.attributes.title}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}