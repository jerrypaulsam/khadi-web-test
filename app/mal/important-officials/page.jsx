import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

import image1 from "@/public/assets/img/pages/headoffice.jpg";

const ImportantOfficials = () => {

    return (
        <>
            <SEO pageTitle="Kerala Khadi - Important Officials" />
            <HeaderOne />
            <BreadCrumb title="Important Officials" innerTitle="Kerala Khadi & Village Industries Board" />

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
                                    <h3>Important Officials</h3>
                                    <br />

                                    <table className="officals-table">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Designation</th>
                                                <th>Phone Numbers</th>
                                                <th>Email Address</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>P. JAYARAJAN</td>
                                                <td>VICE CHAIRMAN</td>
                                                <td>0471-2471695<br />0471-2472183</td>
                                                <td>vc@kkvib.org</td>
                                            </tr>
                                            <tr>
                                                <td>Dr. K A RATHEESH</td>
                                                <td>SECRETARY</td>
                                                <td>0471-2471695<br />0471-2472183<br />9447633155</td>
                                                <td>secretary@kkvib.org</td>
                                            </tr>
                                            <tr>
                                                <td>D. SADANANDAN</td>
                                                <td>FINANCIAL ADVISOR &amp; CHIEF ACCOUNTS OFFICER</td>
                                                <td>0471-2471696<br />0471-2473523<br />9400842771</td>
                                                <td>fa@kkvib.org</td>
                                            </tr>
                                            <tr>
                                                <td>SHIBI.K</td>
                                                <td>DIRECTOR (ADMINISTRATION) &amp; (PIO)</td>
                                                <td>0471-2471696<br />0471-2470623<br />9496133853</td>
                                                <td>da@kkvib.org</td>
                                            </tr>
                                            <tr>
                                                <td>C. SUDHAKARAN</td>
                                                <td>DIRECTOR (MARKETING)</td>
                                                <td>0471-2471696<br />9447946691</td>
                                                <td>dm@kkvib.org</td>
                                            </tr>
                                            <tr>
                                                <td>K.V GIRISH KUMAR</td>
                                                <td>DIRECTOR (KHADI)</td>
                                                <td>0471-2471696<br />9961474157</td>
                                                <td>dk@kkvib.org</td>
                                            </tr>
                                            <tr>
                                                <td>T.C. MADHAVAN NAMBOOTHIRI</td>
                                                <td>DIRECTOR (BUDGET &amp; PLANNING &amp; RR)</td>
                                                <td>0471-2471696<br />9400723883</td>
                                                <td>dbp@kkvib.org<br />drr@kkvib.org</td>
                                            </tr>
                                            <tr>
                                                <td>P.N. MARY VIRGIN</td>
                                                <td>DIRECTOR VILLAGE INDUSTRIES &amp; DIRECTOR PMEGP</td>
                                                <td>0471-2471696<br />9495689301</td>
                                                <td>dvi@kkvib.org<br />dregp@kkvib.org</td>
                                            </tr>
                                            <tr>
                                                <td>MINI. B</td>
                                                <td>DEPUTY DIRECTOR (CO-OPERATION)</td>
                                                <td>0471-2471695<br />9400913098</td>
                                                <td>ddc@kkvib.org</td>
                                            </tr>
                                            <tr>
                                                <td>RANI K.M</td>
                                                <td>ACCOUNTS OFFICER-I</td>
                                                <td>0471-2471696<br />9496815036</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>C.MURUGAN</td>
                                                <td>ACCOUNTS OFFICER-II</td>
                                                <td>0471-2471696<br />9947110389</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>P.PRAKASHAN</td>
                                                <td>LAW OFFICER (I/C)</td>
                                                <td>0471-2471696<br />8086543901</td>
                                                <td>lo@kkvib.org</td>
                                            </tr>
                                            <tr>
                                                <td>SABEENA BEGUM M.S</td>
                                                <td>VILLAGE INDUSTRIES ORGANISER &amp; NODEL OFFICER (PMEGP)</td>
                                                <td>0471-2471696<br />9747321760</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>SABU ABRAHAM</td>
                                                <td>DEPUTY REGISTRAR</td>
                                                <td>0471-2471696<br />9744389401</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>R.S. MADHU</td>
                                                <td>LIAISON OFFICER</td>
                                                <td>0471-2471696<br />9447387141</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>T. K SREEJA</td>
                                                <td>STATE KHADI ORGANISOR</td>
                                                <td>0471-2471696<br />8281815128</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>T. BAIJU</td>
                                                <td>MARKETING OFFICER</td>
                                                <td>0471-2471696<br />9447541914</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>A.V. SAIJU</td>
                                                <td>INFORMATION OFFICER (I/C)</td>
                                                <td>0471-2471696<br />9946589961</td>
                                                <td>io@kkvib.org</td>
                                            </tr>
                                            <tr>
                                                <td>P.S.PRADEEP</td>
                                                <td>ASSISTANT ENGINEER</td>
                                                <td>0471-2471696<br />9895183640</td>
                                                <td>engg@kkvib.org</td>
                                            </tr>
                                            <tr>
                                                <td>SHIBU JOHN</td>
                                                <td>SENIOR SUPERINTENDENT (I/C)</td>
                                                <td>0471-2471696<br />9400615920</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>SAJITHA MANY. M.S</td>
                                                <td>JUNIOR ACCOUNTS OFFICER (I/C)</td>
                                                <td>0471-2471696<br />9446020886</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>ANILKUMAR. C</td>
                                                <td>STATISTICIAN (I/C)</td>
                                                <td>0471-2471696<br />9946577371</td>
                                                <td>stat@kkvib.org</td>
                                            </tr>
                                            <tr>
                                                <td>DEEPA DEVARAJAN</td>
                                                <td>C.A. TO SECRETARY</td>
                                                <td>0471-2471696<br />9496794156</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>SURESH KUMAR</td>
                                                <td>P.S. TO VICE CHAIRMAN</td>
                                                <td>0471-2472379<br />9446160371</td>
                                                <td></td>
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

export default ImportantOfficials;