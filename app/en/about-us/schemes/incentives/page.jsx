import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

import image1 from "@/public/assets/img/about/objectives.jpg";

const Incentives = () => {

    return (
        <>
            <SEO pageTitle="Kerala Khadi - Incentives" />
            <HeaderOne />
            <BreadCrumb title="Incentives" innerTitle="Incentive to Khadi Artisans" />

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
                                    <h3>Incentive to Khadi Artisans</h3>
                                    <br />
                                    <p>
                                        Khadi Sector in Kerala at present employees 12000 artisans, mostly women below the poverty line. Since we have built in infrastructures in the form of workshed, Godown and marketing outlets, there is lot of scope for raising the number of beneficiaries by another 20,000, without additional investment on infrastructure.

                                        At the same time, having regard to the high rural wage level in the State, the artisans expect a comparatively high wage in spinning and weaving too. Further the Weavers in handloom sector, who weave Khadi too, expect wages on par with the rate in Handloom Sector. Introduction of more Weavers ensures additional employment to 6 times their number in spinning. In the back ground it is necessary to provide incentive to spinners and Weavers, to enhance production and ensure reasonable income to the artisans. Since this sector employees women more particularly unemployed house wives, the expansion of work in this sector will help poverty alleviation in villages
                                    </p>
                                    <br />

                                    <p>
                                        With a view to continue the Spinners and weavers in the Khadi sector and attract more artisans to this sector, the Government is providing incentive to artisans based on their production. The present rate of production incentives to Khadi Artisans are given below:
                                        <br /> <br />
                                        <li style={{ fontWeight: "bold" }}>Spinners = 60 paise per Hank for spinning.</li>
                                        <li style={{ fontWeight: "bold" }}>Weavers = 180 paise per Hanks consumed by the weaver.</li>
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

export default Incentives;