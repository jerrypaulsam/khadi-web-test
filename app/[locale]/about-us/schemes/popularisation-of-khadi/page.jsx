'use client'

import { useEffect, useState } from 'react';

import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

import image1 from "@/public/assets/img/about/objectives.jpg";

const Popularisation = () => {
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
            <SEO pageTitle="Kerala Khadi - Popularisation of Khadi" />
            <HeaderOne isMalayalam={isMalayalam} />
            <BreadCrumb title="Popularisation of Khadi" innerTitle="" />

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
                                    <h3>Popularisation of Khadi</h3>
                                    <br />
                                    <p>
                                        As part of popularisation of Khadi / Handloom cloths,the Government had issued a G.O. (MS) No. 131/06/IND dated 30-12-2006 with a solicition to the effect that all Malayalees especially government employees should wear Khadi cloths at least once in a week from 1-1-2007 onwards

                                        Similarly the Chief Minister of Kerala had solicited the entire Malayalees to wear Khadi cloths at least once in a week for creating more employment opportunities in the Khadi/Handloom sector and inculcating the pride of Swadeshi.
                                    </p>
                                    <br />

                                    <p>
                                        The Government vide G.O. (P) No. 78/2007/ID dated 18/6/2007 have approved the Industrial & Commercial Policy 2007. The main activities proposed to be done for the popularisation of Khadi sector in the Industrial & Commercial Policy 2007 are given below:-
                                        <br /> <br />
                                        <li style={{ fontWeight: "bold" }}>Encourage all Malalyalees to use Khadi and Handloom products through Mass Campaigns inculcating the pride of Swadeshi.</li>
                                        <li style={{ fontWeight: "bold" }}>Inspire Government Servants, students and other sections of the society to wear Khadi and Handloom at least once in a week.</li>
                                        <li style={{ fontWeight: "bold" }}>Formulate special scheme and assistance to set up industrial units under Khadi & Village Industries Board ensuring good returns on their produce.</li>

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

export default Popularisation;