import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

import image1 from "@/public/assets/img/about/objectives.jpg";

const TenderNotice = () => {

    return (
        <>
            <SEO pageTitle="Kerala Khadi - Tender Notice" />
            <HeaderOne />
            <BreadCrumb title="Tender Notice" innerTitle="Kerala Khadi & Industries Board" />

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
                                    <h3>Tender Notice</h3>
                                    <br />
                                    <table className="officals-table">
                                        <thead>
                                            <tr>
                                                <th>Tender Notice ID No & Date</th>
                                                <th>Description of the Tender/Quotation Notice</th>
                                                <th>Date of Closing</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>No. K /2546 /2021/Planfund</td>
                                                <td>
                                                    Quotation are invited from established manufacturers/authorized suppliers for supply of the spare parts required to various Departmental khadi Weaving / Spinning units under the project.
                                                </td>
                                                <td>15/12/2022</td>
                                            </tr>
                                        </tbody>
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

export default TenderNotice;