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
                                <h2 className="mb-60 lg-mb-30">Head Office</h2>
                                <div className="contact__page-info-item">
                                    <h6>Office Address<span>:</span></h6>
                                    <span>Kerala Khadi and Village Industries Board
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