import Link from 'next/link';
import React from 'react';

const MainMenu = () => {
    return (
        <>    
            <ul>
                {/* <li><Link href='/'>Home</Link></li>  */} 
                <li className='menu-item-has-children'><Link href=''>About</Link>
                    <ul className='sub-menu'>
                        <li><Link href='/en/about-us/mission'>Mission & Vision</Link></li>
                        <li><Link href='/en/about-us/objectives'>Objectives</Link></li>
                        <li><Link href='/en/about-us/schemes'>Our Schemes</Link></li>
                        <li><Link href='/'>Citizen's Charter</Link></li>
                        <li><Link href='/en/acts-rules'>Acts & Rules</Link></li>
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
                </li>   
                <li className='menu-item-has-children'><Link href='#'>Khadi</Link>
                    <ul className='sub-menu'>
                        <li><Link href='/en/khadi/khadi-program'>Khadi Program</Link></li>
                        <li><Link href='/en/khadi/welfare-measures'>Welfare Measures</Link></li>
                        <li><Link href='/'>Departmental Units</Link></li>
                        <li><Link href='/en/khadi/details-of-the-khadi-institutions'>Khadi Institutions</Link></li>
                        <li><Link href='/'>Performance</Link></li>
                        <li><Link href='/'>Workers Welfare Fund Board</Link></li>
                        {/* <li><Link href='/'>Work Study Report</Link></li> */}
                    </ul>
                </li>
                <li className='menu-item-has-children'><Link href='#'>Village Industries</Link>
                    <ul className='sub-menu'>
                        <li><Link href='/en/village-industries/village-industries-program'>Village Industries Program</Link></li>
                        <li><Link href='#'>SEGP Guidelines</Link></li>
                        <li><Link href='/en/village-industries/departmental-village-industries-units'>Departmental Village Industrial Units</Link></li>
                    </ul>
                </li>
                <li className='menu-item-has-children'><Link href='#'>PMEGP</Link>
                    <ul className='sub-menu'>
                        <li><Link href='/en/pmegp/about-scheme'>About the Scheme</Link></li>
                        <li><Link href='/en/pmegp/list-of-industries'>List of Industries</Link></li>
                        <li><Link href='/en/pmegp/faq'>FAQ</Link></li>
                        <li><Link href='#'>Application Form</Link></li>
                        <li><Link href='/en/pmegp/performance'>Performance</Link></li>
                    </ul>
                </li>

                {/* <li className='menu-item-has-children'><Link href='#'>Marketing</Link>
                    <ul className='sub-menu'>
                        <li><Link href='/blog'>Blog Grid</Link></li>
                        <li><Link href='/blog-standard'>Blog Standard</Link></li>
                        <li><Link href='/blog/revamp-your-business-with-expert-consulting'>Blog Details</Link></li>
                    </ul>
                </li> */}

                {/* <li className='menu-item-has-children'><Link href='#'>Contact Us</Link>
                    <ul className='sub-menu'>
                        <li><Link href='/contact'>Contact Style 01</Link></li>
                        <li><Link href='/contact-two'>Contact Style 02</Link></li>
                        <li><Link href='/contact-three'>Contact Style 03</Link></li>
                        <li><Link href='/contact-four'>Contact Style 04</Link></li>
                    </ul>
                </li>       */}
            </ul>  
        </>
    );
};

export default MainMenu;