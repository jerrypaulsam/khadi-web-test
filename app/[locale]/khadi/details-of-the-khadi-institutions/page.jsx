"use client"

import { useEffect, useState } from 'react';

import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

import image1 from "@/public/assets/img/about/objectives.jpg";

const KhadiInstitutions = () => {
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
            <SEO pageTitle={isMalayalam ? "കേരള ഖാദി - ഖാദി സ്ഥാപനങ്ങളുടെ വിശദാംശങ്ങൾ" : "Kerala Khadi - Details of the Khadi Institutions"} />
            <HeaderOne isMalayalam={isMalayalam} />
            <BreadCrumb title={isMalayalam ? "ഖാദി സ്ഥാപനങ്ങളുടെ വിശദാംശങ്ങൾ" : "Details of the Khadi Institutions"} innerTitle={isMalayalam ? "കേരള ഖാദി & വില്ലേജ് ഇൻഡസ്ട്രീസ് ബോർഡ്" : "Kerala Khadi & Village Industries Board"} />

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
                                    <h3>{isMalayalam ? "ഖാദി സ്ഥാപനങ്ങളുടെ വിശദാംശങ്ങൾ" : "Details of the Khadi Institutions"}</h3>
                                    <br />
                                    <p>
                                        DETAILS OF THE KHADI INSTITUTIONS FINANCED BY THE BOARD
                                    </p>
                                    <br />

                                    <table className="officals-table">
                                        <thead>
                                            <tr>
                                                <th>Sl.No</th>
                                                <th>Name & Address of the Institution</th>
                                                <th>Contact No</th>
                                                <th>Email id</th>
                                                <th>Category</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Kokkottela Khadi Ulpadaka Vipanana Sahakarana Sanghom Ltd. No. KV IND (T)22, Aryanad, Kokkottela P.O., Trivandrum 695 542</td>
                                                <td>0472-2852906, 8547519845</td>
                                                <td></td>
                                                <td>A+</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Maranallur Khadi Grama Vyavasaya Sahakarana Sanghom, Ltd. NO. KVIND(T) 12, Maranallur, Pongummodu, Kandala. P.O. Trivandrum 695 512</td>
                                                <td>9400497852</td>
                                                <td></td>
                                                <td>A+</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Chavara Bolck Khadi Producers Industrial co-Op: society. Ltd No. C.IND (Q)152, Thevalakkara. P.O. Kollam 690 524</td>
                                                <td>0476-2872033, 9447559751</td>
                                                <td></td>
                                                <td>A</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Vettikkavala Block Khadi Producer’s Industrial Co-Op: society Ltd. No. KVIND (Q) 150, Puthur. P.O., Kottarakkara, Kollam</td>
                                                <td>9048035377</td>
                                                <td></td>
                                                <td>A</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>Kerala Service Sangh, Perunnai. P.O, changansserry, Kottayam 686 102</td>
                                                <td>0481-2421329, 9745831345</td>
                                                <td></td>
                                                <td>A</td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>Arpookkara Khadi & Village Industries Co-Op: society Ltd. No. KVIND (K) 115, Arppookkara, Gandhi Nagar. P.O. Kottayam 686 008</td>
                                                <td>0476-2872033, 9447559751</td>
                                                <td></td>
                                                <td>A</td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td>Kaduthuruthy NES Block Vanitha Khadi & Village Industries Co-Op society Ltd. No. CIND (K) 4, Kaduthuruthy, Kottayam 680 121</td>
                                                <td>04829-282202, 04829-282452</td>
                                                <td></td>
                                                <td>A</td>
                                            </tr>
                                            <tr>
                                                <td>8</td>
                                                <td>Gandhi Smaraka Grama Seva Kendram, Nanthiattukunna, North Paravoor, Ernakulam Dist: 683 513</td>
                                                <td>0484-2508232, 94955012199</td>
                                                <td>kgvnkm@rediffmail.com</td>
                                                <td>A+</td>
                                            </tr>
                                            <tr>
                                                <td>9</td>
                                                <td>Irinjalakuda Khadi Producers Industrrial Co-Op: society, Ltd. NO. KVIND (R) 95, Irinjalakuda P.O. Thrissur dist. 680 121</td>
                                                <td>0480-2823928</td>
                                                <td></td>
                                                <td>A</td>
                                            </tr>
                                            <tr>
                                                <td>10</td>
                                                <td>Manappuram spinners & Weavers Association, Nattika, Valappad,P.O., Thrissur. 680 567</td>
                                                <td>0487-2401506, 9400282298</td>
                                                <td></td>
                                                <td>A</td>
                                            </tr>
                                            <tr>
                                                <td>11</td>
                                                <td>Thrissur District Khadi Co-Operative society Ltd. No. 393, Cherpu .P.O, Thrissur 680 560</td>
                                                <td>0487-2342136, 9495046501</td>
                                                <td>tdkcscherpu@gmail.com</td>
                                                <td>A</td>
                                            </tr>
                                            <tr>
                                                <td>12</td>
                                                <td>Akathethara Khadi Producers Industrial Co-Op: society Ltd. No. KVIND (P) 68, Akathethara. P.O, Palakkad 678 008.</td>
                                                <td>9645181488</td>
                                                <td></td>
                                                <td>A</td>
                                            </tr>
                                            <tr>
                                                <td>13</td>
                                                <td>Payyannur Firka Gramodaya Khadi sangh, Payyannur, Payyannur. P.O., Kannur. 670 307</td>
                                                <td>04985-205825, 9447519345</td>
                                                <td>payyannurfirkakhadi@gmail.com</td>
                                                <td>A+</td>
                                            </tr>
                                            <tr>
                                                <td colspan="5">DETAILS OF THE KHADI INSTITUTIONS DIRECTLY AIDED BY KVIC</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Kerala Gandhi Smaraka Nidhi. Gandhi Bhavan, Thycaud, Post Box NO. 419, Trivandrum 690 014</td>
                                                <td>0471-2323708, 8547454244</td>
                                                <td>kgsntvm@gmail.com</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Trivandrum Sarvodaya Sangh, Ooruttukala, Neyyattinkara, Trivandrum 695 121</td>
                                                <td>0471-2222469, 9446052470</td>
                                                <td>tvpmsarvodyasangh@gmail.com</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Kerala Educational Development and Employment society, Reg. NO. 509, Sangheeth Nagar, Thycad, Trivandrum 695 014</td>
                                                <td>0471-2322426, 9447064944</td>
                                                <td>kedesindia@yahoo.com</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Kasturba Mahila Samajam, Parassala. Po, Trivandrum 695 502</td>
                                                <td>9605938114</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>Friends Forum, Puthenkulam, Parassuvaikal, P.O, Neyyattinkara, Trivandrum 695 508</td>
                                                <td>0471-2203999, 9447402208</td>
                                                <td>friendsforumkv@gmail.com</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>Grama Seva Bhavan, Thirupuram, Kanchampazhanji. P.O, Neyyattinkara, Trivandrum 695525</td>
                                                <td>0471-2322426, 9447064944</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td>G.R. Khadi Saree Production Centre, Madhavai Mandiram Lok Seva Trust, Ooruttukala, Neyyattinkara. P.O, Trivandrum 695 121</td>
                                                <td>0471-2223217, 9447434378</td>
                                                <td>mythilisister@gmail.com</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>8</td>
                                                <td>Alleppey Sarvodaya Sangh, Pallarimangalam, Mavelikara. P.O, Aleppey 690 107</td>
                                                <td>0479-2302370, 9447850951</td>
                                                <td>alleppeysarvodayasangh@gmail.com</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>9</td>
                                                <td>Changanacheryy Social Service Society, P.O. Box. NO. 20, Arch Bishop’s House, Changanacherry.P.O, Kottayam 686 101</td>
                                                <td>0481-2420040, 9961077388</td>
                                                <td>Chass1966@rediffmail.com</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>10</td>
                                                <td>Kerala Khadi & V.I. Federation, No. 34-C, Padivattom, Edappally.P.O, Ernakulam 682 024</td>
                                                <td>0484-2805393, 9447700273</td>
                                                <td>keralakhadifederation@gmail.com</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>11</td>
                                                <td>Khadi & Village Industries Association, Avinissery, Avinissery. P.O, Thrissur 680 313</td>
                                                <td>0487-2352408, 9447092095</td>
                                                <td>kkvia@55gmail.com</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>12</td>
                                                <td>Palghat Sarvodaya Sangh, Post Box. NO. 101, Ottappalam. P.O, Palakkad 679 101</td>
                                                <td>0466-2244378, 9846740614</td>
                                                <td>pkdsarvodayasangh@gmail.com</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>13</td>
                                                <td>Kozhikkode Sarvodaya Sangh, Post Box. NO. 216, SM Street, Khadi Gram, Kozhikkode 673 001</td>
                                                <td>0495-2720049, 9447100108</td>
                                                <td>kozhikkodesarvodaya@gmail.com</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>14</td>
                                                <td>Kerala Sarvodaya Sangh, Civil Station, Gandhi Ashramam, P.O. Kozhikkode 673 020</td>
                                                <td>0495-2374162, 2495728981</td>
                                                <td>keralasarvodayasangh@gmail.com</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>15</td>
                                                <td>Cannanor Sarvodaya Sangh, Chettankunnu, Tellicherry, Tellicherry, Kannur 670 101</td>
                                                <td>0490-2341983, 9744515503</td>
                                                <td>sarvodayasanghtly@gmail.com</td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <br />

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <div className='all-footer'>
                <FooterOne />
            </div>
            <ScrollToTop />
        </>

    );
};

export default KhadiInstitutions;