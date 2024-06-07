"use client"

import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../common/breadcrumb";
import AboutMain from "./about";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../common/scroll/scroll-to-top";
import WhoWeAre from "./who-we-are";
import History from "./history";

const AboutUs = ({ isMalayalam }) => {
    return (
      <>
        <SEO pageTitle={isMalayalam ? "കേരള ഖാദി - ഞങ്ങളെ കുറിച്ച്" : "Kerala Khadi - About Us"} />
        <HeaderOne isMalayalam={isMalayalam} />
        <BreadCrumb title={isMalayalam ? "ഞങ്ങളെ കുറിച്ച്" : "About Us"} innerTitle={isMalayalam ? "കേരള ഖാദി ബോർഡിനെക്കുറിച്ച്" : "About Kerala Khadi Board"} />
        <AboutMain isMalayalam={isMalayalam} />
            <WhoWeAre isMalayalam={isMalayalam} />
            {/* <History /> */}
        <div className='all-footer'>
            <FooterOne isMalayalam={isMalayalam} />
        </div>
            <ScrollToTop />
      </>
    );
};

export default AboutUs;