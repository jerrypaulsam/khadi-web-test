import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

import image1 from "@/public/assets/img/pages/PMEGP.jpg";

const AboutPMEGP = () => {

    return (
        <>
            <SEO pageTitle="Kerala Khadi - PMEGP Scheme" />
            <HeaderOne />
            <BreadCrumb title="PMEGP Scheme" innerTitle="Kerala Khadi & Village Industries Board" />

            <div className="team__single section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 lg-mb-30">
                            <div className="team__single-left">
                                <div className="team__single-left-thumb dark__image">
                                    <img src={image1.src} alt="PMEGP Scheme" />

                                </div>

                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7">
                            <div className="team__single-right">
                                <div className="team__single-right-experience">
                                    <h3>PMEGP Scheme</h3>
                                    <br />
                                    <h5>About</h5>
                                    <br />
                                    <p>
                                        Prime Minister’s Employment Generation Programme (PMEGP) scheme announced by Hon’ble Prime Minister of India on 15th August, 2008 in his address from Red Fort.

                                        This is credit linked Scheme of Govt. of India by merging erstwhile REGP and PMRY scheme. KVIC is the Nodal Agency at National Level
                                    </p>
                                    <br />
                                    <h5>Objectives</h5>
                                    <br />
                                    <p>
                                        To generate continuous and sustainable employment opportunities in Rural and Urban areas of the country.

                                        To provide continuous and sustainable employment to a large segment of traditional and prospective artisans, rural and urban unemployed youth in the country through setting up of micro enterprises.

                                        To facilitate participation of financial institutions for higher credit flow to micro sector
                                    </p>
                                    <br />

                                    <h5>Background</h5>
                                    <br />
                                    <p>
                                        Individuals above 18 years of age.

                                        VIII Std. pass required for project above Rs.25.00 lakhs in manufacturing and above Rs. 10.00 lakhs for Service Sector.

                                        Self Help Groups and Charitable Trusts.

                                        Institutions Registered under Societies Registration Act- 1860.

                                        Production based Co-operative Societies.
                                    </p>
                                    <br />

                                    <h5>Salient Features</h5>
                                    <br />
                                    <p>
                                        The Scheme is implemented through KVIC and State/UT Khadi & V.I. Boards in Rural areas and through District Industries Centres in Urban and Rural areas in ratio of 30:30:40 between KVIC / KVIB / DIC respectively.

                                        No income ceiling for setting up of projects.

                                        Assistance under the Scheme is available only to new units to be established.

                                        Existing units or units already availed any Govt. Subsidy either under State/Central Govt. Schemes are not eligible..

                                        Any industry including Coir Based projects excluding those mentioned in the negative list.

                                        Per capita investment should not exceed Rs. 1.00 lakhs in plain areas and Rs. 1.50 lakhs in Hilly areas.

                                        Maximum project cost of Rs. 25.00 lakhs in manufacturing sector and Rs. 10.00 lakhs in Service Sector.
                                    </p>
                                    <br />

                                    <h5>Area of Operation</h5>
                                    <br />
                                    <p>
                                        Rural Area as declared under KVIC Act 2006 - Scheme to be implemented by KVIC, KVIB and DIC.

                                        (“Rural Area” means the area comprised in any Village and includes the area comprised in any town, the population of which does not exceed twenty thousand or such other figure as the Central Government may specify from time to time as declared under KVIC Act 2006)

                                        Urban area - Only DIC
                                    </p>
                                    <br />

                                    <h5>Negative List of Activities</h5>
                                    <br />
                                    <p>
                                        Industry / Business connected with productions / processing / sale of meat or intoxicant items like Beedi / Pan / Cigar / Cigarette etc.

                                        Industry / Business connected with cultivation, sericulture, horticulture, floriculture.

                                        Manufacture of Polythene carry bags of less than 20 microns / containers of recycled plastic.

                                        Processing of Pashmina Wool and products involving hand spinning and hand weaving coming under purview of Khadi Certification Rule.

                                        Rural Transport (except Auto rickshaw, House boat, tourist boat in A & N Islands and except house boat, Shikara & Tourist Boats in Jammu & Kashmir and Cycle Rickshaw.)

                                        CNG Auto Rickshaw will be allowed only in A & N Islands and NER with the approval of Chief Secretary of the State on merit
                                    </p>
                                    <br />

                                    <table className="officals-table">
                                        <tr>
                                            <th colspan="3">QUANTUM OF MARGIN MONEY SUBSIDY</th>
                                        </tr>
                                        <tr>
                                            <th>Categories of beneficiaries under PMEGP</th>
                                            <th>Beneficiary’s own contribution project cost</th>
                                            <th>Rate of subsidy</th>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <table border="0">
                                                    <tr>
                                                        <th>Urban</th>
                                                        <th>Rural</th>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>General Category</td>
                                            <td>10%</td>
                                            <td>
                                                <table border="0">
                                                    <tr>
                                                        <td>15%</td>
                                                        <td>25%</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Special (including SC/ST/OBC /Minorities/ Women, Ex-Servicemen, Physically handicapped, NER, Hill and Border areas etc)</td>
                                            <td>05%</td>
                                            <td>
                                                <table border="0">
                                                    <tr>
                                                        <td>25%</td>
                                                        <td>35%</td>
                                                    </tr>
                                                </table>
                                            </td>
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

export default AboutPMEGP;