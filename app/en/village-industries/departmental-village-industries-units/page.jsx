import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

import image1 from "@/public/assets/img/about/objectives.jpg";

const VillageDepartmentUnits = () => {

    return (
        <>
            <SEO pageTitle="Kerala Khadi - Departmental Village Industries Units" />
            <HeaderOne />
            <BreadCrumb title="Departmental Village Industries Units"  innerTitle="Kerala Khadi & Village Industries Board" />

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
                                    <h3>Departmental Village Industries Units</h3>
                                    <br />
                                    <p>
                                        The Board have directly done certain departmental units in various Village industries. </p>
                                        <br />
                                        <p>Some of the quality branded products are launched viz Naruthen (Honey), Royal Indian and Khadi Barsoap (Washing Soap), Thilajam Gingelly Oil (produced from wooden power ghani), Quality Matresses and Pillows, Cushions made from silk cotton, Royal India Note Books, File Boards, Attractive potterry articles in studio potterry and Ready Made Men shirts made from Cotton, Muslin, Silk, Spun silk and Poly vastra named as Summercool, MILENI, Royal Indian, LEADER, Khadi cool etc.
                                    </p>
                                </div>

                                <div className="team__single-right-experience">
                                    <Link href="#">DEPTL UNITS PERFORMANCE</Link>
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

export default VillageDepartmentUnits;