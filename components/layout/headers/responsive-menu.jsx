"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const ResponsiveMenu = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const active = (value) => setActiveMenu(value === activeMenu ? null : value),
        activeIcon = (value) => (activeMenu == value ? "mean-clicked" : ""),
        activeSubMenu = (value) =>
            value == activeMenu ? { display: "block" } : { display: "none" };

    const [activeMenus, setActiveMenus] = useState(null);
    const actives = (value) => setActiveMenus(value === activeMenus ? null : value),
        activeIcons = (value) => (activeMenus == value ? "mean-clicked" : ""),
        activeSubMenus = (value) =>
            value == activeMenus ? { display: "block" } : { display: "none" };
    return (
        <>
            <ul>
                <li className='menu-item-has-children'><Link href=''>About</Link>
                    <ul className='sub-menu' style={activeSubMenu("home")}>
                        <li><Link href='/en/about-us/mission'>Mission & Vision</Link></li>
                        <li><Link href='/en/about-us/objectives'>Objectives</Link></li>
                        <li><Link href='/en/about-us/schemes'>Our Schemes</Link></li>
                        <li><Link href='/'>Citizen's Charter</Link></li>
                        <li><Link href=''>Acts & Rules</Link></li>
                        <li><Link href='/'>Organization Structure</Link></li>
                        <li><Link href='/'>Board Members</Link></li>
                        <li><Link href='/en/important-officials'>Important Officials</Link></li>
                        <li><Link href='/en/project-officers'>Project Officers</Link></li>
                        <li className='menu-item-has-children'><Link href='#'>Marketing</Link>
                            <ul className='sub-menu'>
                                <li><Link href='/en/marketing/khadi-grama-soubhagyas'>Kerala Khadi Grama Soubhagyas</Link></li>
                                <li><Link href='#'>Sales Performance</Link></li>
                                <li><Link href='/en/marketing/rebate-on-retail-sale-on-khadi'>Rebates on Retail Sale</Link></li>
                            </ul>
                        </li>
                        <li className='menu-item-has-children'><Link href='#'>RTI Act</Link>
                            <ul className='sub-menu'>
                                <li><Link href='/'>Officers Details</Link></li>
                                <li><Link href='/'>RTI Fees</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <a className={`mean-expand ${activeIcon("home")}`} onClick={() => active("home")}></a>

                </li>

                <li className='menu-item-has-children'><Link href='#'>Khadi</Link>
                    <ul className='sub-menu' style={activeSubMenu("pages")}>
                        <li><Link href='/en/khadi/khadi-program'>Khadi Program</Link></li>
                        <li><Link href='/en/khadi/welfare-measures'>Welfare Measures</Link></li>
                        <li><Link href='/'>Departmental Units</Link></li>
                        <li><Link href='/en/khadi/details-of-the-khadi-institutions'>Khadi Institutions</Link></li>
                        <li><Link href='/'>Performance</Link></li>
                        <li><Link href='/'>Workers Welfare Fund Board</Link></li>
                        {/* <li><Link href='/'>Work Study Report</Link></li> */}
                    </ul>
                    <a className={`mean-expand ${activeIcon("pages")}`} onClick={() => active("pages")}></a>

                </li>

                <li className='menu-item-has-children'><Link href='#'>Village Industries</Link>
                    <ul className='sub-menu' style={activeSubMenu("village")}>
                        <li><Link href='/en/village-industries/village-industries-program'>Village Industries Program</Link></li>
                        <li><Link href='#'>SEGP Guidelines</Link></li>
                        <li><Link href='/en/village-industries/departmental-village-industries-units'>Departmental Village Industrial Units</Link></li>
                    </ul>
                    <a className={`mean-expand ${activeIcon("village")}`} onClick={() => active("village")}></a>
                </li>

                <li className='menu-item-has-children'><Link href='#'>PMEGP</Link>
                    <ul className='sub-menu' style={activeSubMenu("pmegp")}>
                        <li><Link href='/en/pmegp/about-scheme'>About the Scheme</Link></li>
                        <li><Link href='/en/pmegp/list-of-industries'>List of Industries</Link></li>
                        <li><Link href='/en/pmegp/faq'>FAQ</Link></li>
                        <li><Link href='#'>Application Form</Link></li>
                        <li><Link href='/en/pmegp/performance'>Performance</Link></li>
                    </ul>
                    <a className={`mean-expand ${activeIcon("pmegp")}`} onClick={() => active("pmegp")}></a>
                </li>

                <li className='menu-item-has-children'><Link href='#'>Contact</Link>
                    <ul className='sub-menu' style={activeSubMenu("contact")}>
                        <li><Link href='/en/contact'>Contact Us</Link></li>
                    </ul>
                    <a className={`mean-expand ${activeIcon("contact")}`} onClick={() => active("contact")}></a>
                </li>
            </ul>
        </>
    );
};

export default ResponsiveMenu;