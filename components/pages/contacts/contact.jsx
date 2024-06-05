"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../common/breadcrumb";
import ScrollToTop from "../common/scroll/scroll-to-top";
import FooterOne from "@/components/layout/footers/footer-one";

const ContactUs = () => {
    return (
        <>
            <SEO pageTitle="Khadi Board - Contact Us" />
            <HeaderOne />
            <BreadCrumb title="Contact Khadi Board" innerTitle="Contact Information" />
            <div className="contact__page section-padding pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 order-last order-lg-first">
                            <div className="contact__page-form">
                                <h3 className="mb-30">Contact Us</h3>
                                <form action="#" >
                                    <div className="row">
                                        <div className="col-sm-12 mb-20">
                                            <div className="contact__page-form-item contact-item">
                                                <span className="fal fa-user"></span>
                                                <input type="text" name="name" placeholder="Full Name" required="required" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 mb-20">
                                            <div className="contact__page-form-item contact-item">
                                                <span className="far fa-envelope-open"></span>
                                                <input type="email" name="email" placeholder="Email Address" required="required" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 mb-30">
                                            <div className="contact__page-form-item contact-item">
                                                <span className="far fa-comments"></span>
                                                <textarea name="message" placeholder="Type your comments...."></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="contact__page-form-item">
                                                <button className="btn-one" type="submit">Submit Now<i className="far fa-chevron-double-right"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 lg-mb-30">
                            <div className="contact__page-info">
                                <h3 className="mb-60 lg-mb-30">Head Office</h3>
                                <div className="contact__page-info-item">
                                    <h6>Office Address<span>:</span></h6>
                                    <span>Kerala Khadi and Village Industries Board,
                                        Vanchiyoor,
                                        Thiruvananthapuram.695035</span>
                                </div>
                                <div className="contact__page-info-item">
                                    <h6>Email Address <span>:</span></h6>
                                    <span>
                                        <a href="mailto: secretary@kkvib.org">secretary@kkvib.org</a>
                                    </span>
                                </div>
                                <div className="contact__page-info-item">
                                    <h6>Phone Number<span>:</span></h6>
                                    <span>
                                        <a href="tel:04712471696">0471-2471696</a>
                                        <a href="tel:04712471695">0471-2471695</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
            <hr />

                <table className="officals-table pt-10 mt-10 mb-20">
                    <tr>
                        <th>District Office</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                    <tr>
                        <td>District Khadi and Village Industries Office</td>
                        <td>Thiruvananthapuram Uppalam Road, Statue, Trivandrum 695 001</td>
                        <td>0471-2472896</td>
                        <td>potvm@kkvib.org</td>
                    </tr>
                    <tr>
                        <td>District Khadi and Village Industries Office</td>
                        <td>Kollam Karabala Junction, Kollam 691 001</td>
                        <td>0474-2743587</td>
                        <td>poklm@kkvib.org</td>
                    </tr>
                    <tr>
                        <td>District Khadi and Village Industries Office</td>
                        <td>Pathanamthitta Elanathoor P.O, Pathanamthitta 686 643</td>
                        <td>0468-2362070</td>
                        <td>popta@kkvib.org</td>
                    </tr>
                    <tr>
                        <td>District Khadi and Village Industries Office</td>
                        <td>Alappuzha Medical Collage Road, Alappuzha 688 001</td>
                        <td>0477-2252341</td>
                        <td>poalp@kkvib.org</td>
                    </tr>
                    <tr>
                        <td>District Khadi and Village Industries Office</td>
                        <td>Kottayam Near SNV Sadanam, Chelliyozhukkam Road, Kottayam 686 001</td>
                        <td>0481-2560586</td>
                        <td>poktm@kkvib.org</td>
                    </tr>
                    <tr>
                        <td>District Khadi and Village Industries Office</td>
                        <td>Idukki Pulimoottil Buildings, Idukki Road, Thopdupuzha 685 584</td>
                        <td>04862-222344</td>
                        <td>poidk@kkvib.org</td>
                    </tr>
                    <tr>
                        <td>District Khadi and Village Industries Office</td>
                        <td>Ernakulam Khadi Tower, Kaloor, Ernakulam 682 017</td>
                        <td>0484-2339080</td>
                        <td>poekm@kkvib.org</td>
                    </tr>
                    <tr>
                        <td>District Khadi and Village Industries Office</td>
                        <td>Thrissur Palace Road, Chempukavu, Thrissur 680 020</td>
                        <td>0487-2338699</td>
                        <td>potcr@kkvib.org</td>
                    </tr>
                    <tr>
                        <td>District Khadi and Village Industries Office</td>
                        <td>Palakkad West Fort, Palakkad 678 001</td>
                        <td>0491-2534392</td>
                        <td>popkd@kkvib.org</td>
                    </tr>
                    <tr>
                        <td>District Khadi and Village Industries Office</td>
                        <td>Malappuram Downhill, Malappuram 676 519</td>
                        <td>0483-2734807</td>
                        <td>pomlp@kkvib.org</td>
                    </tr>
                    <tr>
                        <td>District Khadi and V.I. Office</td>
                        <td>Kozhikkode Cherootty Road, Kozhikkode 673 032</td>
                        <td>0495-2366156</td>
                        <td>pokzd@kkvib.org</td>
                    </tr>
                    <tr>
                        <td>District Khadi and Village Industries Office</td>
                        <td>Wayanad Kalpetta, Wayanad 673 121</td>
                        <td>04936-202602</td>
                        <td>pownd@kkvib.org</td>
                    </tr>
                    <tr>
                        <td>District Khadi and Village Industries Office</td>
                        <td>Kannur Near Civil Station, Kannur 670 002</td>
                        <td>0497-2700057</td>
                        <td>poknr@kkvib.org</td>
                    </tr>
                    <tr>
                        <td>District Khadi and V.I. Office</td>
                        <td>Kasaragode Ram Nagar, Anandasramam.P.O Kasaragod 671 531</td>
                        <td>0467-2200585</td>
                        <td>poksd@kkvib.org</td>
                    </tr>
                    <tr>
                        <td>Payyannur Khadi Centre</td>
                        <td>Payyannur</td>
                        <td>04985-202310, 202590</td>
                        <td>dpkc@kkvib.org</td>
                    </tr>
                    <tr>
                        <td>Project Manager Central Sliver Plant</td>
                        <td>Ettukudukka (Via) Karivelloor Kannur 670 521</td>
                        <td>04985-280280</td>
                        <td>pmcpu@kkvib.org</td>
                    </tr>
                </table>
            </div>

            <div className="contact__page-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.0582514026596!2d76.9418218!3d8.4937175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb5711525629%3A0xa562e223398375f6!2sKerala%20Khadi%20%26%20Village%20Industries%20Board%20Khadi%20Grama%20Soubhagya%20Trivandrum!5e0!3m2!1sen!2sin!4v1717310060081!5m2!1sen!2sin" loading="lazy"></iframe>
            </div>

            <div className='all-footer'>
                <FooterOne />
            </div>
            <ScrollToTop />
        </>
    );
};

export default ContactUs;