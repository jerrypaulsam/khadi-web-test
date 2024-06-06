import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

import image1 from "@/public/assets/img/about/objectives.jpg";

const FlagShipProgram = () => {

    return (
        <>
            <SEO pageTitle="Kerala Khadi - Flagship Program" />
            <HeaderOne />
            <BreadCrumb title="Flagship Program" innerTitle="Kerala Khadi & Village Industries Board" />

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
                                    <h3>Flagship Programs</h3>
                                    <br />
                                    <h5>Renovation & Computerisation of Existing sales outlets and Modernisation of Godowns of Khadi Board</h5>
                                    <p>
                                        This scheme is indended to improve the infrastructure facilities of the sales outlets so as to attract the public and therby boosting the sale of Khadi and Village Industries products. Renovation of existing sales outlets of Khadi Board, Computerisation of sales outlets of Khadi Board, Modernisation of existing Godowns etc. come under this head.
                                    </p>
                                    <br />
                                    <h5>Revitalisation of Khadi Co-operatives</h5>
                                    <p>
                                        This scheme is introduced with a view to revive defuct Khadi co-operative societies so that employment generation can be achived under Khadi industry. Financial assistance will be extended for Replacement of Old Charkhas and Looms, Working Capital, Training etc. Khadi co-operative societies have to submit project report for the revivia.

                                    </p><strong>Rate of Assistance:- 75 % grant for ‘A’, ‘B’ categories, 100 % grant for ‘C’, ‘D’ categories</strong><p>
                                    </p>
                                    <br />
                                    <h5>Financial Assistance to Other Khadi institutions</h5>
                                    <p>
                                        This scheme is introduced for reviving registered institutions under Khadi so as to generate employment to the rural artisans. Financial assistance will be extended for Replacement of Old Charkhas and Looms, Working Capital, Training etc. Khadi institutions will have to submit project report for the revivial.

                                    </p>
                                    <p><strong>Rate of Assistance:- 75 % grant for ‘A’, ‘B’ categories, 100 % grant for ‘C’, ‘D’ categories</strong>
                                    </p>
                                    <br />

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

export default FlagShipProgram;