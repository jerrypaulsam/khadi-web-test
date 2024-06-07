import Link from 'next/link';
import logo2 from "../../../public/assets/img/logo-5.jpeg";
import Social from '@/components/data/social';

const SideBar = ({ isMalayalam, isOpen, setIsOpen }) => {
    return (
        <>
            <div className={`header__area-menubar-right-sidebar-popup ${isOpen ? 'active' : ''}`}>
                <div className="sidebar-close-btn" onClick={() => setIsOpen(false)}><i className="fal fa-times"></i></div>
                <div className="header__area-menubar-right-sidebar-popup-logo">
                <Link href='/'>
                    <img src={logo2.src} alt="Kerala Khadi & Village Industries Board" />
                </Link>
                </div>
                <p>{isMalayalam ? "കേരള ഖാദി & വില്ലേജ് ഇൻഡസ്ട്രീസ് ബോർഡ്" : "Kerala Khadi & Village Industries Board"}</p>
                <div className="header__area-menubar-right-box-sidebar-popup-contact">
                    <h4 className="mb-30">{isMalayalam ? "ബന്ധപ്പെടുക" : "Get In Touch"}</h4>
                    <div className="header__area-menubar-right-box-sidebar-popup-contact-item">
                        <div className="header__area-menubar-right-box-sidebar-popup-contact-item-icon">
                            <i className="fal fa-phone-alt icon-animation"></i>
                        </div>
                        <div className="header__area-menubar-right-box-sidebar-popup-contact-item-content">
                            <span>{isMalayalam ? "ഫോൺ" : "Call Now"}</span>
                            <h6><a href="tel:04712471694">0471-2471694</a></h6>
                        </div>
                    </div>
                    <div className="header__area-menubar-right-box-sidebar-popup-contact-item">
                        <div className="header__area-menubar-right-box-sidebar-popup-contact-item-icon">
                            <i className="fal fa-envelope"></i>
                        </div>
                        <div className="header__area-menubar-right-box-sidebar-popup-contact-item-content">
                            <span>{isMalayalam ? "ഇ-മെയിൽ" : "Email Us"}</span>
                            <h6><a href="mailto:secretary@kkvib.org">secretary@kkvib.org</a></h6>
                        </div>
                    </div>
                    <div className="header__area-menubar-right-box-sidebar-popup-contact-item">
                        <div className="header__area-menubar-right-box-sidebar-popup-contact-item-icon">
                            <i className="fal fa-map-marker-alt"></i>
                        </div>
                        <div className="header__area-menubar-right-box-sidebar-popup-contact-item-content">
                            <span>{isMalayalam ? "വിലാസം" : "Office Address"}</span>
                            <h6><a href="https://maps.app.goo.gl/qdDud15AoVnWiDAy9">{isMalayalam ? "വഞ്ചിയൂർ, തിരുവനന്തപുരം - 695035" : "Vanchiyoor, Trivandrum - 695035"}</a></h6>
                        </div>
                    </div>
                </div>
                <div className="header__area-menubar-right-box-sidebar-popup-social">
                    <Social />							
                </div>
            </div>
            <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`}></div>
        </>
    );
};

export default SideBar;