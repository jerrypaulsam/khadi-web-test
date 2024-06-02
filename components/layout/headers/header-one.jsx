"use client";

import Social from '@/components/data/social';
import Link from 'next/link';
import MainMenu from './header-menu';
import Search from './search';
import { useEffect, useState } from 'react';
import SideBar from './offcanvas';
import MobileMenuOne from './menu_sidebar/menu-one';
import logo1 from "../../../public/assets/img/logo-1.png";
import logo2 from "../../../public/assets/img/logo-5.jpeg";

const HeaderOne = ({variant}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [menuSidebar, setMenuSidebar] = useState(false);
    const [search, setSearch] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.scrollY > 150) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
        });
    }, []);
    return (
        <>
            <div className="top__bar">
                <div className="container custom__container">
                    <div className="row">
                        <div className="col-xl-5 col-md-6">
                            <div className="top__bar-left">
                                <Link href="https://maps.app.goo.gl/qdDud15AoVnWiDAy9" target='_blank' ><i className="far fa-map-marker-alt"></i>Vanchiyoor, Trivandrum - 695035</Link>
                            </div>
                        </div>
                        <div className="col-xl-7 ">
                            <div className="top__bar-right" style={{ display: 'flex', alignItems: 'center' }}> 
                                <Link href="tel:0471-2471694" ><i className="fas fa-phone" ></i>0471-2471694</Link>
                                <Link href="mailto:secretary@kkvib.org"><i className="fas fa-envelope ml-10"></i>secretary@kkvib.org</Link>
                                <div className="top__bar-right-social d-none d-sm-block">
                                    <Social /> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`header__area ${ variant ? variant : "" } header__sticky ${isSticky ? "header__sticky-sticky-menu" : ""}`}>
                <div className="container custom__container">
                    <div className="header__area-menubar">
                        <div className="header__area-menubar-left">
                            <div className="header__area-menubar-left-logo">
                                <Link href='/' style={{ display: 'flex', alignItems: 'center' }}>
                                    <img className='dark-n' src={logo2.src} alt='Kerala Khadi & Village Industries Board' />
                                    <h1 className='dark-n' style={{fontSize: "15px", marginLeft: "7px"}}>Kerala Khadi & Village Industries Board</h1>
                                    
                                    <img className="light-n" src={logo2.src} alt="Kerala Khadi & Village Industries Board" /> 
                                    <h1 className='light-n' style={{fontSize: "15px", marginLeft: "7px"}}>Kerala Khadi & Village Industries Board</h1>
                                </Link>
                            </div>
                        </div>
                        <div className="header__area-menubar-center">
                            <div className="header__area-menubar-center-menu menu-responsive">
                                <MainMenu />                               
                            </div>
                        </div>
                        <div className="header__area-menubar-right">
                            <div className="header__area-menubar-right-box">
                                {/* <div className="header__area-menubar-right-box-search">
                                    <div className="search">	
                                        <span className="header__area-menubar-right-box-search-icon open" onClick={() => setSearch(true)}>
                                            <i className="fal fa-search"></i>
                                        </span>
                                    </div>
                                    <Search isOpen={search} setIsOpen={setSearch} />
                                </div> */}
                                <div className="header__area-menubar-right-sidebar">
                                    <div className="header__area-menubar-right-sidebar-popup-icon" onClick={() => setSidebarOpen(true)}>
                                        <i className="flaticon-menu"></i>                          
                                    </div>
                                </div>
                                {/* <div className="header__area-menubar-right-box-btn">
                                <Link className="btn-one" href="/request-quote">Request quote<i className="far fa-chevron-double-right"></i></Link>
                                </div> */}
                                <div className="header__area-menubar-right-responsive-menu menu__bar">
                                    <i className="flaticon-menu" onClick={() => setMenuSidebar(true)}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SideBar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
            <MobileMenuOne isOpen={menuSidebar} setIsOpen={setMenuSidebar} />
        </>
    );
};

export default HeaderOne;