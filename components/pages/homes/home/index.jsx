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
            <HeaderOne isMalayalam={isMalayalam} />
            <BannerOne isMalayalam={isMalayalam} />
            <About isMalayalam={isMalayalam} />
            <Services isMalayalam={isMalayalam} />
            {/* <CtaArea /> */}
            <Experience isMalayalam={isMalayalam} />
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