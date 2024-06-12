"use client"

import { useEffect, useState } from 'react';

import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

import image1 from "@/public/assets/img/about/objectives.jpg";

const KhadiDepartmentUnits = () => {
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
            <SEO pageTitle={isMalayalam ? "കേരള ഖാദി - ഖാദി വകുപ്പുതല യൂണിറ്റുകൾ" : "Kerala Khadi - Khadi Departmental Units"} />
            <HeaderOne isMalayalam={isMalayalam} />
            <BreadCrumb title={isMalayalam ? "ഖാദി വകുപ്പുതല യൂണിറ്റുകൾ" : "Khadi Departmental Units"}
                innerTitle={isMalayalam ? "കേരള ഖാദി & വില്ലേജ് ഇൻഡസ്ട്രീസ് ബോർഡ്" : "Kerala Khadi & Village Industries Board"} />

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
                                    <h3>{isMalayalam ? "ഖാദി വകുപ്പുതല യൂണിറ്റുകൾ" : "Khadi Departmental Units"}</h3>
                                    <br />
                                </div>

                                {/* <div className="team__single-right-experience">
                                    <Link href="#">DEPTL UNITS PERFORMANCE</Link>
                                </div> */}
                                <br />

                                <h4>{isMalayalam ? "ജില്ലയുടെ പേര് : തിരുവനന്തപുരം" : "District: Thiruvananthapuram"}</h4>
                                    <br />
                                    <table className="officals-table">
                                        <thead>
                                            <tr>
                                                <th colspan="2">{isMalayalam ? "നൂല്‍പ്പ് കേന്ദ്രങ്ങളുടെ പേര്" : "Yarn Centers"}</th>
                                                <th colspan="2">{isMalayalam ? "നെയ്ത്തു കേന്ദ്രങ്ങളുടെ പേര്" : "Weaving Centers"}</th>
                                            </tr>
                                            <tr>
                                                <th>{isMalayalam ? "ക്രമ നമ്പര്‍" : "Sl. No."}</th>
                                                <th>{isMalayalam ? "പേര്" : "Name"}</th>
                                                <th>{isMalayalam ? "ക്രമ നമ്പര്‍" : "Sl. No."}</th>
                                                <th>{isMalayalam ? "പേര്" : "Name"}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>{isMalayalam ? "കരിപ്പൂര്‍" : "Karippur"}</td>
                                                <td>1</td>
                                                <td>{isMalayalam ? "അമ്പലത്തിന്‍കാല" : "Ambalathinkal"}</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>{isMalayalam ? "കരിയ്ക്കകം" : "Kariykkam"}</td>
                                                <td>2</td>
                                                <td>{isMalayalam ? "ചേനാട്" : "Chenad"}</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>{isMalayalam ? "മണ്ണൂര്‍ക്കോണം" : "Mannurkonam"}</td>
                                                <td>3</td>
                                                <td>{isMalayalam ? "ചെറിയകൊണ്ണി" : "Cheriyakonni"}</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>{isMalayalam ? "ഞാണ്ടൂര്‍ക്കോണം" : "Njandoorkonam"}</td>
                                                <td>4</td>
                                                <td>{isMalayalam ? "കുലശേഖരം" : "Kulasekharam"}</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>{isMalayalam ? "പൂവാര്‍" : "Poovar"}</td>
                                                <td>5</td>
                                                <td>{isMalayalam ? "മണ്ണൂര്‍ക്കോണം" : "Mannurkonam"}</td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>{isMalayalam ? "ഉഴമലയ്ക്കല്‍" : "Uzhumalaykkal"}</td>
                                                <td>6</td>
                                                <td>{isMalayalam ? "നാടുകാണി" : "Nadukani"}</td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td>{isMalayalam ? "വട്ടപ്പാറ" : "Vattappara"}</td>
                                                <td>7</td>
                                                <td>{isMalayalam ? "പറണ്ടോട്" : "Parandode"}</td>
                                            </tr>
                                            <tr>
                                                <td>8</td>
                                                <td>{isMalayalam ? "പേരയം" : "Perayam"}</td>
                                                <td>8</td>
                                                <td>{isMalayalam ? "പൂഴിക്കുന്ന്" : "Poozhikkunnu"}</td>
                                            </tr>
                                            <tr>
                                                <td>9</td>
                                                <td>{isMalayalam ? "അമ്പലത്തിന്‍കാല" : "Ambalathinkal"}</td>
                                                <td>9</td>
                                                <td>{isMalayalam ? "ഉഴമലയ്ക്കല്‍" : "Uzhumalaykkal"}</td>
                                            </tr>
                                            <tr>
                                                <td>10</td>
                                                <td>{isMalayalam ? "ചേനാട്" : "Chenad"}</td>
                                                <td>10</td>
                                                <td>{isMalayalam ? "പേരയം" : "Perayam"}</td>
                                            </tr>
                                            <tr>
                                                <td>11</td>
                                                <td>{isMalayalam ? "ചെറിയകൊണ്ണി" : "Cheriyakonni"}</td>
                                                <td>11</td>
                                                <td>{isMalayalam ? "കതിരുവിള" : "Kathiruvila"}</td>
                                            </tr>
                                            <tr>
                                                <td>12</td>
                                                <td>{isMalayalam ? "കാലന്‍കാവ്" : "Kalankavu"}</td>
                                                <td>12</td>
                                                <td>{isMalayalam ? "വെള്ളറട" : "Vellarada"}</td>
                                            </tr>
                                            <tr>
                                                <td>13</td>
                                                <td>{isMalayalam ? "കല്ലിയൂര്‍" : "Kalliyoor"}</td>
                                                <td>13</td>
                                                <td>{isMalayalam ? "വെഞ്ഞാറമൂട്" : "Venjaramoodu"}</td>
                                            </tr>
                                            <tr>
                                                <td>14</td>
                                                <td>{isMalayalam ? "കുലശേഖരം" : "Kulasekharam"}</td>
                                                <td>14</td>
                                                <td>{isMalayalam ? "അരുവിക്കര" : "Aruvikkara"}</td>
                                            </tr>
                                            <tr>
                                                <td>15</td>
                                                <td>{isMalayalam ? "ഒറ്റശേഖരമംഗലം" : "Ottasekharamangalam"}</td>
                                                <td>15</td>
                                                <td>{isMalayalam ? "ഒറ്റശേഖരമംഗലം" : "Ottasekharamangalam"}</td>
                                            </tr>
                                            <tr>
                                                <td>16</td>
                                                <td>{isMalayalam ? "കോട്ടുകാല്‍" : "Kottukal"}</td>
                                                <td>16</td>
                                                <td>{isMalayalam ? "ബാലരാമപുരം" : "Balaramapuram"}</td>
                                            </tr>
                                            <tr>
                                                <td>17</td>
                                                <td>{isMalayalam ? "വട്ടിയൂര്‍ക്കാവ്" : "Vattiyoorkavu"}</td>
                                                <td>17</td>
                                                <td>{isMalayalam ? "പൂഴിക്കുന്ന്" : "Poozhikkunnu"}</td>
                                            </tr>
                                            <tr>
                                                <td>18</td>
                                                <td>{isMalayalam ? "വെഞ്ഞാറമൂട്" : "Venjaramoodu"}</td>
                                            </tr>
                                            <tr>
                                                <td>19</td>
                                                <td>{isMalayalam ? "പാങ്ങപ്പാറ" : "Pangappara"}</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colspan="2">{isMalayalam ? "ആകെ നൂല്‍പ്പ് കേന്ദ്രം 19" : "Total Yarn Centers 19"}</td>
                                                <td colspan="2">{isMalayalam ? "ആകെ നെയ്ത്തു കേന്ദ്രം 17" : "Total Weaving Centers 17"}</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    <br />

                                    <h4>{isMalayalam ? "ജില്ലയുടെ പേര് : കൊല്ലം" : "District: Kollam"}</h4>
                                    <br />
                                    <table className="officals-table">
                                        <thead>
                                            <tr>
                                                <th colspan="2">{isMalayalam ? "നൂല്‍പ്പ് കേന്ദ്രങ്ങളുടെ പേര്" : "Yarn Centers"}</th>
                                                <th colspan="2">{isMalayalam ? "നെയ്ത്തു കേന്ദ്രങ്ങളുടെ പേര്" : "Weaving Centers"}</th>
                                            </tr>
                                            <tr>
                                                <th>{isMalayalam ? "ക്രമ നമ്പര്‍" : "Sl. No."}</th>
                                                <th>{isMalayalam ? "പേര്" : "Name"}</th>
                                                <th>{isMalayalam ? "ക്രമ നമ്പര്‍" : "Sl. No."}</th>
                                                <th>{isMalayalam ? "പേര്" : "Name"}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>{isMalayalam ? "പുനലൂര്‍" : "Punalur"}</td>
                                                <td>1</td>
                                                <td>{isMalayalam ? "ഭൂതക്കുഴി" : "Bhoothakkuzhi"}</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>{isMalayalam ? "നെടുമ്പന" : "Nedumpana"}</td>
                                                <td>2</td>
                                                <td>{isMalayalam ? "നെടുങ്ങോലം" : "Nedungolam"}</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>{isMalayalam ? "കടക്കാമണ്‍" : "Kadakkamon"}</td>
                                                <td>3</td>
                                                <td>{isMalayalam ? "തൊടിയൂര്‍" : "Thodiyoor"}</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>{isMalayalam ? "അഞ്ചല്‍" : "Anchal"}</td>
                                                <td>4</td>
                                                <td>{isMalayalam ? "നെടുമ്പന" : "Nedumpana"}</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>{isMalayalam ? "ഇഞ്ചക്കാട്" : "Inchakad"}</td>
                                                <td>5</td>
                                                <td>{isMalayalam ? "രാമന്‍കുളങ്ങര" : "Ramankulangara"}</td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>{isMalayalam ? "പാവുമ്പ" : "Pavumba"}</td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td>{isMalayalam ? "പനവേലി" : "Panaveli"}</td>
                                            </tr>
                                            <tr>
                                                <td>8</td>
                                                <td>{isMalayalam ? "ചിതറ" : "Chithara"}</td>
                                            </tr>
                                            <tr>
                                                <td>9</td>
                                                <td>{isMalayalam ? "മണ്‍ട്രോത്തുരുത്ത്" : "Manthrothuruthu"}</td>
                                            </tr>
                                            <tr>
                                                <td>10</td>
                                                <td>{isMalayalam ? "ഉമ്മന്നൂര്‍" : "Ummanoor"}</td>
                                            </tr>
                                            <tr>
                                                <td>11</td>
                                                <td>{isMalayalam ? "തൊടിയൂര്‍" : "Thodiyoor"}</td>
                                            </tr>
                                            <tr>
                                                <td>12</td>
                                                <td>{isMalayalam ? "പട്ടാഴി" : "Pattazhi"}</td>
                                            </tr>
                                            <tr>
                                                <td>13</td>
                                                <td>{isMalayalam ? "രാമന്‍കുളങ്ങര" : "Ramankulangara"}</td>
                                            </tr>
                                            <tr>
                                                <td>14</td>
                                                <td>{isMalayalam ? "കരിങ്ങന്നൂര്‍" : "Karingannur"}</td>
                                            </tr>
                                            <tr>
                                                <td>15</td>
                                                <td>{isMalayalam ? "ചടയമംഗലം-1" : "Chadayamangalam-1"}</td>
                                            </tr>
                                            <tr>
                                                <td>16</td>
                                                <td>{isMalayalam ? "ചടയമംഗലം-11" : "Chadayamangalam-11"}</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colspan="2">{isMalayalam ? "ആകെ നൂല്‍പ്പ് കേന്ദ്രം 16" : "Total Yarn Centers 16"}</td>
                                                <td colspan="2">{isMalayalam ? "ആകെ നെയ്ത്തു കേന്ദ്രം 5" : "Total Weaving Centers 5"}</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    <br />

                                    <h4>{isMalayalam ? "ജില്ലയുടെ പേര് : പത്തനംതിട്ട" : "District: Pathanamthitta"}</h4>
                                    <br />
                                    <table className="officals-table">
                                        <thead>
                                            <tr>
                                                <th colspan="2">{isMalayalam ? "നൂല്‍പ്പ് കേന്ദ്രങ്ങളുടെ പേര്" : "Yarn Centers"}</th>
                                                <th colspan="2">{isMalayalam ? "നെയ്ത്തു കേന്ദ്രങ്ങളുടെ പേര്" : "Weaving Centers"}</th>
                                            </tr>
                                            <tr>
                                                <th>{isMalayalam ? "ക്രമ നമ്പര്‍" : "Sl. No."}</th>
                                                <th>{isMalayalam ? "പേര്" : "Name"}</th>
                                                <th>{isMalayalam ? "ക്രമ നമ്പര്‍" : "Sl. No."}</th>
                                                <th>{isMalayalam ? "പേര്" : "Name"}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>{isMalayalam ? "കൊറ്റനാട്" : "Kottanad"}</td>
                                                <td>1</td>
                                                <td>{isMalayalam ? "മാത്തൂര്‍" : "Mathur"}</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>{isMalayalam ? "മാത്തൂര്‍" : "Mathur"}</td>
                                                <td>2</td>
                                                <td>{isMalayalam ? "കൊറ്റനാട്" : "Kottanad"}</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>{isMalayalam ? "എഴിക്കാട്" : "Ezikkad"}</td>
                                                <td>3</td>
                                                <td>{isMalayalam ? "കടമ്പനാട്" : "Kadambanad"}</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>{isMalayalam ? "റാന്നി-പെരുനാട്" : "Ranni-Perunad"}</td>
                                                <td>4</td>
                                                <td>{isMalayalam ? "പന്തളം" : "Pandalam"}</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>{isMalayalam ? "കവിയൂര്‍" : "Kaviyoor"}</td>
                                                <td>5</td>
                                                <td>{isMalayalam ? "ഇലന്തൂര്‍" : "Elanthoor"}</td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>{isMalayalam ? "വാളക്കുഴി" : "Valakuzhi"}</td>
                                                <td>6</td>
                                                <td>{isMalayalam ? "റെഡിമെയ്ഡ് വാര്‍പ്പ് യൂണിറ്റ്" : "Readymade Warp Unit"}</td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td>{isMalayalam ? "ചര്‍ക്കാ ഗ്രാമം" : "Charkka Gramam"}</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colspan="2">{isMalayalam ? "ആകെ നൂല്‍പ്പ് കേന്ദ്രം 7" : "Total Yarn Centers 7"}</td>
                                                <td colspan="2">{isMalayalam ? "ആകെ നെയ്ത്തു കേന്ദ്രം 6" : "Total Weaving Centers 6"}</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    <br />
                                    <h4>{isMalayalam ? "ജില്ലയുടെ പേര് : ആലപ്പുഴ" : "District: Alappuzha"}</h4>
                                    <br />
                                    <table class="officals-table">
                                        <thead>
                                            <tr>
                                                <th colspan="2">{isMalayalam ? "നൂല്‍പ്പ് കേന്ദ്രങ്ങളുടെ പേര്" : "Yarn Centers"}</th>
                                                <th colspan="2">{isMalayalam ? "നെയ്ത്തു കേന്ദ്രങ്ങളുടെ പേര്" : "Weaving Centers"}</th>
                                            </tr>
                                            <tr>
                                                <th>{isMalayalam ? "ക്രമ നമ്പര്‍" : "Sl. No."}</th>
                                                <th>{isMalayalam ? "പേര്" : "Name"}</th>
                                                <th>{isMalayalam ? "ക്രമ നമ്പര്‍" : "Sl. No."}</th>
                                                <th>{isMalayalam ? "പേര്" : "Name"}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>{isMalayalam ? "തുമ്പോളി" : "Thumboli"}</td>
                                                <td>1</td>
                                                <td>{isMalayalam ? "പൊള്ളേത്തൈ" : "Pollaithai"}</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>{isMalayalam ? "പൊള്ളേത്തൈ" : "Pollaithai"}</td>
                                                <td>2</td>
                                                <td>{isMalayalam ? "കഞ്ഞിക്കുഴി" : "Kanjikuzhi"}</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>{isMalayalam ? "മാങ്കാംകുഴി" : "Mankamkuzhi"}</td>
                                                <td>3</td>
                                                <td>{isMalayalam ? "എരമല്ലൂര്‍" : "Eramalloor"}</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>{isMalayalam ? "വള്ളികുന്നം-1" : "Vallikunnam-1"}</td>
                                                <td>4</td>
                                                <td>{isMalayalam ? "ഉഴവ" : "Uzhaavu"}</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>{isMalayalam ? "ഉഴവ" : "Uzhaavu"}</td>
                                                <td>5</td>
                                                <td>{isMalayalam ? "മാങ്കാംകുഴി" : "Mankamkuzhi"}</td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>{isMalayalam ? "ചെത്തി" : "Chetti"}</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td>{isMalayalam ? "വള്ളികുന്നം -2" : "Vallikunnam -2"}</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>8</td>
                                                <td>{isMalayalam ? "എരമല്ലൂര്‍" : "Eramalloor"}</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>9</td>
                                                <td>{isMalayalam ? "മണ്ണഞ്ചേരി" : "Mannanjeri"}</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>10</td>
                                                <td>{isMalayalam ? "താമരക്കുളം" : "Thamarakkulam"}</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>11</td>
                                                <td>{isMalayalam ? "പുന്നപ്ര" : "Punnapra"}</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>12</td>
                                                <td>{isMalayalam ? "കരുവാറ്റ" : "Karuvatta"}</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colspan="2">{isMalayalam ? "ആകെ നൂല്‍പ്പ് കേന്ദ്രം 12" : "Total Yarn Centers 12"}</td>
                                                <td colspan="2">{isMalayalam ? "ആകെ നെയ്ത്തു കേന്ദ്രം 5" : "Total Weaving Centers 5"}</td>
                                            </tr>
                                        </tfoot>
                                    </table>

                                    <h4>{isMalayalam ? "ജില്ലയുടെ പേര് : കോട്ടയം" : "District: Kottayam"}</h4>
                                    <br />
                                    <table class="officals-table">
                                        <thead>
                                            <tr>
                                                <th colspan="2">{isMalayalam ? "നൂല്‍പ്പ് കേന്ദ്രങ്ങളുടെ പേര്" : "Yarn Centers"}</th>
                                                <th colspan="2">{isMalayalam ? "നെയ്ത്തു കേന്ദ്രങ്ങളുടെ പേര്" : "Weaving Centers"}</th>
                                            </tr>
                                            <tr>
                                                <th>{isMalayalam ? "ക്രമ നമ്പര്‍" : "Sl. No."}</th>
                                                <th>{isMalayalam ? "പേര്" : "Name"}</th>
                                                <th>{isMalayalam ? "ക്രമ നമ്പര്‍" : "Sl. No."}</th>
                                                <th>{isMalayalam ? "പേര്" : "Name"}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>{isMalayalam ? "ഉദയനാപുരം" : "Udayanapuram"}</td>
                                                <td>1</td>
                                                <td>{isMalayalam ? "ഉദയനാപുരം" : "Udayanapuram"}</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>{isMalayalam ? "ബ്രഹ്മമംഗലം" : "Brahmamangalam"}</td>
                                                <td>2</td>
                                                <td>{isMalayalam ? "ബ്രഹ്മമംഗലം" : "Brahmamangalam"}</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>{isMalayalam ? "കളത്തൂര്‍" : "Kalathoor"}</td>
                                                <td>3</td>
                                                <td>{isMalayalam ? "കളത്തൂര്‍" : "Kalathoor"}</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>{isMalayalam ? "ഇരവിനല്ലൂര്‍" : "Eravinalloor"}</td>
                                                <td>4</td>
                                                <td>{isMalayalam ? "ഇരവിനല്ലൂര്‍" : "Eravinalloor"}</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>{isMalayalam ? "നെടുംകുന്നം" : "Nedumkunnam"}</td>
                                                <td>5</td>
                                                <td>{isMalayalam ? "നെടുംകുന്നം" : "Nedumkunnam"}</td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>{isMalayalam ? "ചിറക്കടവ്" : "Chirakkadav"}</td>
                                                <td>6</td>
                                                <td>{isMalayalam ? "ചിറക്കടവ്" : "Chirakkadav"}</td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td>{isMalayalam ? "മാന്നാര്‍" : "Mannar"}</td>
                                                <td>7</td>
                                                <td>{isMalayalam ? "പാമ്പാടി" : "Pampady"}</td>
                                            </tr>
                                            <tr>
                                                <td>8</td>
                                                <td>{isMalayalam ? "മുട്ടുചിറ" : "Muttuchira"}</td>
                                                <td>8</td>
                                                <td>{isMalayalam ? "അമയന്നൂര്‍" : "Amayannur"}</td>
                                            </tr>
                                            <tr>
                                                <td>9</td>
                                                <td>{isMalayalam ? "അറുമാനൂര്‍" : "Arumanur"}</td>
                                                <td>9</td>
                                                <td>{isMalayalam ? "ആറുമാനൂര്‍" : "Arumanur"}</td>
                                            </tr>
                                            <tr>
                                                <td>10</td>
                                                <td>{isMalayalam ? "അമയന്നൂര്‍" : "Amayannur"}</td>
                                                <td>10</td>
                                                <td>{isMalayalam ? "വാഴൂര്‍" : "Vazhoor"}</td>
                                            </tr>
                                            <tr>
                                                <td>11</td>
                                                <td>{isMalayalam ? "കിടങ്ങൂര്‍" : "Kidangoor"}</td>
                                                <td>11</td>
                                                <td>{isMalayalam ? "കിടങ്ങൂര്‍" : "Kidangoor"}</td>
                                            </tr>
                                            <tr>
                                                <td>12</td>
                                                <td>{isMalayalam ? "മണിമല" : "Manimala"}</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>13</td>
                                                <td>{isMalayalam ? "പാമ്പാടി" : "Pampady"}</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>14</td>
                                                <td>{isMalayalam ? "കട്ടംപാക്ക്" : "Kattampakk"}</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colspan="2">{isMalayalam ? "ആകെ നൂല്‍പ്പ് കേന്ദ്രം 14" : "Total Yarn Centers 14"}</td>
                                                <td colspan="2">{isMalayalam ? "ആകെ നെയ്ത്തു കേന്ദ്രം 11" : "Total Weaving Centers 11"}</td>
                                            </tr>
                                        </tfoot>
                                    </table>

                                    <h4>{isMalayalam ? "ജില്ലയുടെ പേര് : ഇടുക്കി" : "District: Idukki"}</h4>
                                    <br />
                                    <table class="officals-table">
                                        <thead>
                                            <tr>
                                                <th colspan="2">{isMalayalam ? "നൂല്‍പ്പ് കേന്ദ്രങ്ങളുടെ പേര്" : "Yarn Centers"}</th>
                                                <th colspan="2">{isMalayalam ? "നെയ്ത്തു കേന്ദ്രങ്ങളുടെ പേര്" : "Weaving Centers"}</th>
                                            </tr>
                                            <tr>
                                                <th>{isMalayalam ? "ക്രമ നമ്പര്‍" : "Sl. No."}</th>
                                                <th>{isMalayalam ? "പേര്" : "Name"}</th>
                                                <th>{isMalayalam ? "ക്രമ നമ്പര്‍" : "Sl. No."}</th>
                                                <th>{isMalayalam ? "പേര്" : "Name"}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>{isMalayalam ? "ഉടുമ്പന്നൂര്‍" : "Udumbannoor"}</td>
                                                <td>1</td>
                                                <td>{isMalayalam ? "കോടികുളം" : "Kodikulam"}</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>{isMalayalam ? "ഉടുമ്പന്നൂര്‍" : "Udumbannoor"}</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>{isMalayalam ? "വാഴത്തോപ്പ്" : "Vazhathopp"}</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colspan="2">{isMalayalam ? "ആകെ നൂല്‍പ്പ് കേന്ദ്രം 1" : "Total Yarn Centers 1"}</td>
                                                <td colspan="2">{isMalayalam ? "ആകെ നെയ്ത്തു കേന്ദ്രം 3" : "Total Weaving Centers 3"}</td>
                                            </tr>
                                        </tfoot>
                                    </table>

                                    <h4>{isMalayalam ? "ജില്ലയുടെ പേര് : എറണാകുളം" : "District: Ernakulam"}</h4>
                                    <br />
                                    <table class="officals-table">
                                        <thead>
                                            <tr>
                                                <th colspan="2">{isMalayalam ? "നൂല്‍പ്പ് കേന്ദ്രങ്ങളുടെ പേര്" : "Yarn Centers"}</th>
                                                <th colspan="2">{isMalayalam ? "നെയ്ത്തു കേന്ദ്രങ്ങളുടെ പേര്" : "Weaving Centers"}</th>
                                            </tr>
                                            <tr>
                                                <th>{isMalayalam ? "ക്രമ നമ്പര്‍" : "Sl. No."}</th>
                                                <th>{isMalayalam ? "പേര്" : "Name"}</th>
                                                <th>{isMalayalam ? "ക്രമ നമ്പര്‍" : "Sl. No."}</th>
                                                <th>{isMalayalam ? "പേര്" : "Name"}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>{isMalayalam ? "ശ്രീമൂലനഗരം" : "Sreemoolanagaram"}</td>
                                                <td>1</td>
                                                <td>{isMalayalam ? "ശ്രീമൂലനഗരം" : "Sreemoolanagaram"}</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>{isMalayalam ? "മൂക്കന്നൂര്‍" : "Mookkannoor"}</td>
                                                <td>2</td>
                                                <td>{isMalayalam ? "മൂക്കന്നൂര്‍" : "Mookkannoor"}</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>{isMalayalam ? "കരുമാലൂര്‍" : "Karumalloor"}</td>
                                                <td>3</td>
                                                <td>{isMalayalam ? "കരുമാലൂര്‍" : "Karumalloor"}</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>{isMalayalam ? "കുന്നുകര" : "Kunnukara"}</td>
                                                <td>4</td>
                                                <td>{isMalayalam ? "കുന്നുകര" : "Kunnukara"}</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>{isMalayalam ? "ചൂണ്ടക്കുഴി" : "Choondakkuzhi"}</td>
                                                <td>5</td>
                                                <td>{isMalayalam ? "മുറവന്‍തുരുത്ത്" : "Muravanthuruth"}</td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>{isMalayalam ? "കുറ്റ" : "Kutta"}</td>
                                                <td>6</td>
                                                <td>{isMalayalam ? "പാല്യം തുരുത്ത്" : "Palliyam Thuruth"}</td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td>{isMalayalam ? "മുളവ്കാട്" : "Mulavukad"}</td>
                                                <td>7</td>
                                                <td>{isMalayalam ? "കരിമ്പാടം" : "Karimpadam"}</td>
                                            </tr>
                                            <tr>
                                                <td>8</td>
                                                <td>{isMalayalam ? "നിര്‍മ്മലഗിരി" : "Nirmalagiri"}</td>
                                                <td>8</td>
                                                <td>{isMalayalam ? "ഐരപുരം" : "Airapuram"}</td>
                                            </tr>
                                            <tr>
                                                <td>9</td>
                                                <td>{isMalayalam ? "വടയംപാടി" : "Vadayampadi"}</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>10</td>
                                                <td>{isMalayalam ? "നേരിയമംഗലം" : "Neriyamangalam"}</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>11</td>
                                                <td>{isMalayalam ? "പരിയാരം" : "Pariyaram"}</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>12</td>
                                                <td>{isMalayalam ? "സ്നേഹഭവന്‍" : "Sneha Bhavan"}</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>13</td>
                                                <td>{isMalayalam ? "നെല്ലാട്" : "Nellad"}</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>14</td>
                                                <td>{isMalayalam ? "പഴംതോട്ടം" : "Pazhamthottam"}</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>15</td>
                                                <td>{isMalayalam ? "എറണാകുളം" : "Ernakulam"}</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>16</td>
                                                <td>{isMalayalam ? "മഴുവന്നൂര്‍" : "Mazhuvannoor"}</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>17</td>
                                                <td>{isMalayalam ? "കുഴൂര്‍" : "Kuzhoor"}</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colspan="2">{isMalayalam ? "ആകെ നൂല്‍പ്പ് കേന്ദ്രം 17" : "Total Yarn Centers 17"}</td>
                                                <td colspan="2">{isMalayalam ? "ആകെ നെയ്ത്തു കേന്ദ്രം 8" : "Total Weaving Centers 8"}</td>
                                            </tr>
                                        </tfoot>
                                    </table>

                                    <h4>{isMalayalam ? "ജില്ലയുടെ പേര് : തൃശൂര്‍" : "District: Thrissur"}</h4>
                                    <br />
                                    <table class="officals-table">
                                        <thead>
                                            <tr>
                                                <th colspan="2">{isMalayalam ? "നൂല്‍പ്പ് കേന്ദ്രങ്ങളുടെ പേര്" : "Yarn Centers"}</th>
                                                <th colspan="2">{isMalayalam ? "നെയ്ത്തു കേന്ദ്രങ്ങളുടെ പേര്" : "Weaving Centers"}</th>
                                            </tr>
                                            <tr>
                                                <th>{isMalayalam ? "ക്രമ നമ്പര്‍" : "Sl. No."}</th>
                                                <th>{isMalayalam ? "പേര്" : "Name"}</th>
                                                <th>{isMalayalam ? "ക്രമ നമ്പര്‍" : "Sl. No."}</th>
                                                <th>{isMalayalam ? "പേര്" : "Name"}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>{isMalayalam ? "ആയിലക്കാട്" : "Aayilakad"}</td>
                                                <td>1</td>
                                                <td>{isMalayalam ? "പൂമംഗലം" : "Poomangalam"}</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>{isMalayalam ? "വെള്ളാങ്ങല്ലൂര്‍" : "Vellangallur"}</td>
                                                <td>2</td>
                                                <td>{isMalayalam ? "ആയിലക്കാട്" : "Aayilakad"}</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>{isMalayalam ? "പൂമംഗലം" : "Poomangalam"}</td>
                                                <td>3</td>
                                                <td>{isMalayalam ? "തൊന്നൂർക്കര" : "Thonnurkad"}</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>{isMalayalam ? "വെള്ളാങ്ങല്ലൂര്‍" : "Vellangallur"}</td>
                                                <td>4</td>
                                                <td>{isMalayalam ? "വെള്ളാങ്ങല്ലൂര്‍" : "Vellangallur"}</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>{isMalayalam ? "കടപ്പുറം" : "Kadappuram"}</td>
                                                <td>5</td>
                                                <td>{isMalayalam ? "കടപ്പുറം" : "Kadappuram"}</td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>{isMalayalam ? "കടലാസേരി" : "Kadalassery"}</td>
                                                <td>6</td>
                                                <td>{isMalayalam ? "കടലാസേരി" : "Kadalassery"}</td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td>{isMalayalam ? "മുള്ലശ്ശേരി" : "Mullassery"}</td>
                                                <td>7</td>
                                                <td>{isMalayalam ? "മാള" : "Mala"}</td>
                                            </tr>
                                            <tr>
                                                <td>8</td>
                                                <td>{isMalayalam ? "തൊന്നൂർക്കര" : "Thonnurkad"}</td>
                                                <td>8</td>
                                                <td>{isMalayalam ? "തലിക്കുളം" : "Thalikulam"}</td>
                                            </tr>
                                            <tr>
                                                <td>9</td>
                                                <td>{isMalayalam ? "ചാവക്കാട്" : "Chavakkad"}</td>
                                                <td>9</td>
                                                <td>{isMalayalam ? "പുല്ലാസ്സേരി" : "Pullassery"}</td>
                                            </tr>
                                            <tr>
                                                <td>10</td>
                                                <td>{isMalayalam ? "തലിക്കുളം" : "Thalikulam"}</td>
                                                <td>10</td>
                                                <td>{isMalayalam ? "ചാവക്കാട്" : "Chavakkad"}</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colspan="2">{isMalayalam ? "ആകെ നൂല്‍പ്പ് കേന്ദ്രം 10" : "Total Yarn Centers 10"}</td>
                                                <td colspan="2">{isMalayalam ? "ആകെ നെയ്ത്തു കേന്ദ്രം 10" : "Total Weaving Centers 10"}</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    <br />

                                    <h4>{isMalayalam ? "ജില്ലയുടെ പേര് : പാലക്കാട്" : "District: Palakkad"}</h4>
                                    <br />
                                    <table className="officals-table">
                                        <thead>
                                            <tr>
                                                <th colspan="2">{isMalayalam ? "നൂല്‍പ്പ് കേന്ദ്രങ്ങളുടെ പേര്" : "Yarn Centers"}</th>
                                                <th colspan="2">{isMalayalam ? "നെയ്ത്തു കേന്ദ്രങ്ങളുടെ പേര്" : "Weaving Centers"}</th>
                                            </tr>
                                            <tr>
                                                <th>{isMalayalam ? "ക്രമ നമ്പര്‍" : "Sl. No."}</th>
                                                <th>{isMalayalam ? "പേര്" : "Name"}</th>
                                                <th>{isMalayalam ? "ക്രമ നമ്പര്‍" : "Sl. No."}</th>
                                                <th>{isMalayalam ? "പേര്" : "Name"}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>{isMalayalam ? "ദേവാശ്രയം" : "Devashrayam"}</td>
                                                <td>1</td>
                                                <td>{isMalayalam ? "പട്ടഞ്ചേരി" : "Pattanchery"}</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>{isMalayalam ? "പട്ടഞ്ചേരി" : "Pattanchery"}</td>
                                                <td>2</td>
                                                <td>{isMalayalam ? "മണ്ണൂര്‍" : "Mannur"}</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>{isMalayalam ? "മേലാര്‍കോട്" : "Melarkode"}</td>
                                                <td>3</td>
                                                <td>{isMalayalam ? "കൊടുമ്പ്" : "Kodumbu"}</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>{isMalayalam ? "മണ്ണൂര്‍" : "Mannur"}</td>
                                                <td>4</td>
                                                <td>{isMalayalam ? "നെന്മാറ" : "Nenmara"}</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>{isMalayalam ? "കൊടുമ്പ്" : "Kodumbu"}</td>
                                                <td>5</td>
                                                <td>{isMalayalam ? "കളപ്പെട്ടി" : "Kalappetti"}</td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>{isMalayalam ? "വടശ്ശേരി" : "Vadassery"}</td>
                                                <td>6</td>
                                                <td>{isMalayalam ? "വിളയോടി" : "Vilayodi"}</td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td>{isMalayalam ? "നെന്മാറ" : "Nenmara"}</td>
                                                <td>7</td>
                                                <td>{isMalayalam ? "മലക്കുളം (കളര്‍ ഡോത്തി)" : "Malakkulam (Color Dothi)"}</td>
                                            </tr>
                                            <tr>
                                                <td>8</td>
                                                <td>{isMalayalam ? "കളപ്പെട്ടി" : "Kalappetti"}</td>
                                                <td>8</td>
                                                <td>{isMalayalam ? "എഴക്കാട്" : "Ezhakkad"}</td>
                                            </tr>
                                            <tr>
                                                <td>9</td>
                                                <td>{isMalayalam ? "പുള്ളോട്" : "Pullode"}</td>
                                                <td>9</td>
                                                <td>{isMalayalam ? "ചിതലി (കോട്ടണ്‍)" : "Chithali (Cotton)"}</td>
                                            </tr>
                                            <tr>
                                                <td>10</td>
                                                <td>{isMalayalam ? "എലവഞ്ചേരി" : "Elavanchery"}</td>
                                                <td>10</td>
                                                <td>{isMalayalam ? "ചിതലി (സില്‍ക്ക്)" : "Chithali (Silk)"}</td>
                                            </tr>
                                            <tr>
                                                <td>11</td>
                                                <td>{isMalayalam ? "കല്ലുവഴി" : "Kalluvazhi"}</td>
                                                <td>11</td>
                                                <td>{isMalayalam ? "ശ്രീകൃഷ്ണപുരം-1" : "Sreekrishnapuram-1"}</td>
                                            </tr>
                                            <tr>
                                                <td>12</td>
                                                <td>{isMalayalam ? "കിഴക്കഞ്ചേരി" : "Kizhakkenchery"}</td>
                                                <td>12</td>
                                                <td>{isMalayalam ? "മൂങ്കില്‍മട" : "Moonkilmat"}</td>
                                            </tr>
                                            <tr>
                                                <td>13</td>
                                                <td>{isMalayalam ? "വാണിയംകുളം" : "Vaniamkulam"}</td>
                                                <td>13</td>
                                                <td>{isMalayalam ? "പെരുവെമ്പ്" : "Peruvembu"}</td>
                                            </tr>
                                            <tr>
                                                <td>14</td>
                                                <td>{isMalayalam ? "വിളയോടി" : "Vilayodi"}</td>
                                                <td>14</td>
                                                <td>{isMalayalam ? "ആറ്റാശ്ശേരി" : "Attasseri"}</td>
                                            </tr>
                                            <tr>
                                                <td>15</td>
                                                <td>{isMalayalam ? "എലപ്പുള്ളി" : "Elappully"}</td>
                                                <td>15</td>
                                                <td>{isMalayalam ? "കല്ലുവഴി" : "Kalluvazhi"}</td>
                                            </tr>
                                            <tr>
                                                <td>16</td>
                                                <td>{isMalayalam ? "കണ്ണാടി" : "Kannadi"}</td>
                                                <td>16</td>
                                                <td>{isMalayalam ? "കൊടുന്തിരപ്പുള്ളി" : "Kodunthirapully"}</td>
                                            </tr>
                                            <tr>
                                                <td>17</td>
                                                <td>{isMalayalam ? "മലക്കുളം" : "Malakkulam"}</td>
                                                <td>17</td>
                                                <td>{isMalayalam ? "ശ്രീകൃഷ്ണപുരം സില്‍ക്ക്" : "Sreekrishnapuram Silk"}</td>
                                            </tr>
                                            <tr>
                                                <td>18</td>
                                                <td>{isMalayalam ? "ആട്ടയാംപതി" : "Attayampathy"}</td>
                                                <td>18</td>
                                                <td>{isMalayalam ? "കാരാക്കുറിശ്ശി" : "Karakurussi"}</td>
                                            </tr>
                                            <tr>
                                                <td>19</td>
                                                <td>{isMalayalam ? "ആറ്റാശ്ശേരി" : "Attasseri"}</td>
                                                <td>19</td>
                                                <td>{isMalayalam ? "കടംമ്പഴിപ്പുറം" : "Kadampazhipuram"}</td>
                                            </tr>
                                            <tr>
                                                <td>20</td>
                                                <td>{isMalayalam ? "കുളക്കാട്ടുകുറിശ്ശി" : "Kulakkatukurissi"}</td>
                                                <td>20</td>
                                                <td>{isMalayalam ? "മണ്ണൂര്‍ റെഡിമെയ്ഡ് പാവ് യൂണിറ്റ്" : "Mannur Readymade Pav Unit"}</td>
                                            </tr>
                                            <tr>
                                                <td>21</td>
                                                <td>{isMalayalam ? "പെരുമാട്ടി" : "Perumatti"}</td>
                                                <td>21</td>
                                                <td>{isMalayalam ? "മാറ്റ് വീവിംഗ് യൂണിറ്റ്, മണ്ണംപറ്റ, ശ്രീകൃഷ്ണപുരം" : "Mat Weaving Unit, Mannampatta, Sreekrishnapuram"}</td>
                                            </tr>
                                            <tr>
                                                <td>22</td>
                                                <td>{isMalayalam ? "പെരുമാട്ടി" : "Perumatti"}</td>
                                            </tr>
                                            <tr>
                                                <td>23</td>
                                                <td>{isMalayalam ? "ചിതലി റെഡിമെയ്ഡ് പാവ് യൂണിറ്റ്" : "Chithali Readymade Pav Unit"}</td>
                                            </tr>
                                            <tr>
                                                <td>24</td>
                                                <td>{isMalayalam ? "മലക്കുളം തോര്‍ത്ത് യൂണിറ്റ്" : "Malakkulam Thorth Unit"}</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colspan="2">{isMalayalam ? "ആകെ നൂല്‍പ്പ് കേന്ദ്രം 21" : "Total Yarn Centers 21"}</td>
                                                <td colspan="2">{isMalayalam ? "ആകെ നെയ്ത്തു കേന്ദ്രം 24" : "Total Weaving Centers 24"}</td>
                                            </tr>
                                        </tfoot>
                                    </table>

                                    <h4 class="district-title">{isMalayalam ? "ജില്ലയുടെ പേര് : മലപ്പുറം" : "District: Malappuram"}</h4>
                                    <br />
                                    <table className="officals-table">
                                        <thead>
                                            <tr>
                                                <th colspan="2">{isMalayalam ? "നൂല്‍പ്പ് കേന്ദ്രങ്ങളുടെ പേര്" : "Yarn Centers"}</th>
                                                <th colspan="2">{isMalayalam ? "നെയ്ത്തു കേന്ദ്രങ്ങളുടെ പേര്" : "Weaving Centers"}</th>
                                            </tr>
                                            <tr>
                                                <th>{isMalayalam ? "ക്രമ നമ്പര്‍" : "Sl. No."}</th>
                                                <th>{isMalayalam ? "പേര്" : "Name"}</th>
                                                <th>{isMalayalam ? "ക്രമ നമ്പര്‍" : "Sl. No."}</th>
                                                <th>{isMalayalam ? "പേര്" : "Name"}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>{isMalayalam ? "പോറൂര്‍" : "Porur"}</td>
                                                <td>1</td>
                                                <td>{isMalayalam ? "നെടുവ" : "Neduva"}</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>{isMalayalam ? "ചെമ്പ്രശ്ശേരി" : "Chembrasseri"}</td>
                                                <td>2</td>
                                                <td>{isMalayalam ? "പോറൂര്‍" : "Porur"}</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>{isMalayalam ? "നെടുവ" : "Neduva"}</td>
                                                <td>3</td>
                                                <td>{isMalayalam ? "കുരിമ്പിന്‍തൊടി" : "Kurimpinthodi"}</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>{isMalayalam ? "പുലാമന്തോള്‍" : "Pulamanthole"}</td>
                                                <td>4</td>
                                                <td>{isMalayalam ? "മേലാറ്റൂര്‍" : "Melattur"}</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>{isMalayalam ? "ഉഗ്രപുരം" : "Ugrapuram"}</td>
                                                <td>5</td>
                                                <td>{isMalayalam ? "മങ്കട" : "Mankada"}</td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>{isMalayalam ? "രാമന്‍കുത്ത്" : "Ramankuthu"}</td>
                                                <td>6</td>
                                                <td>{isMalayalam ? "പുല്‍പ്പറ്റ" : "Pulpatta"}</td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td>{isMalayalam ? "തിരുവാലി" : "Thiruvali"}</td>
                                                <td>7</td>
                                                <td>{isMalayalam ? "ആനമങ്ങാട്" : "Anamangad"}</td>
                                            </tr>
                                            <tr>
                                                <td>8</td>
                                                <td>{isMalayalam ? "ആനമങ്ങാട്" : "Anamangad"}</td>
                                            </tr>
                                            <tr>
                                                <td>9</td>
                                                <td>{isMalayalam ? "പുല്‍പ്പറ്റ" : "Pulpatta"}</td>
                                            </tr>
                                            <tr>
                                                <td>10</td>
                                                <td>{isMalayalam ? "കൊട്ടേപ്പാടം" : "Kottepadam"}</td>
                                            </tr>
                                            <tr>
                                                <td>11</td>
                                                <td>{isMalayalam ? "മുതുകുറിശ്ശി" : "Muthukkurissi"}</td>
                                            </tr>
                                            <tr>
                                                <td>12</td>
                                                <td>{isMalayalam ? "മാമങ്കര" : "Mamankara"}</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colspan="2">{isMalayalam ? "ആകെ നൂല്‍പ്പ് കേന്ദ്രം 12" : "Total Yarn Centers 12"}</td>
                                                <td colspan="2">{isMalayalam ? "ആകെ നെയ്ത്തു കേന്ദ്രം 7" : "Total Weaving Centers 7"}</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    <br /> <br />

                                    {/* More Districts needs to be added */}


                                    <h4>ഉല്‍പ്പാദന കേന്ദ്രങ്ങളുടെ ജില്ല തിരിച്ചുള്ള വിവരം (Consolidation)</h4>
                                    <br />
                                    <table className="officals-table">
                                        <thead>
                                            <tr>
                                                <th>ജില്ല</th>
                                                <th>നൂല്‍പ്പ് കേന്ദ്രം</th>
                                                <th>നെയ്ത്തു കേന്ദ്രം</th>
                                                <th>ആകെ</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>തിരുവനന്തപുരം</td>
                                                <td>19</td>
                                                <td>17</td>
                                                <td>36</td>
                                            </tr>
                                            <tr>
                                                <td>കൊല്ലം</td>
                                                <td>16</td>
                                                <td>5</td>
                                                <td>21</td>
                                            </tr>
                                            <tr>
                                                <td>പത്തനംതിട്ട</td>
                                                <td>7</td>
                                                <td>6</td>
                                                <td>13</td>
                                            </tr>
                                            <tr>
                                                <td>ആലപ്പുഴ</td>
                                                <td>12</td>
                                                <td>5</td>
                                                <td>17</td>
                                            </tr>
                                            <tr>
                                                <td>കോട്ടയം</td>
                                                <td>14</td>
                                                <td>11</td>
                                                <td>25</td>
                                            </tr>
                                            <tr>
                                                <td>ഇടുക്കി</td>
                                                <td>1</td>
                                                <td>3</td>
                                                <td>4</td>
                                            </tr>
                                            <tr>
                                                <td>എറണാകുളം</td>
                                                <td>19</td>
                                                <td>8</td>
                                                <td>27</td>
                                            </tr>
                                            <tr>
                                                <td>തൃശ്ശുര്‍</td>
                                                <td>18</td>
                                                <td>16</td>
                                                <td>34</td>
                                            </tr>
                                            <tr>
                                                <td>പാലക്കാട്</td>
                                                <td>21</td>
                                                <td>24</td>
                                                <td>45</td>
                                            </tr>
                                            <tr>
                                                <td>മലപ്പുറം</td>
                                                <td>12</td>
                                                <td>7</td>
                                                <td>19</td>
                                            </tr>
                                            <tr>
                                                <td>കോഴിക്കോട്</td>
                                                <td>32</td>
                                                <td>26</td>
                                                <td>58</td>
                                            </tr>
                                            <tr>
                                                <td>വയനാട്</td>
                                                <td>2</td>
                                                <td>1</td>
                                                <td>3</td>
                                            </tr>
                                            <tr>
                                                <td rowspan="2">പയ്യന്നൂര്‍ ഖാദി<br />കേന്ദ്രം (കണ്ണൂര്‍,<br />കാസറകോട്)</td>
                                                <td>68</td>
                                                <td>60</td>
                                                <td>128</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2"><strong>ആകെ</strong></td>
                                                <td><strong>241</strong></td>
                                            </tr>
                                        </tbody>
                                    </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='all-footer'>
                <FooterOne isMalayalam={isMalayalam} />
            </div>
            <ScrollToTop />
        </>

    );
};

export default KhadiDepartmentUnits;