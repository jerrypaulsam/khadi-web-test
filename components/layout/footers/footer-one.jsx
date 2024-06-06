import servicesData from "@/components/data/services-data";
import Social from "@/components/data/social";
import Link from "next/link";
import logo from "../../../public/assets/img/logo-5.jpeg";
import govLogo from "../../../public/assets/img/kerala-gov.png";
import industriesLogo from "../../../public/assets/img/dept-of-indcomm.png";

const FooterOne = () => {
    const servicesD = servicesData.slice(0, 4);
    return (
        <>
            <div className="footer__one">
                <img className="footer__one-shape" src="/assets/img/shape/footer-bg.png" alt="Kerala Khadi" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-md-6 col-sm-7 xl-mb-30">
                            <div className="footer__one-widget">
                                <div className="footer__one-widget-about">
                                    <Link href="/"><img src={logo.src} alt="Kerala Khadi & Village Industries Board" /></Link>
                                    <p>Kerala Khadi & Village Industries Board</p>
                                    <div className="footer__one-widget-about-social">
                                        <Social />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-5 sm-mb-30">
                            <div className="footer__one-widget border-one">
                                <h4>More Info</h4>
                                <div className="footer__one-widget-solution">
                                    <ul>
                                        <li><Link href={`/en/tender-notice`}><i className="far fa-chevron-double-right"></i>Tender Notice</Link></li>     
                                        <li><Link href={`#`}><i className="far fa-chevron-double-right"></i>Downloads</Link></li>
                                        <li><Link href={`#`}><i className="far fa-chevron-double-right"></i>Acts & Rules</Link></li>   
                                        <li><Link href="/en/gallery"><i className="far fa-chevron-double-right"></i>Photo Gallery</Link></li>          
                                        <li><Link href="/en/contact"><i className="far fa-chevron-double-right"></i>Contact Us</Link></li>                    
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-6 sm-mb-30">
                            <div className="footer__one-widget border-one">
                                <h4>Head Office</h4>
                                <div className="footer__one-widget-location">
                                    <div className="footer__one-widget-location-item">
                                        <div className="footer__one-widget-location-item-icon">
                                            <i className="far fa-map-marker-alt"></i>
                                        </div>
                                        <div className="footer__one-widget-location-item-info">
                                            <Link href="https://maps.app.goo.gl/qdDud15AoVnWiDAy9" target='_blank'>Vanchiyoor, Trivandrum - 695035</Link>
                                            <Link href="tel:04712471696" >Phone : 0471-2471696</Link>, <Link href="tel:04712471695">0471-2471695</Link>
                                        </div>
                                    </div>
                                    {/* <h6>Branch Office</h6> */}
                                    <div className="footer__one-widget-location-item mt-10">
                                        <Link href="https://kerala.gov.in" target='_blank'><img src={govLogo.src} alt="Government Of Kerala" /></Link>
                                        <Link href="https://keralaindustry.org" target='_blank'><img src={industriesLogo.src} alt="Dept. Of Industries & Commerce" /></Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-6">
                            <div className="footer__one-widget border-one tow">
                                <h4>Subscribe</h4>
                                <div className="footer__one-widget-subscribe">
                                    <p>Join over <span>1,00,000</span> people getting our emails</p>
                                    <form action="#">
                                        <input type="text" name="email" placeholder="Email Address" required />
                                        <button type="submit"><i className="fas fa-paper-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright__one">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <p>Copyright 2024  <Link href="/">Kerala Khadi & Village Industries Board</Link> 
                                - Developed & Maintained By <a href="https://www.shopdibz.com/about-shopdibz" target="_blank">Shopdibz Private Limited</a></p>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>            
        </>
    );
};

export default FooterOne;