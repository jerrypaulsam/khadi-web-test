import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

import image1 from "@/public/assets/img/about/grama_soubhagya.jpg";

const RebateOnSale = () => {

    return (
        <>
            <SEO pageTitle="Kerala Khadi - Rebate on Khadi" />
            <HeaderOne />
            <BreadCrumb title="Rebate on Khadi" innerTitle="Kerala Khadi & Village Industries Board" />

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
                                    <h3>Rebate on Khadi</h3>
                                    <br />
                                    <p>
                                        As part of popularisation of Khadi / Handloom clothes,the Government had issued the Government order with a solicition to the effect that all Malayalees especially government employees, teachers and public sector workers should wear Khadi clothes in every wednes day.
                                    </p>
                                    <br />
                                    <p>
                                        In Kerala there are around 40 Khadi Institutions besides Khadi Board are running the Khadi Production activity producing various Khadi Fabrics such as Cotton, Silk & polyvastra. . Since the year 1985 the Governement of Kerala has permenentaly declared 10% rebate throught the year for the Retail sale on Cotton Khadi, Silk, Spun Silk Khadi Varieties. Apart from this the Government of Kerala has provided the budgetery support for giving the Special rebate 10 % for 108 dyas various spells in various festivals and occassions. The Khadi and Village Industries Commission discontinued the rebate policy from the year 2008-09 and introduced the Marketing Development Assistance Scheme. By utilizing the funds received from the MDA scheme 10% rebate more giving to the customers in every days.
                                    </p>
                                    <br />
                                    <h4 style={{ textAlign: "center" }}>Normal Rebate Throughout the Year</h4>
                                    <table className="officals-table">
                                        <thead>
                                            <tr>
                                                <th>Sl.No.</th>
                                                <th>Item</th>
                                                <th>State Govt Rebate</th>
                                                <th>MDA Rebate</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Cotton Khadi</td>
                                                <td>10%</td>
                                                <td>10%</td>
                                                <td>20%</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Silk Khadi</td>
                                                <td>10%</td>
                                                <td>10%</td>
                                                <td>20%</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>(i) Reeled</td>
                                                <td>10%</td>
                                                <td>10%</td>
                                                <td>20%</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>(ii) Spun</td>
                                                <td>10%</td>
                                                <td>10%</td>
                                                <td>20%</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Polyvastra</td>
                                                <td></td>
                                                <td>10%</td>
                                                <td>10%</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Woollen Khadi</td>
                                                <td></td>
                                                <td>10%</td>
                                                <td>10%</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <br />
                                    <p>Normal rebate as well as special rebate on retail sale on Khadi i selected items as per details given below. </p>
                                    <br />
                                    <h4 style={{ textAlign: "center" }}>Special Rebate on Selected Days</h4>
                                    <table className="officals-table">
                                        <thead>
                                            <tr>
                                                <th>Sl.No.</th>
                                                <th>Item</th>
                                                <th>State Govt: Usual Rebate</th>
                                                <th>State Govt: Special Rebate</th>
                                                <th>MDA Rebate</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Cotton Khadi</td>
                                                <td>10%</td>
                                                <td>10%</td>
                                                <td>10%</td>
                                                <td>30%</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Silk Khadi</td>
                                                <td>10%</td>
                                                <td>10%</td>
                                                <td>10%</td>
                                                <td>30%</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>(i) Reeled</td>
                                                <td>10%</td>
                                                <td>10%</td>
                                                <td>10%</td>
                                                <td>30%</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>(ii) Spun</td>
                                                <td>10%</td>
                                                <td>10%</td>
                                                <td>10%</td>
                                                <td>30%</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Polyvastra</td>
                                                <td></td>
                                                <td>10%</td>
                                                <td>10%</td>
                                                <td>20%</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Woollen Khadi</td>
                                                <td></td>
                                                <td>10%</td>
                                                <td>10%</td>
                                                <td>20%</td>
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

export default RebateOnSale;