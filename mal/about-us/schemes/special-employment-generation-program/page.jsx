import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

import image1 from "@/public/assets/img/about/objectives.jpg";

const EmploymentGenerationProgram = () => {

    return (
        <>
            <SEO pageTitle="Kerala Khadi - Special Employment Generation Programme" />
            <HeaderOne />
            <BreadCrumb title="Special Employment Generation Programme" innerTitle="Kerala Khadi" />

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
                                    <h3>Special Employment Generation Programme</h3>
                                    <br />
                                    <p>
                                        Targeting the traditional workers and weaker sections of society, Kerala Khadi and Village Industries Board proposes 10 Khadi and village industries units each in every grama panchayath per year during 11 th five year plan period. Minimum project cost will be Rs 10000/- and the maximum project cost will be limited to Rs 50000/-. 25 %, 30%,40%,50% of the project cost for general, O.B.C or Female, S.C and S.T respectively are proposed as margin money assistance from the State Government. Each unit is expected to give employment to two persons. Hence during 11 th five year plan total 500000 khadi and village industries units are proposed which will create one lakh new job opportunities. The Kerala Khadi and Village Industries Board can give Techinical assistance, training and marketing assistance. An outlay of Rs 100 lakhs is privided for the scheme in the Budget 2007-2008 under Flagship programme.</p>
                                    <br />
                                    <p>
                                        As the first step, it is proposed that the scheme will be implemented in the following 10 districts.

                                        Kannur, Kasargodu, Kozhikkodu, Palakkad, Alappuzha, Malappuram, Kollam,Pathanamthitta, Wayanadu, Kottayam.
                                    </p>
                                    <br />
                                    <p>
                                        A sum of Rs 10 lakhs will be distributed to each district, targeting an average of 600 no of units and 1200 employment opportunities will be created during the year.2007-2008. 15% of the total funds will be reserved to scheduled castes and 7.5% will be reserved to scheduled tribes.
                                    </p>
                                    <br /><br />

                                    <h4>1. Beneficiaries</h4>
                                    <br />
                                    <p>
                                        Any individuals and institutions expect partnership and private institutions.
                                    </p>
                                    <br />
                                    <h4>2. Selection Committee.</h4>
                                    <br />
                                    <table className="schemes-table">
                                        <tr>
                                            <td className="schemes-table-title" >President, District Panchayat</td>
                                            <td className="schemes-table-text">Chairman</td>
                                        </tr>
                                        <tr>
                                            <td className="schemes-table-title">Project Officer, Khadi Board</td>
                                            <td className="schemes-table-text">Convener</td>
                                        </tr>
                                        <tr>
                                            <td className="schemes-table-title">Board Member, Khadi Board</td>
                                            <td className="schemes-table-text">member</td>
                                        </tr>
                                        <tr>
                                            <td className="schemes-table-title">Manager, Lead Bank</td>
                                            <td className="schemes-table-text">member</td>
                                        </tr>
                                        <tr>
                                            <td className="schemes-table-title">General Manager, District Industrial Centre/Representative</td>
                                            <td className="schemes-table-text">member</td>
                                        </tr>
                                        <tr>
                                            <td className="schemes-table-title">District Planning Officer/Representative</td>
                                            <td className="schemes-table-text">member</td>
                                        </tr>
                                    </table>
                                    <br />

                                    <h4>3. Pattern of margin money assistance.</h4>
                                    <br />
                                    <table className="schemes-table">
                                        <tr>
                                            <td className="schemes-table-title" >General categories</td>
                                            <td className="schemes-table-text">25%</td>
                                        </tr>
                                        <tr>
                                            <td className="schemes-table-title">O.B.C and Women</td>
                                            <td className="schemes-table-text">30%</td>
                                        </tr>
                                        <tr>
                                            <td className="schemes-table-title">Scheduled Castes</td>
                                            <td className="schemes-table-text">40%</td>
                                        </tr>
                                        <tr>
                                            <td className="schemes-table-title">Scheduled Tribes</td>
                                            <td className="schemes-table-text">50%</td>
                                        </tr>
                                    </table>
                                    <br />

                                    <h4>4. Promoters Contribution.</h4>
                                    <br />
                                    <p>
                                        The entrepreneur should be investing 10 % of the project cost as own contribution. But in the case of scheduled castes and scheduled tribes, it is limited to 5%.
                                    </p>
                                    <br />

                                    <h4>5. Loan from Where.</h4>
                                    <br />
                                    <p>
                                        90 % of the project cost may be obtained as loan from any authorised Banks/Co-operative Banks/any other authorised financial institutions.</p>
                                    <br />

                                    <h4>6. Recognized Village Industries.</h4>
                                    <br />
                                    <p>
                                        All the industries except the negative list approved by Khadi Commission.
                                    </p>
                                    <br /><br />
                                    <p>
                                        <strong>For more details contact concerned project offices</strong>
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

export default EmploymentGenerationProgram;