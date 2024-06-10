"use client"

import { useEffect, useState } from 'react';
import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

import image1 from "@/public/assets/img/pages/PMEGP.jpg";

const PMEGPPerformance = () => {
    const [isMalayalam, setIsMalayalam] = useState(false);

    useEffect(() => {
        let language = localStorage.getItem("language");
        if ((language === null && language === undefined) || language === "eng") {
            setIsMalayalam(false)
        } else {
            setIsMalayalam(true)
        }

    }, [isMalayalam]);

    return (
        <>
            <SEO pageTitle="Kerala Khadi - PMEGP Performance" />
            <HeaderOne />
            <BreadCrumb title="PMEGP Performance" innerTitle="Kerala Khadi - PMEGP Performance" />

            <div className="team__single section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 lg-mb-30">
                            <div className="team__single-left">
                                <div className="team__single-left-thumb dark__image">
                                    <img src={image1.src} alt="PMEGP Performance" />

                                </div>

                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7">
                            <div className="team__single-right">
                                <div className="team__single-right-experience">
                                    <h3>PMEGP Performance</h3>
                                    <br />
                                    <p>
                                        Prime ministers employment programm yearwise performance of the implimentation through board

                                    </p>
                                    <br />

                                    <table className="officals-table">
                                        <tr>
                                            <th>YEAR</th>
                                            <th>NO. OF UNITS SANCTIONED</th>
                                            <th>PROJECT COST<br />(Rs. In Lakh)</th>
                                            <th>MARGIN MONEY GRANT SANCTIONED</th>
                                            <th>EMPLOYMENT GENERATED<br />Nos.</th>
                                        </tr>
                                        <tr>
                                            <td>2008-2009</td>
                                            <td>58</td>
                                            <td>388.39</td>
                                            <td>133.58</td>
                                            <td>404</td>
                                        </tr>
                                        <tr>
                                            <td>2009-2010</td>
                                            <td>411</td>
                                            <td>2723.73</td>
                                            <td>922.85</td>
                                            <td>2978</td>
                                        </tr>
                                        <tr>
                                            <td>2010-2011</td>
                                            <td>462</td>
                                            <td>2830.51</td>
                                            <td>968.56</td>
                                            <td>3312</td>
                                        </tr>
                                        <tr>
                                            <td>2011-2012</td>
                                            <td>393</td>
                                            <td>2565.57</td>
                                            <td>905.31</td>
                                            <td>2884</td>
                                        </tr>
                                        <tr>
                                            <td>2012-2013</td>
                                            <td>374</td>
                                            <td>2378.57</td>
                                            <td>824.76</td>
                                            <td>2421</td>
                                        </tr>
                                        <tr>
                                            <td>2013-2014</td>
                                            <td>399</td>
                                            <td>2416.78</td>
                                            <td>820.13</td>
                                            <td>3907</td>
                                        </tr>
                                        <tr>
                                            <td>2014-2015</td>
                                            <td>368</td>
                                            <td>2418.12</td>
                                            <td>813.62</td>
                                            <td>2876</td>
                                        </tr>
                                        <tr>
                                            <td>2015-2016</td>
                                            <td>339</td>
                                            <td>2391.89</td>
                                            <td>819.46</td>
                                            <td>2906</td>
                                        </tr>
                                        <tr>
                                            <td>2016-2017</td>
                                            <td>419</td>
                                            <td>2842.2</td>
                                            <td>994.48</td>
                                            <td>3746</td>
                                        </tr>
                                        <tr>
                                            <td>2017-2018</td>
                                            <td>139</td>
                                            <td>1039.74</td>
                                            <td>360.69</td>
                                            <td>1101</td>
                                        </tr>
                                        <tr>
                                            <td>2018-2019</td>
                                            <td>407</td>
                                            <td>3293.93</td>
                                            <td>1124.41</td>
                                            <td>3774</td>
                                        </tr>
                                        <tr>
                                            <td>2019-2020</td>
                                            <td>367</td>
                                            <td>2146.69</td>
                                            <td>917.98</td>
                                            <td>3520</td>
                                        </tr>
                                        <tr>
                                            <td>2020-2021</td>
                                            <td>275</td>
                                            <td>2107.66</td>
                                            <td>723.03</td>
                                            <td>2337</td>
                                        </tr>
                                        <tr>
                                            <td>2021-2022</td>
                                            <td>261</td>
                                            <td>1976.06</td>
                                            <td>806</td>
                                            <td>2516</td>
                                        </tr>
                                        <tr>
                                            <td>2022-2023 (up to 17/12/2022)</td>
                                            <td>136</td>
                                            <td>1411.22</td>
                                            <td>486.25</td>
                                            <td>470</td>
                                        </tr>
                                        <tr>
                                            <td>2023-2024</td>
                                            <td>150</td>
                                            <td>1500.00</td>
                                            <td>500.00</td>
                                            <td>500</td>
                                        </tr>
                                        <tr>
                                            <th>TOTAL</th>
                                            <th>4,958</th>
                                            <th>34,431.06</th>
                                            <th>11,152.55</th>
                                            <th>39,652</th>
                                        </tr>
                                    </table>

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

export default PMEGPPerformance;