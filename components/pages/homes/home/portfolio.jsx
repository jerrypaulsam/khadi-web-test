import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from 'swiper/modules';
import Link from "next/link";
import { getSneakPeaks } from "@/api/api_calls";
import React, { useEffect, useState } from 'react';

const slideControl = {
    loop: true,
    speed: 2000,
    spaceBetween: 30,
    autoplay: {
        delay: 4500,
        reverseDirection: true,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        750: {
            slidesPerView: 2
        },
        1138: {
            slidesPerView: 3
        },
        1600: {
            slidesPerView: 4
        },
    }
};

const Portfolio = ({ isMalayalam }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        fetchData();

    }, []);

    async function fetchData() {

        const sneaks = await getSneakPeaks();
        if (sneaks != null && sneaks != []) {
            setData(sneaks);
        }

        setLoading(false);
    }

    return (
        <div className="experience__area dark__image section-padding pb-0 overflow-hidden">
            <div className="container-fluid p-0">
                <div className="row mb-60">
                    <div className="col-xl-12">
                        <div className="portfolio__area-title t-center">
                            <span className="subtitle-one">{isMalayalam ? "സ്നീക്ക് പീക്" : "Sneak Peaks"}</span>
                            <h3>{isMalayalam ? "കേരള ഖാദി ചിത്രങ്ങൾ" : "Kerala Khadi Glimpses"}</h3>
                            {!loading ? data != null && data.length === 0 ? "No Photos" : "" : ""}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <Swiper modules={[EffectFade, Autoplay]} {...slideControl} >
                            {loading ? (
                                <div className="instagram-loader-container">
                                    <div className="instagram-loader"></div>
                                </div>

                            ) : data != null && data.length > 0 && data?.map((item, id) => (
                            <SwiperSlide key={id}>
                                <div className="portfolio__area-item swiper-slide">
                                    <img src={item.image} alt="image" style={{ borderRadius: "5px" }} />
                                    <div className="portfolio__area-item-content">
                                        <div className="portfolio__area-item-content-title">
                                            <h4>{isMalayalam ? item.title_mal : item.title_en}</h4>
                                            {/* <span className="text-eight">{data.subtitle}</span> */}
                                        </div>
                                        {/* <div className="portfolio__area-item-content-icon">
                                                <Link href={`/portfolio/${data.id}`}><img src="assets/img/icon/up-arrow.png" alt="icon" /></Link>
                                            </div> */}
                                    </div>
                                </div>
                            </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;