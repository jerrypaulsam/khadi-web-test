import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

import image1 from "@/public/assets/img/about/objectives.jpg";

const RuralISC = () => {

    return (
        <>
            <SEO pageTitle="Kerala Khadi - Rural Industries Service Centres (RISC)" />
            <HeaderOne />
            <BreadCrumb title="Rural Industries Service Centres (RISC)" innerTitle="Kerala Khadi & Village Industries Board" />

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
                                    <h3>Rural Industries Service Centres (RISC)</h3>
                                    <br />
                                    <p>
                                        Village Pottery Cluster:- Khadi and Village Industries Commission has approved a scheme under RISC in the name of Muchukunnu Village Pottery Cluster Programme to be implemented in Kozhikkode District. Total Project cost is Rs. 5 lakh. KVIC has sanctioned Rs. 3.75 lakh out of which Rs. 1.25 lakh has been released as first instalment.
                                    </p><br />
                                    <p>Inhouse Testing Lab . KVIC has sanctioned one In house testing lab for the HMP unit at Kizhakkambalam, in Ernakulam district. Total Project cost is Rs.2.68 lakh, KVIC contribution being Rs.2 lakh. The amount has been released by the KVIC.
                                    </p><br />
                                    <p>In Khadi sector 2 In House Testing Lab (one at Thiruvananthapuram and one at Payyannur Khadi Centre) have been sanctioned to the Board under Khadi industry. The projects are under set up
                                    </p>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='all-footer'>
                <FooterOne />
            </div>
            <ScrollToTop />
        </>

    );
};

export default RuralISC;