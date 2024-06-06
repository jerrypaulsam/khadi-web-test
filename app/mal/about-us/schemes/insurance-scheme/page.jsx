import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

import image1 from "@/public/assets/img/about/objectives.jpg";

const InsuranceScheme = () => {

    return (
        <>
            <SEO pageTitle="Kerala Khadi - Insurance Scheme" />
            <HeaderOne />
            <BreadCrumb title="Insurance Scheme" innerTitle="Insurance Scheme of Khadi Artisans" />

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
                                    <h3>Insurance Scheme of Khadi Artisans</h3>
                                    <br />
                                    <p>
                                        Presently the KVIC is running an insurance scheme titled “Khadi Karigar Janasree Bheema Yogana” for the welfare of Khadi artisans. As per this scheme Rs 20,000/- is given for natural death and Rs 50,000/- for accidental death, Rs 50,000/- is provided is provided for permanent disability due to accident and Rs 25,000/- for partial disability. Education benefit of Rs 1200/- per year is admissible from Std IX to XII. The premium amountof Rs 200 is met from the following sources.
                                    </p>
                                    <br />

                                    <table className="schemes-table">
                                        <tr>
                                            <td className="schemes-table-title">Government of India</td>
                                            <td className="schemes-table-text">Rs. 100/-</td>
                                        </tr>
                                        <tr>
                                            <td className="schemes-table-title">KVIC</td>
                                            <td className="schemes-table-text">Rs. 50/-</td>
                                        </tr>
                                        <tr>
                                            <td className="schemes-table-title">KVIB</td>
                                            <td className="schemes-table-text">Rs. 25/-</td>
                                        </tr>
                                        <tr>
                                            <td className="schemes-table-title">Artisans</td>
                                            <td className="schemes-table-text">Rs. 25/-</td>
                                        </tr>
                                    </table>

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

export default InsuranceScheme;