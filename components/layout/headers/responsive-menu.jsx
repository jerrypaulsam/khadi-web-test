"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const ResponsiveMenu = ({ isMalayalam }) => {
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
                <li className='menu-item-has-children'><Link href=''>{isMalayalam ? "എബൌട്ട് " : "About"}</Link>
                    <ul className='sub-menu' style={activeSubMenu("home")}>
                    <li><Link href={`/${isMalayalam ? "mal" : "en"}/about-us/mission`}>{isMalayalam ? "വീക്ഷണവും ദൗത്യവും" : "Mission & Vision"}</Link></li>
                        <li><Link href={`/${isMalayalam ? "mal" : "en"}/about-us/objectives`}>{isMalayalam ? "ഉദ്ദേശലക്ഷ്യങ്ങൾ" : "Objectives"}</Link></li>
                        <li><Link href={`/${isMalayalam ? "mal" : "en"}/about-us/schemes`}>{isMalayalam ? "പദ്ധതികൾ" : "Our Schemes"}</Link></li>
                        <li><Link href={`#`}>{isMalayalam ? "പൗരാവകാശ രേഖ" : "Citizen's Charter"}</Link></li>
                        <li><Link href={`${isMalayalam ? "mal" : "en"}/acts-rules`}>{isMalayalam ? "നിയമവും ചട്ടവും" : "Acts & Rules"}</Link></li>
                        <li><Link href={`/${isMalayalam ? "mal" : "en"}/about-us/organizational-structure`}>{isMalayalam ? "ഘടന" : "Organization Structure"}</Link></li>
                        <li><Link href={`/${isMalayalam ? "mal" : "en"}/about-us/board-members`}>{isMalayalam ? "ബോർഡ് അംഗങ്ങൾ " : "Board Members"}</Link></li>
                        <li><Link href={`/${isMalayalam ? "mal" : "en"}/important-officials`}>{isMalayalam ? "പ്രധാന അധികാരികൾ" : "Important Officials"}</Link></li> 
                        <li><Link href={`/${isMalayalam ? "mal" : "en"}/project-officers`}>{isMalayalam ? "ജില്ലാ അധികാരികൾ" : "Project Officers"}</Link></li>
                        <li className='menu-item-has-children'><Link href={`#`}>{isMalayalam ? "വിപണനം" : "Marketing"}</Link>
                            <ul className='sub-menu'>
                                <li><Link href={`/${isMalayalam ? "mal" : "en"}/marketing/khadi-grama-soubhagyas`}>{isMalayalam ? "ഖാദി ഗ്രാമ സൗഭാഗ്യകൾ" : "Kerala Khadi Grama Soubhagyas"}</Link></li>
                                <li><Link href={`#`}>{isMalayalam ? "സെയിൽസ് പെർഫോർമൻസ്" : "Sales Performance"}</Link></li>
                                <li><Link href={`/${isMalayalam ? "mal" : "en"}/marketing/rebate-on-retail-sale-on-khadi`}>{isMalayalam ? "ഖാദി റീറ്റെയ്ൽ ഇളവ്" : "Rebates on Retail Sale"}</Link></li>
                            </ul>
                        </li>
                        <li className='menu-item-has-children'><Link href={`#`}>{isMalayalam ? "വിവരാവകാശ നിയമം" : "RTI Act"}</Link>
                            <ul className='sub-menu'>
                                <li><Link href={`#`}>{isMalayalam ? "ഓഫീസറുടെ ഡീറ്റെയിൽസ്" : "Officers Details"}</Link></li>
                                <li><Link href={`#`}>{isMalayalam ? "ആർ.ടി.ഐ ഫീസ് " : "RTI Fees"}</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <a className={`mean-expand ${activeIcon("home")}`} onClick={() => active("home")}></a>

                </li>

                <li className='menu-item-has-children'><Link href='#'>{isMalayalam ? "ഖാദി" : "Khadi"}</Link>
                    <ul className='sub-menu' style={activeSubMenu("pages")}>
                    <li><Link href={`/${isMalayalam ? "mal" : "en"}/khadi/khadi-program`}>{isMalayalam ? "ഖാദി പരിപാടികൾ" : "Khadi Program"}</Link></li>
                        <li><Link href={`/${isMalayalam ? "mal" : "en"}/khadi/welfare-measures`}>{isMalayalam ? "ക്ഷേമ നടപടികൾ" : "Welfare Measures"}</Link></li>
                        <li><Link href={`/${isMalayalam ? "mal" : "en"}/khadi/departmental-units`}>{isMalayalam ? "ഡിപ്പാർട്ട്മെൻറ്റൽ യൂണിറ്റുകൾ" : "Departmental Units"}</Link></li>
                        <li><Link href={`/${isMalayalam ? "mal" : "en"}/khadi/details-of-the-khadi-institutions`}>{isMalayalam ? "ഖാദി സ്ഥാപനങ്ങൾ" : "Khadi Institutions"}</Link></li>
                        <li><Link href={`#`}>{isMalayalam ? "പ്രകടനമികവ് " : "Performance"}</Link></li>
                        <li><Link href={`#`}>{isMalayalam ? "തൊഴിലാളി ക്ഷേമനിധി ബോർഡ്" : "Workers Welfare Fund Board"}</Link></li>
                    </ul>
                    <a className={`mean-expand ${activeIcon("pages")}`} onClick={() => active("pages")}></a>

                </li>

                <li className='menu-item-has-children'><Link href='#'>{isMalayalam ? "ഗ്രാമവ്യവസായങ്ങൾ" : "Village Industries"}</Link>
                    <ul className='sub-menu' style={activeSubMenu("village")}>
                    <li><Link href={`/${isMalayalam ? "mal" : "en"}/village-industries/village-industries-program`}>{isMalayalam ? "ഗ്രാമ വ്യവസായ കാര്യപരിപാടികൾ" : "Village Industries Program"}</Link></li>
                        <li><Link href={`#`}>{isMalayalam ? "എസ്.ഇ.ജി.പി  മാർഗ്ഗനിർദ്ദേശങ്ങൾ" : "SEGP Guidelines"}</Link></li>
                        <li><Link href={`/${isMalayalam ? "mal" : "en"}/village-industries/departmental-village-industries-units`}>{isMalayalam ? "ഡിപ്പാർട്ട്മെൻറ്റൽ ഗ്രാമ വ്യവസായ യൂണിറ്റുകൾ" : "Departmental Village Industrial Units"}</Link></li>
                    </ul>
                    <a className={`mean-expand ${activeIcon("village")}`} onClick={() => active("village")}></a>
                </li>

                <li className='menu-item-has-children'><Link href='#'>{isMalayalam ? "പി.എം.ഇ.ജി.പി" : "PMEGP"}</Link>
                    <ul className='sub-menu' style={activeSubMenu("pmegp")}>
                        <li><Link href={`/${isMalayalam ? "mal" : "en"}/pmegp/about-scheme`}>{isMalayalam ? "പദ്ധതിയെകുറിച്ച് " : "About the Scheme"}</Link></li>
                        <li><Link href={`/${isMalayalam ? "mal" : "en"}/pmegp/list-of-industries`}>{isMalayalam ? "വ്യവസായങ്ങളുടെ പട്ടിക" : "List of Industries"}</Link></li>
                        <li><Link href={`/${isMalayalam ? "mal" : "en"}/pmegp/faq`}>{isMalayalam ? "സംശയങ്ങൾ" : "FAQ"}</Link></li>
                        <li><Link href={`#`}>{isMalayalam ? "അപേക്ഷ ഫോറം" : "Application Form"}</Link></li>
                        <li><Link href={`/${isMalayalam ? "mal" : "en"}/pmegp/performance`}>{isMalayalam ? "മികവ്" : "Performance"}</Link></li>
                    </ul>
                    <a className={`mean-expand ${activeIcon("pmegp")}`} onClick={() => active("pmegp")}></a>
                </li>

                <li className='menu-item-has-children'><Link href='#'>{isMalayalam ? "ബന്ധപ്പെടുക" : "Contact"}</Link>
                    <ul className='sub-menu' style={activeSubMenu("contact")}>
                        <li><Link href={`/${isMalayalam ? "mal" : "en"}/contact`}>{isMalayalam ? "ബന്ധപ്പെടുക" : "Contact Us"}</Link></li>
                    </ul>
                    <a className={`mean-expand ${activeIcon("contact")}`} onClick={() => active("contact")}></a>
                </li>
            </ul>
        </>
    );
};

export default ResponsiveMenu;