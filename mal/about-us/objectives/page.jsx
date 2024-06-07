import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../../../components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../../../components/pages/common/scroll/scroll-to-top";

import image1 from "../../../../public/assets/img/about/objectives.jpg";

const Objectives = () => {

    return (
        <>
            <SEO pageTitle="Kerala Khadi - Objectives" />
            <HeaderOne />
            <BreadCrumb title="Objectives" innerTitle="Kerala Khadi Board's Objectives" />

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
                                    <h3>Objectives</h3>
                                    <p>Kerala Khadi and Village Industries Board is a statutory body constituted by the Act of 1957, vested with the responsibility of organizing and promoting Khadi and Village Industries in the State. The Board implements the programmes through co-operative, registered institutions, individuals and departmental units by imparting/ availing assistance from Government of Kerala, Khadi Commission and Nationalized Banks.</p>
                                    <br />
                                    <p style={{ fontWeight: "bold" }}>
                                        <li style={{ fontWeight: "bold" }}>Promotion of Khadi and Village Industries.</li>
                                        <li style={{ fontWeight: "bold" }}>Comprehensive range of support to Khadi and village industry entrepreneurs</li>
                                        <li style={{ fontWeight: "bold" }}>Marketing support to the beneficiary units of the Board.</li>
                                        <li style={{ fontWeight: "bold" }}>Co-ordination and monitoring of around 25000 units, which have, came up in Kerala with the assistance of Board.</li>
                                        <li style={{ fontWeight: "bold" }}>Providing training to potential entrepreneurs in various sectors including weaving and spinning, pottery, bee keeping and a host of other activities.</li>
                                        <li style={{ fontWeight: "bold" }}>Formulation and implementation of focused programmes and schemes for the revival of sick industries and units.</li>
                                        <li style={{ fontWeight: "bold" }}>Providing technical assistance to the upcoming units.</li>
                                    </p>
                                    <br />

                                    <p>In order to materialize the objectives, Board has formulated various schemes and implemented them successfully.</p>

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

export default Objectives;