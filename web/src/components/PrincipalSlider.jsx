import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrincipalSlider = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get(`https://admin.campus.ciudaddelsaber.org/api/campus-events?populate=*`).then((res) => {
            setEvents(res.data);
        });
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
    };

    return (
        <Slider {...settings}>
            {events.data?.map((objArray, id) => (
                <div key={id} >
                    {objArray.attributes.cover.data?.map((item, id) => (
                        <img
                            key={id}
                            className="object-cover h-[360px]  w-full rounded-lg"
                            src={`https://admin.campus.ciudaddelsaber.org${item.attributes.formats.small.url}`}
                            width="100%"
                            height="100%"
                            alt={objArray.attributes.Title}
                        />
                    ))}
                </div>
            ))}
        </Slider>
    )
}

export default PrincipalSlider