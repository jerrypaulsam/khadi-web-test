import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

import image1 from "@/public/assets/img/about/grama_soubhagya.jpg";

const GramaSoubhagya = () => {

    return (
        <>
            <SEO pageTitle="Kerala Khadi - Khadi Grama Soubhagyas" />
            <HeaderOne />
            <BreadCrumb title="Khadi Grama Soubhagyas" innerTitle="Kerala Khadi & Village Industries Board" />

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
                                    <h3>Khadi Grama Soubhagyas</h3>
                                    <br />
                                    <h4>
                                        DETAILS OF THE SALES OUTLETS UNDER THE BOARD
                                    </h4>
                                    <br />

                                    <table className="officals-table">
                                        <thead>
                                            <tr>
                                                <th>Name of Khadi Grama Soubhagya</th>
                                                <th>Phone Number</th>
                                                <th>District</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Khadi grama soubhagya attukal shopping complex, eastfort, thiruvananthapuram-695 023</td>
                                                <td>9746261938</td>
                                                <td>Thiruvananthapuram</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya sree mookambika shopping complex balaramapuram, 695 501</td>
                                                <td>8547879898</td>
                                                <td>Thiruvananthapuram</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya kedaram shopping complex, kesavadasapuram pattom 695 004</td>
                                                <td>7736985839</td>
                                                <td>Thiruvananthapuram</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya vijaya building, sreekaryam junction sreekaryam 695 017</td>
                                                <td>8547097922</td>
                                                <td>Thiruvananthapuram</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya near town hall, attingal, 695 101</td>
                                                <td>7025127031</td>
                                                <td>Thiruvananthapuram</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya district khadi office building, uppalam road statue, trivandrum, 695 001</td>
                                                <td>9496204768</td>
                                                <td>Thiruvananthapuram</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya near govt. Girls high school, attingal, 695 101</td>
                                                <td>9495689866</td>
                                                <td>Thiruvananthapuram</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya, (mobile)</td>
                                                <td></td>
                                                <td>Thiruvananthapuram</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya district khadi & v.i. office building karbala junction, contontment. P. O, kollam 691 001</td>
                                                <td>0474-2743587, 9447387141, 8547913485</td>
                                                <td>Kollam</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya kasthurba building, lic complex, pulamon junction pulamon. P.o. kottarakkara 691 531</td>
                                                <td>0474-2650631, 9947328484</td>
                                                <td>Kollam</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya udaya building, pada north, karunagapplly, 690 518</td>
                                                <td>0476-2621587, 9495019158</td>
                                                <td>Kollam</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya (mobile)</td>
                                                <td>9446797896</td>
                                                <td>Kollam</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya district khadi & v.i. office building collectorate road, alappuzha 688 001</td>
                                                <td>9447335090</td>
                                                <td>Alappuzha</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya kayamkulam, 690 502</td>
                                                <td>9446375850</td>
                                                <td>Alappuzha</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya haripad, 690 514</td>
                                                <td>9847349486</td>
                                                <td>Alappuzha</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya venmony, 689 509</td>
                                                <td>9496231601</td>
                                                <td>Alappuzha</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya charumood, 690 505</td>
                                                <td>85478475349</td>
                                                <td>Alappuzha</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya, khadi tower, elanthur. P.o 689 643</td>
                                                <td>9961802663</td>
                                                <td>Pathanamthitta</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya, bethel tower, aban junction, pathanmthitta 689 645</td>
                                                <td>9744140369</td>
                                                <td>Pathanamthitta</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya, revenue tower, adoor, pathanamthitta 691 523</td>
                                                <td>9447042556</td>
                                                <td>Pathanamthitta</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya, ushus tower, ittiyappara junction, ranny 689 673</td>
                                                <td>9497331985</td>
                                                <td>Pathanamthitta</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya csi complex, baker junction, kottayam -1</td>
                                                <td>0481-2560587, 9495848378</td>
                                                <td>Kottayam</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya madathumuri building, temple road, thirunakkara, kottayam-1</td>
                                                <td>0481-2303938, 9745461307</td>
                                                <td>Kottayam</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya revenue tower, changanasserry-1</td>
                                                <td>0481-2423823, 9656925481</td>
                                                <td>Kottayam</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya edens shopping complex, palai road ettumanoor 31</td>
                                                <td>0481-2423823, 9847695865</td>
                                                <td>Kottayam</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya karamel complex, karikkode.p.o, vaikom, 686141</td>
                                                <td>0482-9233508, 9387790082</td>
                                                <td>Kottayam</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya matha shopping arcade, palai road thodupuzha, 685 584</td>
                                                <td>04862-227414, 9995835114</td>
                                                <td>Idukki</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya poomangalam buildings, kanjirmattom bye pass road, thodupuzha, 685 584</td>
                                                <td>04862-227515, 9496714493</td>
                                                <td>Idukki</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya housing board building, kattappana 685 508</td>
                                                <td>04868-251454, 9446344011</td>
                                                <td>Idukki</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya khadi tower, kaloor, cochin 682 017</td>
                                                <td>9656189699, 9746909523</td>
                                                <td>Ernakulam</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya thekkenaluvazhi, north paravoor, 683 513</td>
                                                <td>9495763514</td>
                                                <td>Ernakulam</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya international airport (cial) international dep: launch, nedumbasserry</td>
                                                <td>447136218</td>
                                                <td>Ernakulam</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya kacherythazaham, muvattupuzha, 686 661</td>
                                                <td>9447939753</td>
                                                <td>Ernakulam</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya mulamthuruthy junction, mulamthuruthy 682 314</td>
                                                <td>9447185530</td>
                                                <td>Ernakulam</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya market road pezhakkappilly. Po, payipra 686 673</td>
                                                <td>9847937992</td>
                                                <td>Ernakulam</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya kappa marketing building palace road thrissur 680 020</td>
                                                <td>960520143</td>
                                                <td>Thrissur</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya west pallithanam, sree vadakkumnathan shopping complex near north bus stand, thrissur 680 020</td>
                                                <td>9995772858</td>
                                                <td>Thrissur</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya athanesious memorial building, pavaratty thrissur 680 507</td>
                                                <td>9495634301</td>
                                                <td>Thrissur</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya district khadi & v.i. office building west frot road, palakkad 678 001</td>
                                                <td>9446653946</td>
                                                <td>Palakkad</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya muncipal shopping complex, town bus stand palakkad 678 001</td>
                                                <td>9495205175</td>
                                                <td>Palakkad</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya panchayath building, near kongad bus stand kongad 678 631</td>
                                                <td>9447839018</td>
                                                <td>Palakkad</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya building no. Tpii. 501&502, ponnani road thrithala 679 534</td>
                                                <td>9447623881</td>
                                                <td>Palakkad</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya muncipal bus stand building, kunnummal malappuram 676 519</td>
                                                <td>0483-2734809</td>
                                                <td>Malappuram</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya swaraj building, railway station road tanur 676 302</td>
                                                <td>9388120654</td>
                                                <td>Malappuram</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya airtel tower building, edapal via changaramkulam 679 575</td>
                                                <td>9847357625</td>
                                                <td>Malappuram</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya elamaram road, edavannappara, cheruvayur 673 645</td>
                                                <td>0483-27242222, 9846411725</td>
                                                <td>Malappuram</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya sreelakshmi building, payangattil temple road edappal 679 576</td>
                                                <td>9656796179</td>
                                                <td>Malappuram</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya vadakkumuri, urgattiri p.o 673 639</td>
                                                <td>9946705011</td>
                                                <td>Malappuram</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya district khadi & v.i. office building cherootty road, kozhikkode 673 032</td>
                                                <td>9496133857</td>
                                                <td>Kozhikkode</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya old bus stand building, vadakara 673 549</td>
                                                <td>8547958016</td>
                                                <td>Kozhikkode</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya regional co-op: bank building, near bus stand balusserry 673 612</td>
                                                <td>9446890810</td>
                                                <td>Kozhikkode</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya new bus stand building, koyilandy 673 620</td>
                                                <td>9497675485</td>
                                                <td>Kozhikkode</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya near krishnageetha theatre chenoli raod, perambra 673525</td>
                                                <td>7559910488</td>
                                                <td>Kozhikkode</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya opposite bus stand, ayncheri town ayancheri 673541</td>
                                                <td>9048357989</td>
                                                <td>Kozhikkode</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya eramala road, orkatterry 673501</td>
                                                <td>9446961033</td>
                                                <td>Kozhikkode</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya opposite bus stand, ulliyeri 673 620</td>
                                                <td>9567159432</td>
                                                <td>Kozhikkode</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya kalpetta</td>
                                                <td></td>
                                                <td>Wayanadu</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya khadi tower kannur 670 002</td>
                                                <td>9447347641</td>
                                                <td>Kannur</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi grama soubhagya payyannur khadi centre office complex payyannur 670 307</td>
                                                <td>9495325661</td>
                                                <td>Kannur</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya chalode edayannur 670 595</td>
                                                <td>9446966705</td>
                                                <td>Kannur</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya chakkarakkal mamba.p.o 670 611</td>
                                                <td>9446966705</td>
                                                <td>Kannur</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya iritty keezhur. P.o 670 703</td>
                                                <td>9496296630</td>
                                                <td>Kannur</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya js paul corner kannur 670 001</td>
                                                <td>9562779760</td>
                                                <td>Kannur</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya staddium corner kannur 670 001</td>
                                                <td>9447208927</td>
                                                <td>Kannur</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya kalikkadavu pilicode 671 310</td>
                                                <td>9446659033</td>
                                                <td>Kannur</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya karivellur 670 521</td>
                                                <td>9400840483</td>
                                                <td>Kannur</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya kannapuram cherukunnu 670 301</td>
                                                <td>9446653795</td>
                                                <td>Kannur</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya mathamnagalam 671 351</td>
                                                <td>9496137615</td>
                                                <td>Kannur</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya muncipal complex mattannur 670 702</td>
                                                <td>9446823002</td>
                                                <td>Kannur</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya mayyil 670 602</td>
                                                <td>9947892025</td>
                                                <td>Kannur</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya naduvil 670 582</td>
                                                <td>9744764177</td>
                                                <td>Kannur</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya eripuram payangadi 670 303</td>
                                                <td>9746173358</td>
                                                <td>Kannur</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya payyannur 670 307</td>
                                                <td>9567286118</td>
                                                <td>Kannur</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya pilathara co-op: society pilathara 670 501</td>
                                                <td>9946752582</td>
                                                <td>Kannur</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya panchayath complex sreekandapuram 670 631</td>
                                                <td>9447688535</td>
                                                <td>Kannur</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya thaliparamba 670 141</td>
                                                <td>9895247365</td>
                                                <td>Kannur</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya muncipal tb complex thalasserry 670 101</td>
                                                <td>9388014800</td>
                                                <td>Kannur</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya ulikkal 670705</td>
                                                <td>8281606783</td>
                                                <td>Kannur</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya payyannur co-op: store payyannur 670 307</td>
                                                <td>9446929348</td>
                                                <td>Kannur</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya milan complex thaliparamba 670 141</td>
                                                <td>9496579072</td>
                                                <td>Kannur</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi gramasoubhagya mavungalramnaga ranandasramam p.o 671 315 kanhangad</td>
                                                <td>447411342</td>
                                                <td>Kasaragod</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya bovikkananam muliyar. P.o 671 542</td>
                                                <td>9539187412</td>
                                                <td>Kasaragod</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya cheruvathur 671310</td>
                                                <td>9446390325</td>
                                                <td>Kasaragod</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya muncipal complex kanhangad 671 315</td>
                                                <td>9446010322</td>
                                                <td>Kasaragod</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya aliya building kasaragod 671 121</td>
                                                <td>9446653795</td>
                                                <td>Kasaragod</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya kundamkuzhi chengala 671 541</td>
                                                <td>9446297005</td>
                                                <td>Kasaragod</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya madakkara thuruthi.p.o 671 351</td>
                                                <td>9744093865</td>
                                                <td>Kasaragod</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya ramnath building neeleswaram 671 314</td>
                                                <td>9745305142</td>
                                                <td>Kasaragod</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya thrikaripur 671 310</td>
                                                <td>9961214444</td>
                                                <td>Kasaragod</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya uduma 671 319</td>
                                                <td>9495338979</td>
                                                <td>Kasaragod</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya mulleria 671 543</td>
                                                <td>9946826632</td>
                                                <td>Kasaragod</td>
                                            </tr>
                                            <tr>
                                                <td>Khadi soubhagya kanhanagad 671 315</td>
                                                <td>9447347641</td>
                                                <td>Kasaragod</td>
                                            </tr>
                                        </tbody>
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

export default GramaSoubhagya;