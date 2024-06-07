'use client'

import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../../../components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../../../components/pages/common/scroll/scroll-to-top";
import History from "../../../../components/pages/about/history";

import { useEffect, useState } from 'react';


const Mission = () => {
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
      <>
        <SEO pageTitle={isMalayalam ? "കേരള ഖാദി - മിഷൻ & വിഷൻ" : "Kerala Khadi - Mission & Vision"} />
        <HeaderOne isMalayalam={isMalayalam} />
        <BreadCrumb title={isMalayalam ? "മിഷൻ & വിഷൻ" : "Mission & Vision"} innerTitle={isMalayalam ? "കേരള ഖാദി ബോർഡിൻ്റെ ദൗത്യം" :  "Kerala Khadi Board's Mission"} />
       
        <History isMalayalam={isMalayalam} />
        <div className='all-footer'>
            <FooterOne isMalayalam={isMalayalam} />
        </div>
            <ScrollToTop />
      </> 
    );
};

export default Mission;