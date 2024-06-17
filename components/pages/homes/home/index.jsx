"use client";

import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import About from "./about";
import Services from "./services";
import CtaArea from "./cta";
import Experience from "./experience";
import Portfolio from "./portfolio";
import Testimonial from "./testimonial";
import GetInTouch from "./get-in-touch";
import Blog from "./blog";
import FooterOne from "@/components/layout/footers/footer-one";
import BannerOne from "./banner";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import NewsTicker from "./NewsTicker";
import { getScrollText } from "@/api/api_calls";



const HomeOne = () => {

    const [isMalayalam, setIsMalayalam] = useState(false);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let language = localStorage.getItem("language");
        if ((language === null && language === undefined) || language === "eng") {
            setIsMalayalam(false)
        } else {
            setIsMalayalam(true)
        }

        fetchData();

    }, [isMalayalam]);

    async function fetchData() {

        const scroll = await getScrollText();
        if (scroll != null && scroll != []) {
            setData(scroll);
        }

        setLoading(false);
    }

    return (
        <div>
            <SEO pageTitle='Kerala Khadi & Village Industries Board' />
            {data === null && data.length === 0 ? null :
                <Marquee
                    style={{ backgroundColor: "#000", }}
                    pauseOnHover={true}

                >
                    &nbsp;&nbsp;<p style={{ color: "white" }}>⦾</p>&nbsp;
                    <a href="#download-app" style={{ color: "#fff" }}>{isMalayalam ? data[0]?.scroll_mal_1 : data[0]?.scroll_en_1}</a>
                    &nbsp;&nbsp;

                    {data[0]?.scroll_en_2 !== null && data[0]?.scroll_en_2 !== "" ? (
                        <>
                            <p style={{ color: "white" }}>⦾&nbsp;</p>
                            <a href="#download-app" style={{ color: "#fff" }}>
                                {isMalayalam ? data[0]?.scroll_mal_2 : data[0]?.scroll_en_2}
                            </a>
                        </>
                    ) : null}


                </Marquee>
            }


            <HeaderOne isMalayalam={isMalayalam} />
            <BannerOne isMalayalam={isMalayalam} />
            <NewsTicker isMalayalam={isMalayalam} />
            <About isMalayalam={isMalayalam} />
            <Experience isMalayalam={isMalayalam} />

            <Services isMalayalam={isMalayalam} />
            {/* <CtaArea /> */}
            <Portfolio isMalayalam={isMalayalam} />
            {/* <Testimonial /> */}
            {/* <GetInTouch /> */}
            {/* <Blog /> */}
            <FooterOne isMalayalam={isMalayalam} />
            <ScrollToTop />
        </div>
    );
};

export default HomeOne;