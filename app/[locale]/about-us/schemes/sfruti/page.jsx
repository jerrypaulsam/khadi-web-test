'use client'

import { useEffect, useState } from 'react';

import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

import image1 from "@/public/assets/img/about/objectives.jpg";

const SFRUTI = () => {

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
            <SEO pageTitle="Scheme of Fund for Regeneration of Traditional Industries (SFRUTI)" />
            <HeaderOne isMalayalam={isMalayalam} />
            <BreadCrumb title="Scheme of Fund for Regeneration of Traditional Industries (SFRUTI)" innerTitle="Kerala Khadi & Village Industries Board" />

            <div className="team__single section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 lg-mb-30">
                            <div className="team__single-left">
                                <div className="team__single-left-thumb dark__image">
                                    <img src={image1.src} alt="image" />

                                </div>

                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7">
                            <div className="team__single-right">
                                <div className="team__single-right-experience">
                                    <h3>Scheme of Fund for Regeneration of Traditional Industries (SFRUTI)</h3>
                                    <br />
                                    <p>
                                        "Scheme of Fund for Regeneration of Traditional Industries (SFURTI)” has been drawn up and approved at a total cost of Rs. 97.25 crore. The Scheme will be implemented by the Union Ministry of Agro and Rural Industries (ARI) and its organisations and institutions, in collaboration with State Governments, their organisations concerned, non-Governmental organisations, etc.
                                    </p>
                                    <br />

                                    <li style={{ fontWeight: "bold" }}>Khadi cluster in Thiruvananthapuram and Kollam districts.</li>
                                    <li style={{ fontWeight: "bold" }}>Employment to 500 women khadi artisans.</li>
                                    <li style={{ fontWeight: "bold" }}>Use modern charkhas and looms.</li>
                                    <li style={{ fontWeight: "bold" }}>Innovative designs.</li>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='all-footer'>
                <FooterOne isMalayalam={isMalayalam} />
            </div>
            <ScrollToTop />
        </>

    );
};

export default SFRUTI;