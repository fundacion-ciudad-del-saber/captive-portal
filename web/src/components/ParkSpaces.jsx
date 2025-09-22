import { useEffect, useState } from "react";
import axios from "axios";

export default function ParkSpaces() {
    const [parkSpaces, setParkSpaces] = useState([]);

    useEffect(() => {
        axios.get(`https://admin-campus.ciudaddelsaber.org/api/park-spaces?populate=*`).then((res) => {
            setParkSpaces(res.data);
        });
    }, []);

    return (
        <div className="pb-5 flex flex-col gap-4">
            <div className="pt-4 pb-2">
                <h3 className="font-bold text-gray-700 text-2xl ">Un espacio para cada necesidad</h3>
            </div>
            {parkSpaces.data?.map((objArray, id) => (
                <div key={id} className="grid grid-cols-3 h-32 sm:h-28 rounded-lg shadow-md ">
                    {objArray.attributes.cover.data?.map((item, id) => (
                        <img
                            key={id}
                            className="object-cover col-span-1 h-32 sm:h-28 w-full rounded-l-lg"
                            src={`https://admin-campus.ciudaddelsaber.org${item.attributes.formats.small.url}`}
                        />
                    ))}
                    <div className="p-2 col-span-2 flex flex-col justify-between w-full">
                        <div className="flex justify-between items-center w-full">
                            <div>
                                <h3 className="text-xl sm:text-lg font-bold text-gray-700">{objArray.attributes.title}</h3>
                            </div>
                        </div>
                        <a href={objArray.attributes.enlace} className="px-2 py-1 w-40 sm:w-36 sm:text-xs text-sm bg-cds-verdecaña rounded-md hover:bg-opacity-80 text-white font-semibold flex items-center">
                        Ver oferta
                            <img src="./arrow.svg" className="h-6 sm:h-5 rotate-180" />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}
