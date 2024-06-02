"use client"

import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../common/breadcrumb";
import AboutMain from "./about";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../common/scroll/scroll-to-top";
import WhoWeAre from "./who-we-are";
import History from "./history";

const AboutUs = () => {
    return (
      <>
        <SEO pageTitle="Kerala Khadi - About Us" />
        <HeaderOne />
        <BreadCrumb title="About Us" innerTitle="About Kerala Khadi Board" />
        <AboutMain />
            <WhoWeAre />
            {/* <History /> */}
        <div className='all-footer'>
            <FooterOne />
        </div>
            <ScrollToTop />
      </>
    );
};

export default AboutUs;