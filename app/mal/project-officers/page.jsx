import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

import image1 from "@/public/assets/img/pages/headoffice.jpg";

const ProjectOfficers = () => {

    return (
        <>
            <SEO pageTitle="Kerala Khadi - Project Officers" />
            <HeaderOne />
            <BreadCrumb title="Project Officers" innerTitle="Kerala Khadi & Village Industries Board" />

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
                                    <h3>DISTRICT LEVEL OFFICERS DETAILS</h3>
                                    <br />
                                    <table className="officals-table">
                                        <thead>
                                            <tr>
                                                <th>District</th>
                                                <th>Name of the Officer</th>
                                                <th>Designation</th>
                                                <th>Mobile No</th>
                                                <th>Office Phone Number</th>
                                                <th>Email ID</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>TRIVANDRUM</td>
                                                <td>KUMARI SUNI .G.B</td>
                                                <td>PROJECT OFFICER</td>
                                                <td>949582087</td>
                                                <td>0471-2472896</td>
                                                <td>potvm@kkvib.org</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>R.BEENA</td>
                                                <td>VILLAGE INDUSTRIES OFFICER</td>
                                                <td>8921743087</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>KOLLAM</td>
                                                <td>RAJALEKSHMI.S</td>
                                                <td>PROJECT OFFICER</td>
                                                <td>9895116004</td>
                                                <td>0474-2743587</td>
                                                <td>poklm@kkvib.org</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>SUDHAKARAN. V</td>
                                                <td>ASSISTANT REGISTRAR</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>HARIPRASAD.N</td>
                                                <td>VILLAGE INDUSTRIES OFFICER</td>
                                                <td>9446662019</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>PATHANAMTHITTA</td>
                                                <td>M.V.MANOJ KUMAR</td>
                                                <td>PROJECT OFFICER</td>
                                                <td>9496174175</td>
                                                <td>04682-2362070</td>
                                                <td>popta@kkvib.org</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>PRATHEEEP KUMAR T.S</td>
                                                <td>ASSISTANT REGISTRAR</td>
                                                <td>9020209269</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>ALAPPUZHA</td>
                                                <td>LAILA. P.M</td>
                                                <td>PROJECT OFFICER</td>
                                                <td>9446086026</td>
                                                <td>0477-2252341</td>
                                                <td>poalp@kkvib.org</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>SHIBI ANTONY</td>
                                                <td>VILLAGE INDUSTRIES OFFICER (I/C)</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>SHEEBAMOL.D</td>
                                                <td>ASSISTANT REGISTRAR</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>KOTTAYAM</td>
                                                <td>DHANYA DAMODARAN</td>
                                                <td>PROJECT OFFICER</td>
                                                <td>9497625617</td>
                                                <td>0481-2560586</td>
                                                <td>poktm@kkvib.org</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>JESSY JOHN</td>
                                                <td>VILLAGE INDUSTRIES OFFICER</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>SIYA P JOSE</td>
                                                <td>ASSISTANT REGISTRAR</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>IDUKKI</td>
                                                <td>NAZAR.E</td>
                                                <td>PROJECT OFFICER</td>
                                                <td>9447509595</td>
                                                <td>04862-222344</td>
                                                <td>poidk@kkvib.org</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>VILLAGE INDUSTRIES OFFICER</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>ASSISTANT REGISTRAR</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>ERNAKULAM</td>
                                                <td>ASHITHA.P</td>
                                                <td>PROJECT OFFICER</td>
                                                <td>9895081921</td>
                                                <td>0484-4869083</td>
                                                <td>poekm@kkvib.org</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>AJITHA. M</td>
                                                <td>VILLAGE INDUSTRIES OFFICER (I/C)</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>ASSISTANT REGISTRAR</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>THRISSUR</td>
                                                <td>S.SAJEEV</td>
                                                <td>PROJECT OFFICER</td>
                                                <td>9495231570</td>
                                                <td>0487-2338699</td>
                                                <td>potcr@kkvib.org</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>VILLAGE INDUSTRIES OFFICER</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>SINDHU P.K</td>
                                                <td>ASSISTANT REGISTRAR</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>PALAKKAD</td>
                                                <td>KRISHNA</td>
                                                <td>PROJECT OFFICER</td>
                                                <td>9446093769</td>
                                                <td>0491-2534392</td>
                                                <td>popkd@kkvib.org</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>VILLAGE INDUSTRIES OFFICER</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>PREETHA . C</td>
                                                <td>ASSISTANT REGISTRAR</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>MALAPPURAM</td>
                                                <td>HEMAKUMAR S</td>
                                                <td>PROJECT OFFICER</td>
                                                <td>9495408275</td>
                                                <td>0483-2734807</td>
                                                <td>pomlp@kkvib.org</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>SATHYANIRMALA .P</td>
                                                <td>VILLAGE INDUSTRIES OFFICER</td>
                                                <td>9695823721</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>ASSISTANT REGISTRAR</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>KOZHIKODE</td>
                                                <td>VINOD KARIMANI</td>
                                                <td>PROJECT OFFICER</td>
                                                <td>9747075138</td>
                                                <td>0495-2366156</td>
                                                <td>pokzd@kkvib.org</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>NEESHMA</td>
                                                <td>VILLAGE INDUSTRIES OFFICER</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>ASSISTANT REGISTRAR</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>WAYANAD</td>
                                                <td>SUBASH.P</td>
                                                <td>PROJECT OFFICER (I/C)</td>
                                                <td>9895634134</td>
                                                <td>0436-202602</td>
                                                <td>pownd@kkvib.org</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>M.ANITHA</td>
                                                <td>VILLAGE INDUSTRIES OFFICER</td>
                                                <td>9605430800</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>ASSISTANT REGISTRAR</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>KANNUR</td>
                                                <td>JISHA K</td>
                                                <td>PROJECT OFFICER</td>
                                                <td>9495478416</td>
                                                <td>0497-2700057</td>
                                                <td>poknr@kkvib.org</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>VILLAGE INDUSTRIES OFFICER</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>SHOLY DEVSYA</td>
                                                <td>ASSISTANT REGISTRAR</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>KASARGOD</td>
                                                <td>AYISHA. M</td>
                                                <td>PROJECT OFFICER</td>
                                                <td>9447268307</td>
                                                <td>0467-2200585</td>
                                                <td>poksd@kkvib.org</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>SHIBU. V</td>
                                                <td>VILLAGE INDUSTRIES OFFICER</td>
                                                <td>9497854529</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>ASSISTANT REGISTRAR</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>PAYYANNUR KHADI CENTRE</td>
                                                <td>K.V. RAJESH</td>
                                                <td>DIRECTOR</td>
                                                <td>9747410130</td>
                                                <td>04985-202310</td>
                                                <td>dpkc@kkvib.org</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>K.V FAROOK</td>
                                                <td>VILLAGE INDUSTRIES OFFICER</td>
                                                <td>9446656566</td>
                                                <td>04985-206030</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>VINODKUMAR T.V</td>
                                                <td>ASSISTANT REGISTRAR</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>CENTRAL SLIVER PLANT, ETTUKUDUKKA</td>
                                                <td>K.V. RAJESH</td>
                                                <td>PROJECT MANAGER (a/d)</td>
                                                <td>9747410130</td>
                                                <td>04985-280280</td>
                                                <td>pmcpu@kkvib.org</td>
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

export default ProjectOfficers;