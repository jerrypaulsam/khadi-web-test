import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../../../components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../../../components/pages/common/scroll/scroll-to-top";

import image1 from "../../../../public/assets/img/about/objectives.jpg";

const Schemes = () => {

    return (
        <>
            <SEO pageTitle="Kerala Khadi - Schemes" />
            <HeaderOne />
            <BreadCrumb title="Schemes" innerTitle="Kerala Khadi Board's Schemes" />

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
                                    <h3>Schemes</h3>

                                    <table className="schemes-table">
                                        <tr>
                                            <td className="schemes-table-title">Incentive to Khadi Artisans</td>
                                            <td className="schemes-table-text"><Link href="/en/about-us/schemes/incentives">View</Link></td>
                                        </tr>
                                        <tr>
                                            <td className="schemes-table-title">Insurance Scheme of Khadi Artisans</td>
                                            <td className="schemes-table-text"><Link href="/en/about-us/schemes/insurance-scheme">View</Link></td>
                                        </tr>
                                        <tr>
                                            <td className="schemes-table-title">Popularisation of Khadi</td>
                                            <td className="schemes-table-text"><Link href="/en/about-us/schemes/popularisation-of-khadi">View</Link></td>
                                        </tr>
                                        <tr>
                                            <td className="schemes-table-title">Khadi Uniform</td>
                                            <td className="schemes-table-text"><Link href="/en/about-us/schemes/khadi-uniform">View</Link></td>
                                        </tr>
                                        <tr>
                                            <td className="schemes-table-title">Special Employment Generation Programme</td>
                                            <td className="schemes-table-text"><Link href="/en/about-us/schemes/special-employment-generation-program">View</Link></td>
                                        </tr>
                                        <tr>
                                            <td className="schemes-table-title">Keralam Then Kalavara Project</td>
                                            <td className="schemes-table-text"><Link href="/en/about-us/schemes/">View</Link></td>
                                        </tr>
                                        <tr>
                                            <td className="schemes-table-title">Flagship Programmes</td>
                                            <td className="schemes-table-text"><Link href="/en/about-us/schemes/">View</Link></td>
                                        </tr>
                                        <tr>
                                            <td className="schemes-table-title">Rural Industries Service Centres (RISC)</td>
                                            <td className="schemes-table-text"><Link href="/en/about-us/schemes/">View</Link></td>
                                        </tr>
                                        <tr>
                                            <td className="schemes-table-title">PRODIP</td>
                                            <td className="schemes-table-text"><Link href="/en/about-us/schemes/">View</Link></td>
                                        </tr>
                                        <tr>
                                            <td className="schemes-table-title">SFRUTI</td>
                                            <td className="schemes-table-text"><Link href="/en/about-us/schemes/">View</Link></td>
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

export default Schemes;