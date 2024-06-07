import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

import image1 from "@/public/assets/img/about/objectives.jpg";

const KhadiWelfareMeasures = () => {

    return (
        <>
            <SEO pageTitle="Kerala Khadi - Khadi Welfare Measures" />
            <HeaderOne />
            <BreadCrumb title="Khadi Welfare Measures" innerTitle="Kerala Khadi & Village Industries Board" />

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
                                    <h3>Khadi Welfare Measures</h3>
                                    <br />
                                    <p>
                                        The Government of Kerala gives full support to the Khadi sector in extending welfare measures to the Khadi artisans. The State Government have constituted a separate Board viz. Kerala Khadi Workers Welfare Fund Board which is unique in the country. The State Government extends financial support in the form of contribution to the Fund. The Welfare fund Board has three regional offices for its smooth functioning. Every artisan who has worked as a Khadi worker for a period of 240 days is eligible for membership to the fund. He/ She has to contribute 12% of their annual wage to the fund, and equal amounts (12 % each) by the Khadi Institution and the Government. The following benefits are extended to the artisans from the Welfare fund Board.
                                    </p>
                                    <br />

                                    <table className="officals-table">
                                        <thead>
                                            <tr>
                                                <th>Benefit</th>
                                                <th>Details</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Superannuation Pension (Eligible for 10 years service)</td>
                                                <td>Minimum Pension - Rs. 500/-<br />More than Ten Year Service & Maximum Pension - Rs. 20/- for every succeeding year and Subject to Maximum Rs. 900/-</td>
                                            </tr>
                                            <tr>
                                                <td>Disability Pension (Eligibility for minimum 2 year service)</td>
                                                <td>Rs. 100/-</td>
                                            </tr>
                                            <tr>
                                                <td>Family Pension - Rate of superannuation pension</td>
                                                <td>Rate of superannuation pension</td>
                                            </tr>
                                            <tr>
                                                <td>Medical benefits for one financial year</td>
                                                <td>Up to Rs. 1000/-</td>
                                            </tr>
                                            <tr>
                                                <td>Funeral benefits</td>
                                                <td>Rs. 500/-</td>
                                            </tr>
                                            <tr>
                                                <td>Assistance for marriage of women artisan or daughters</td>
                                                <td>Rs. 4000/-</td>
                                            </tr>
                                            <tr>
                                                <td>Maternity benefits (only for 2 times) (2 year continuous service is necessary)</td>
                                                <td>Rs. 750/-</td>
                                            </tr>
                                            <tr>
                                                <td>Educational benefits</td>
                                                <td>1. For children studying above SSLC - Up to Rs. 500/- per year<br />2. For Engg./Medicine/Agriculture/Veterinary - Up to Rs. 3000/- per year</td>
                                            </tr>
                                            <tr>
                                                <td>Loan for the maintenance of the house of artisan</td>
                                                <td>50% of the contribution subscribed by the artisan</td>
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

export default KhadiWelfareMeasures;