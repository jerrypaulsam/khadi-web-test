'use client'

import { useEffect, useState } from 'react';

import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

import image1 from "@/public/assets/img/about/objectives.jpg";

const KhadiUniform = () => {

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
            <SEO pageTitle="Kerala Khadi - Khadi Uniform" />
            <HeaderOne isMalayalam={isMalayalam} />
            <BreadCrumb title="Khadi Uniform" innerTitle="Khadi And Handloom Cloth" />

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
                                    <h3>Khadi Uniform</h3>
                                    <br />
                                    <p>
                                        The Government had also decided to introduce Khadi and Handloom cloth as School uniforms for students at least one day in a week.

                                    </p>
                                    <br />

                                    <p>
                                        Apart from the Khadi Board, the following institutions have been entrusted with the responsibility of producing the Khadi and Handloom uniforms.
                                        < br /><br />

                                        <li style={{ fontWeight: "bold" }}>Kerala Khadi and Village Industries Association.</li>
                                        <li style={{ fontWeight: "bold" }}>Kozhikodu Sarvodaya Sangh</li>
                                        <li style={{ fontWeight: "bold" }}>Kannur Sarvodaya Sangh</li>
                                        <li style={{ fontWeight: "bold" }}>Kerala Gandhi Smaraka Nidhi</li>
                                        <li style={{ fontWeight: "bold" }}>Gandhi Smaraka Seva Kendram</li>
                                        <li style={{ fontWeight: "bold" }}>Payyannur Firkha Gramodaya Khadi Sanghom</li>

                                    </p>

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

export default KhadiUniform;