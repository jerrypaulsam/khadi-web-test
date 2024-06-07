import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

import image1 from "@/public/assets/img/pages/PMEGP.jpg";

const PMEGPFAQ = () => {

    return (
        <>
            <SEO pageTitle="Kerala Khadi - PMEGP Frequently Asked Questions" />
            <HeaderOne />
            <BreadCrumb title="PMEGP - Frequently Asked Questions" innerTitle="Kerala Khadi & Village Industries Board" />

            <div className="team__single section-padding">
                <div className="container">
                    <div className="col">
                        <div className="col-xl-12 col-lg-12 lg-mb-30" style={{display: "flex", justifyContent: "center"}}>
                            <div className="team__single-left">
                                <div className="team__single-left-thumb dark__image">
                                    <img src={image1.src} alt="PMEGP - Frequently Asked Questions" />

                                </div>

                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12" style={{display: "flex", justifyContent: "center"}}>
                            <div className="team__single-right">
                                <div className="team__single-right-experience">
                                    <h3>Frequently Asked Questions</h3>
                                    <br />
                                    <table border="1">
                                        <tr>
                                            <th>QUESTION</th>
                                            <th>ANSWER</th>
                                        </tr>
                                        <tr>
                                            <td>What is the maximum project cost allowed?</td>
                                            <td>Rs. 25.00 Lakhs for manufacturing unit and Rs. 10.00 lakhs for Service unit</td>
                                        </tr>
                                        <tr>
                                            <td>Whether cost of land includes in the Project?</td>
                                            <td>No</td>
                                        </tr>
                                        <tr>
                                            <td>How much Margin Money (Govt. Subsidy) admissible?</td>
                                            <td>
                                                <table border="1">
                                                    <tr>
                                                        <th>Categories of beneficiaries under PMEGP</th>
                                                        <th>Rate of (Margin Money) Subsidy of Project cost</th>
                                                    </tr>
                                                    <tr>
                                                        <th></th>
                                                        <th>Urban</th>
                                                        <th>Rural</th>
                                                    </tr>
                                                    <tr>
                                                        <td>General Category</td>
                                                        <td>15%</td>
                                                        <td>25%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Special Category (SC/ST/OBC, Minorities/women.Ex-servicemen, Physically Handicapped, NER, Hill and Border areas etc.)</td>
                                                        <td>25%</td>
                                                        <td>35%</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>What is the component of Project cost?</td>
                                            <td>Capital Expenditure Loan, One cycle of working capital and 10% of project cost as own contribution in case of General Category and 5% project cost in case of weaker section.</td>
                                        </tr>
                                        <tr>
                                            <td>Who are the beneficiaries?</td>
                                            <td>Individual Entrepreneurs, Institutions, Co-operative societies, Self Help Groups and Trusts.</td>
                                        </tr>
                                        <tr>
                                            <td>Which are the financial agencies?</td>
                                            <td>Public Sector Banks, Regional Rural Banks (RRB), Co-Operative Banks and Private Scheduled commercial Banks approved by State Task Force Committee</td>
                                        </tr>
                                        <tr>
                                            <td>How the Capital Expenditure Loan/Cash Credit Limit be utilized?</td>
                                            <td>Working Capital at least once should touch 100% limit of cash credit within three years of Lock-in-period of Margin Money and not less than 75% of the utilization of the sanction limit on an average.</td>
                                        </tr>
                                        <tr>
                                            <td>Where the beneficiary has to submit his/her application/project?</td>
                                            <td>Beneficiary can submit their application/project at nearest KVIC/KVIB/DIC offices or any Banks. (List of Our District Offices addresses are available at our website: <a href="http://www.kkvib.org">www.kkvib.org</a>)</td>
                                        </tr>
                                        <tr>
                                            <td>What is Village Industry?</td>
                                            <td>Any Village Industry (Except those mentioned in the negative list) located in the Rural Area which produces any goods or renders any service with or without the use of power and in which the fixed capital investment per head of a full time artisan or worker does not exceed Rs. 1.00 lakh in plain area and Rs. 1.50 lakh in hilly areas</td>
                                        </tr>
                                        <tr>
                                            <td>What is Rural Area?</td>
                                            <td>Any area classified as Village as per the revenue record of the state, irrespective of the population. It also includes an area even if classified as town provided as population does not exceed 20000.</td>
                                        </tr>
                                        <tr>
                                            <td>What is Age limit?</td>
                                            <td>Any adult beneficiary above 18 years is eligible for financing under PMEGP</td>
                                        </tr>
                                        <tr>
                                            <td>What are the main criteria of project?</td>
                                            <td>It should fulfill the criteria of rural area (for Rural Area Project), per capita investment, own contribution, negative list and the unit should be new one.</td>
                                        </tr>
                                        <tr>
                                            <td>Whether EDP training is compulsory?</td>
                                            <td>Before release of first installment of bank loan, EDP training 2-3 weeks training to the beneficiary is compulsory.</td>
                                        </tr>
                                        <tr>
                                            <td>Whether collateral security is mandatory?</td>
                                            <td>As per the RBI guidelines the project costing up to Rs. 5.00 lakhs under PMEGP loans are free from collateral security. The CGTSME provided collateral guarantee for the project beyond Rs. 5.00 lakhs and up to Rs. 25.00 lakhs under PMEGP scheme.</td>
                                        </tr>
                                        <tr>
                                            <td>What is the helpline for the beneficiary in preparation of the Project?</td>
                                            <td>KVIC opened 73 RICS Cells especially to guide the entrepreneurs in preparation of project reports. Visit websites: <a href="http://www.pmegp.nic.in">www.pmegp.nic.in</a> or <a href="http://www.kvic.org.in">www.kvic.org.in</a></td>
                                        </tr>
                                        <tr>
                                            <td>Whether an entrepreneur can submit more than one project?</td>
                                            <td>To provide benefit for large number of beneficiaries, under PMEGP one unit could be set up by one family only.</td>
                                        </tr>
                                        <tr>
                                            <td>What is the definition of family?</td>
                                            <td>Husband and Wife</td>
                                        </tr>
                                        <tr>
                                            <td>Whether Unit can be set up in Urban Area?</td>
                                            <td>Yes, through DIC</td>
                                        </tr>
                                        <tr>
                                            <td>Whether existing unit can avail funds under PMEGP?</td>
                                            <td>No, only new unit.</td>
                                        </tr>
                                        <tr>
                                            <td>Whether model projects are available?</td>
                                            <td>Yes, Industry wise model projects are available at <a href="http://www.pmegp.nic.in">www.pmegp.nic.in</a></td>
                                        </tr>
                                        <tr>
                                            <td>What is lock in period for Govt. Subsidy?</td>
                                            <td>3 years</td>
                                        </tr>
                                        <tr>
                                            <td>Can Project be financed jointly from two different sources (Banks/Financial Institutions)?</td>
                                            <td>No, It is not eligible.</td>
                                        </tr>
                                        <tr>
                                            <td>How much own contribution to be deposited?</td>
                                            <td>
                                                <table border="1">
                                                    <tr>
                                                        <th>Categories of beneficiaries under PMEGP</th>
                                                        <th>Beneficiary’s own Contribution (of Project Cost)</th>
                                                    </tr>
                                                    <tr>
                                                        <td>General Category</td>
                                                        <td>10%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Special Category (SC/ST/OBC, Minorities/women.Ex-servicemen, Physically Handicapped, NER, Hill and Border areas etc.)</td>
                                                        <td>05%</td>
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

export default PMEGPFAQ;