import portfolioData from "@/components/data/portfolio-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay} from 'swiper/modules';
import Link from "next/link";

const portfolioItem = portfolioData.slice(0, 5);
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

    return (
        <div className="portfolio__area dark__image section-padding pb-0 overflow-hidden">
            <div className="container-fluid p-0">
                <div className="row mb-60">
                    <div className="col-xl-12">
                        <div className="portfolio__area-title t-center">
                            <span className="subtitle-one">{isMalayalam ? "സ്നീക്ക് പീക്" : "Sneak Peaks"}</span>
                            <h2>{isMalayalam ? "കേരള ഖാദി ചിത്രങ്ങൾ" : "Kerala Khadi Glimpses"}</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <Swiper modules={[EffectFade, Autoplay]} {...slideControl} >
                            {portfolioItem?.map((data, id) => (
                                <SwiperSlide key={id}>
                                    <div className="portfolio__area-item swiper-slide">
                                        <img src={data.image.src} alt="image" style={{borderRadius: "5px"}} />
                                        <div className="portfolio__area-item-content">
                                            <div className="portfolio__area-item-content-title">
                                                <h4>{data.title}</h4>
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