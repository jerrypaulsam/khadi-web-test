import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

import image1 from "@/public/assets/img/about/objectives.jpg";

const PRODIP = () => {

    return (
        <>
            <SEO pageTitle="Kerala Khadi - Product Development Design Intervention and Packaging (PRODIP)" />
            <HeaderOne />
            <BreadCrumb title="Product Development Design Intervention and Packaging (PRODIP)" innerTitle="Kerala Khadi & Village Industries Board" />

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
                                    <h3>Product Development Design Intervention and Packaging (PRODIP)</h3>
                                    <br />
                                    <p>
                                    To operationalise design related initiatives a new scheme called PRODIP has been started and this will be operated on ‘Project Approach’ basis as individual projects. Board implemented the following projects under it.
                                    </p>
                                    <br />

                                    <li style={{ fontWeight: "bold" }}>Simplification of Kuppadam Weaving.</li>
                                    <li style={{ fontWeight: "bold" }}>Sateen based bedsheet weaving.</li>
                                    <li style={{ fontWeight: "bold" }}>Mosqito net weaving.</li>
                                    <li style={{ fontWeight: "bold" }}>Designing silk saree.</li>
                                    <li style={{ fontWeight: "bold" }}>Improving the packing of honey.</li>
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

export default PRODIP;