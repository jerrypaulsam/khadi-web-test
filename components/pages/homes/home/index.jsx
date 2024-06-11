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



const HomeOne = () => {

    const [isMalayalam, setIsMalayalam] = useState(false);

    useEffect(() => {
        let language = localStorage.getItem("language");
        if ((language === null && language === undefined) || language === "eng") {
            setIsMalayalam(false)
        } else {
            setIsMalayalam(true)
        }

    }, [isMalayalam]);
    return (
        <div>
            <SEO pageTitle='Kerala Khadi & Village Industries Board' />
            <Marquee
                style={{ backgroundColor: "#000", }}
                pauseOnHover={true}

            >
                &nbsp;&nbsp;<p style={{color: "white"}}>⦾</p>&nbsp;
                <a href="#download-app" style={{ color: "#fff" }}>{isMalayalam ? "ജൂൺ 15 വരെ ഖാദി വസ്ത്രങ്ങൾക്ക് 30% കിഴിവ്. ഖാദി ഷോറൂമുകൾ സന്ദർശിക്കൂ!" : "30% Rebate on Khadi Clothes until 15th June. Visit Khadi Showrooms!"}</a>


            </Marquee>

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